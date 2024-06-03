var isAdult = prompt("Вам вже виповнилося 18 років? Введіть 'так' або 'ні':");
if (isAdult.toLowerCase() === 'так' || isAdult.toLowerCase() === 'yes') {
    alert("Ви досягли повнолітнього віку.");
} else if (isAdult.toLowerCase() === 'ні' || isAdult.toLowerCase() === 'no') {
  alert("Ви ще надто молоді.");
} else {
  alert("Неправильний ввід. Будь ласка, введіть 'так' або 'ні'.");
}