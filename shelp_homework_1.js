"use strict"


// Задание 1.
let degree_c = 36.6;
let degree_f = (9 / 5) * degree_c + 32;
alert("Tемпература тела человека по фаренгейту " + ( Math.floor(degree_f * 100) / 100 ));


// Задание 2.
let admin = null;
let name = null;
name = "Василий";
admin = name;
console.log(admin)


// Задание 3.
let result_1 = 10 + 10 + "10";
console.log(result_1); 
// "(10 + 10)" + "10" == "2010" (слева на право складываются два числа, при сложении с строкой число тоже приводится к строке)

let result_2 = 10 + "10" + 10;
console.log(result_2); 
// "10" + "10" + "10" == "101010" (тоже что и сверху но так как строка по центру все сложения идут с строкой)

let result_3 = 10 + 10 + +"10";
console.log(result_3); 
// 10 + 10 + 10 == 30 (преобразование строки в число через унарный +)

let result_4 = 10 / -"";
console.log(result_4); 
// 10 / -0 == -Infinity (унарный - преобразовал пустую строку в число -0)

let result_5 = 10 / +"2.5";
console.log(result_5); 
// 10 / 2.5 == 4 (преобразование строки в число через унарный +)


//Задание 4.
let mode = "normal";
let my_valu3 = 102;
// let 3my_value3 = "102"; не должно начинаться с цифры
let __hello__ = "world"; // работать будет, но __ обычно обозначение особенной переменной в разных языках. (скрытой например)
let $$$ = "money"; // так можно, но только для "money" в ином случае информативности не будет.
// let !0_world = true; в начале может быть буква или символ $ остальные символы нельзя.