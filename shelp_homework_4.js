"use strict"
// Задание 1
function digits_of_number(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log("Нужно было ввести целое число в диопазоне от 0 до 999!!")
        return {};
    } else if (number === String(number)) {
        console.log("Вы ввели не число!!")
        return {};
    }

    this.units = Math.floor(number % 10);
    this.tens = Math.floor((number / 10) % 10);
    this.hundreds = Math.floor(number / 100);
}

let num1 = new digits_of_number(123);

// Задание 1.1
