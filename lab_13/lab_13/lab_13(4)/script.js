var a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
var b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
var c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Incorrect data");
} else {
    var pNaDwa = (a + b + c) / 2;
    var S = Math.sqrt(pNaDwa * (pNaDwa - a) * (pNaDwa - b) * (pNaDwa - c));
    console.log("Площа трикутника: " + S.toFixed(3));
    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
        Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2)) {
        console.log("Цей трикутник є прямокутним.");
    } else {
        console.log("Цей трикутник не є прямокутним.");
    }
}