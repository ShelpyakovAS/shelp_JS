"use strict"

// Задание 1
//пример 1
let a = 1, b = 1, c, d; // тоже что и let a = 1; let b = 1; let c: let d;
c = ++a;  // c = 2 и a = 2, ++a будет увеличивать значение a, а затем возвращать увеличенное значение.
alert(c); // ответ: 2
//пример 2
d = b++; // d = 1 b = 2, b++будет увеличивать значение b, но вернет исходное значение, которое b удерживалось до увеличения.
alert(d); //ответ: 1
//пример 3
c = 2 + ++a; // так как ++a увеличит значение a еще на 1 как в первом примере, с = 2 + 3
alert(c); //ответ: 5
//пример 4
d = 2 + b++; // d = 2 + 2, b = 3 увеличение как в во втором примере.
alert(d); //ответ: 4
alert(a); //3
alert(b); //3


// Задание 2        // переименовал а  в  a2.
let a2 = 2;
let x = 1 + (a2 *= 2); // Можно также записать в виде let a2 = 2; a2 = a2 * 2; let x = 1 + a2;


// Задание 3
let a3 = 5;
let b3 = -8;

if (a3 >= 0 && b3 >= 0) {
	alert(a3 - b3);
} else if (a3 < 0 && b3 < 0) {
	alert(a3 * b3);
} else if (a3 >= 0 && b3 < 0 || b3 >= 0 && a3 < 0) {
	alert(a3 + b3);
}


// Задание 4
function num_sum(a, b) {
		return a + b;
}
function num_diff(a, b) {
	return a - b;
}
function num_mult(a, b) {
	return a * b;
}
function num_div(a, b) {
	return a / b;
}


// Задание 5
function mathOperation(arg1, arg2, operation) {
	if (operation == "+") {
		return num_sum(arg1, arg2);
	} else if (operation == "-") {
		return num_diff(arg1, arg2);
	} else if (operation == "*") {
		return num_mult(arg1, arg2);
	} else if (operation == "/") {
		return num_div(arg1, arg2);
	} 
}
alert(mathOperation(4, 4, "+"));
alert(mathOperation(4, 4, "-"));
alert(mathOperation(4, 4, "*"));
alert(mathOperation(4, 4, "/"));


// Задание 6

let user_sum = prompt("Укажите сумму, которую вы хочетите положить на счет в банке.");
let end_sum = user_sum.substr(-1);
let end2_sum = user_sum.substr(-2); // исключение при 11
let case_r = "рубль";
if (end_sum == "2" || end_sum == "3" || end_sum == "4") {
	case_r = "рубля";
} else if (end_sum == "5" || end_sum == "6" || end_sum == "7" || end_sum == "8" || end_sum == "9" || end_sum == "0" || end2_sum == "11") {
	case_r = "рублей";
}

alert("Ваша сумма в " + user_sum + " " + case_r + " успешно зачислена.");