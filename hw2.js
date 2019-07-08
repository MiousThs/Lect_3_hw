const newMap = new Map();
newMap.set(true, "that`s a boolean");
const a = {b: 'ab', c: 'ac'};
newMap.set(a, "that`s an object");
const d = [1, 2, 3, 4];
newMap.set(d, "that`s an array");
newMap.set('e', "that`s a string");
console.log(newMap.has(d));
console.log(newMap.size);
console.log(newMap.get(a));
newMap.delete('e');
console.log(newMap);
for(item of newMap) {
    console.log(item);
}
newMap.clear();
console.log(newMap.size);
