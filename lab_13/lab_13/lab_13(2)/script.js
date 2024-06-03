var a = prompt("Будь ласка, введіть число:");
if (a % 2 === 0 && a > 0) {
    console.log(a + " є парним додатним числом.");
} else {
    console.log(a + " не є парним додатним числом.");
}
if (a % 7 === 0) {
    console.log(a + " кратне числу 7.");
} else {
    console.log(a + " не кратне числу 7.");
}