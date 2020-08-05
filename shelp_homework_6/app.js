"use strict"

// Задание 2
let sliders_hidden = document.querySelectorAll('.slider_hidden');

let left_button = document.querySelector('.prev');
let right_button = document.querySelector('.next');

sliders_hidden[0].style.visibility = "visible";

function is_visible(sliders_hidden) {
    for (let i = 0; ; i++) {
        if (sliders_hidden[i].style.visibility == "visible") {
            return i;
        }
    }

}

left_button.addEventListener('click', function () {
    let i = is_visible(sliders_hidden);
    sliders_hidden[i].style.visibility = "hidden";
    if (i == 0) {
        sliders_hidden[sliders_hidden.length - 1].style.visibility = "visible";
    } else {
        sliders_hidden[i - 1].style.visibility = "visible";
    }
});

right_button.addEventListener('click', function () {
    let i = is_visible(sliders_hidden);
    sliders_hidden[i].style.visibility = "hidden";
    if (i == sliders_hidden.length - 1) {
        sliders_hidden[0].style.visibility = "visible";
    } else {
        sliders_hidden[i + 1].style.visibility = "visible";
    }
});

// Задание 3

let basket = document.querySelector('.my_basket');
let buttons = document.querySelectorAll('.in_basket');
let total_price = document.querySelector('.total_price');
let total = 0;

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        basket.insertAdjacentHTML('afterbegin', getbutton_info(button));
        total += Number(button.dataset.price);
        total_price.innerHTML = total;
    });
});


function getbutton_info(button) {
    let name = button.dataset.name;
    let price = button.dataset.price;
    let id = button.dataset.id;
    return "<div class=prod_id_" + id + "> Наименование товара: " + name + "; Цена товара: " + price + ".<button class=del_div_" + id + ">Отмена</div></div>";
}


















