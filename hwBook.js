// HW lecture_3
// by Andrii Peliak

let userStorage = window.localStorage;

class Book {
  constructor(src, author, price) {
    this.text = '';
    this._authorName = author || "Unknown author";
    this._price = price || "Unknown price";
    if (src.includes('.txt')) {
      // if book source is url  ==>
      // assign all properties with asycn function
      let url = src;
      this.assignDataFromUrl(url);
    } else {
      this.assignDataFromString(src);
    };
  }

// init
  assignDataFromString(src) {
    this.text = src;
    this.pageArray = this.makePageArray(this.text);
    this.amountOfPages = this.pageArray.length;

    this.currentPage = 0;
  }

// async init
  async assignDataFromUrl(url) {
    let newText = await fetch(url).then((response) => {
      return response.text();
    })
    .then((text) => {
      return text.trim();
    });
    this.text = newText;

    this.pageArray = this.makePageArray(this.text);
    this.amountOfPages = this.pageArray.length;

    this.currentPage = 0;
  }

// create array of pages
  makePageArray(text) {
    let amountOfChars = text.length;
    let amountOfPages = Math.ceil(amountOfChars / 200);
    let arrayOfPages = []
    let i;
    for(i = 0; i < (amountOfPages - 1); i++) {
      arrayOfPages.push(text.slice((i * 200), ((i + 1) * 200)))
    }
    arrayOfPages.push(text.slice((i * 200), amountOfChars));
    return arrayOfPages;
  }

// returns 1 page
  startReading() {
    this.currentPage = 1;
    this.updateCurrentPage(this.currentPage);
    return this.pageArray[0];
  };

// returns next page
  nextPage() {
    if (this.currentPage == this.amountOfPages) {
      console.error("Out of range!");
    } else {
      this.currentPage += 1;
      this.updateCurrentPage(this.currentPage);
      return this.pageArray[(this.currentPage - 1)];
    }
  };

// returns previous page
  prevPage() {
    if (this.currentPage == 1 || this.currentPage == 0) {
      console.error("Out of range!");
    } else {
      this.currentPage -= 1;
      this.updateCurrentPage(this.currentPage);
      return this.pageArray[(this.currentPage - 1)];
    }
  };

// returns n page
  jumpTo(n) {
    if (n >= 1 && n <= this.amountOfPages) {
      this.currentPage = n;
      this.updateCurrentPage(this.currentPage);
      return this.pageArray[(this.currentPage - 1)];
    } else {
      console.error("Out of range!");
    }
  }

// get from localStorage last reading page
// or return first page
  continue() {
    if (userStorage.getItem('readingPage')){
      if (userStorage.getItem('readingPage') > 0 && userStorage.getItem('readingPage') <= this.amountOfPages) {
        this.currentPage = userStorage.getItem('readingPage');
        return this.jumpTo(this.currentPage);
      } else {
        console.error("You can`t continue reading, because page does not exist!");
      }
    } else {
      return this.startReading();
    }
  }

// save to localStorage current reading page
  updateCurrentPage(n) {
    if (userStorage.getItem('readingPage')) {
      userStorage.removeItem('readingPage');
      userStorage.setItem('readingPage', n);
    } else {
      userStorage.setItem('readingPage', n);
    }
  }

// return price
  price() {
    return this._price;
  }

// return author
  author() {
    return this._authorName;
  }

// walks through array and find matches
  find(findItem) {
    let arrFindPages = [];
    for(let page of this.pageArray) {
      if (page.includes(findItem)) {
        arrFindPages.push(page);
      }
    }
    if (arrFindPages.length == 1) {
      return arrFindPages[0];
    } else if (arrFindPages.length){
      return arrFindPages.join("\n\n--------------\n\n");
    } else {
      return "No matches!";
    }
  }
}

// test cases
// const i = new Book("https://www.w3.org/TR/PNG/iso_8859-1.txt", "W3", "$100");
// const b = new Book("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tincidunt diam, ut convallis tellus congue eget. Nullam a orci varius, ullamcorper turpis nec, egestas felis. Nullam consectetur sollicitudin sodales. Nullam gravida non metus a accumsan. Quisque dictum tellus enim, eget placerat urna gravida ac. Aliquam sit amet rhoncus felis. Mauris non consectetur dui. Etiam ullamcorper est neque, eget congue erat fermentum quis. Maecenas et arcu quis nulla volutpat pretium quis ultrices diam. Ut tortor purus, rutrum quis justo sed, commodo pulvinar arcu. Morbi laoreet tristique lorem vel gravida. ");
// const d = new Book("text.txt", "Lorem Ipsum");
