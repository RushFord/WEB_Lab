let array = [2, 3, 4, 5];
let productFor = 1;
for (let i = 0; i < array.length; i++) {
    productFor *= array[i];
}
console.log("Добуток елементів масиву (for):", productFor);
let productWhile = 1;
let j = 0;
while (j < array.length) {
    productWhile *= array[j];
    j++;
}
console.log("Добуток елементів масиву (while):", productWhile);