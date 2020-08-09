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

let buttons = document.querySelectorAll('.in_basket');
let basket2 = document.createElement('table');
let slider = document.querySelector('.slider'); 
let basket2_children = basket2.children;
slider.after(basket2);
basket2.className = 'basket2';

let product_0 = {     // Разовый объект для создания меню корзины
    id: 'ID number:',
    name: 'Product name:',
    num_in: 'Quantity:',
    price: 'Price:'
}

addToBasket(product_0);
let total = new totalPriceObj();
addToBasket(total);

buttons.forEach(function (button) {
    button.addEventListener('click', {
        handleEvent(event) {
            event.target.dataset.num_in = Number(event.target.dataset.num_in) + 1;
            let product = new productObj(event.target);
            addToBasket(product);
            let total = new totalPriceObj();
            addToBasket(total);
        }
    });
});

function totalPriceObj() { // функция для пересоздания объекта Итоговой цены
    return {
        id: '',
        name: 'TotalPrice:',
        num_in: totalNum_in(),
        price: totalPrice()
    }
}

function totalNum_in() { // подсчет Количества в объекте Итоговой цены
    let num = 0;
    for (let i = 0; i < buttons.length; i++) {
        num += Number(buttons[i].dataset.num_in);
    }
    return num;
}

function totalPrice() {  // подсчет Цены в объекте Итоговой цены
    let num = 0;
    for (let i = 0; i < buttons.length; i++) {
        num += Number(buttons[i].dataset.price * buttons[i].dataset.num_in);
    }
    return num;
}

function productObj(target) { // приведение data- к форме объекта
    return {
        id: target.dataset.id,
        name: target.dataset.name,
        num_in: target.dataset.num_in,
        price: target.dataset.price
    }
}

function addToBasket(product) { // Обрабатывает добавление всех типов Объектов
    for (let i = 0; i < basket2_children.length; i++) {
        if (basket2_children[i].className == product.name) {
            basket2_children[i].remove();
        }
    }
    if (product.name != 'TotalPrice:') {
        let tr = document.createElement('tr');
        if (product.id == 1) {     // обработчик места создания продукта в таблице на основе data-id
            let place_1 = basket2.children[0];
            place_1.after(tr);
        } else if (product.id == 2) {
            if (basket2.children[1].className == 'cat') {
                let place_2 = basket2.children[1];
                place_2.after(tr);
            } else if (basket2.children[1].className == 'dog') {
                let place_2 = basket2.children[1];
                place_2.before(tr);
            } else {
                basket2.appendChild(tr);
            }
        } else if (product.id == 2) {
            let place_3 = basket2.children[basket2.length - 1]
            place_3.before(tr);
        } else {
            basket2.appendChild(tr);
        }
        tr.className = product.name;
        for (let key in product) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = product[key];
            td.style.outline = '1px solid black';
            td.style.width = '20%';
        }
        if (product.name == 'Product name:' || product.name == 'TotalPrice:') {
            return
        } else {          //создание кнопки Отмена
            let td = document.createElement('td');
            tr.appendChild(td);
            let canсel = document.createElement('button');
            td.appendChild(canсel);
            canсel.innerHTML = 'Отмена'
            canсel.dataset.id = product.id;
            canсel.dataset.num_in = product.num_in;
            canсel.dataset.name = product.name;
            canсel.dataset.price = product.price;
            canсel.addEventListener('click', {      // Обработчик клика для кнопки отмена
                handleEvent(event) {
                    event.target.dataset.num_in = Number(event.target.dataset.num_in) - 1;
                    buttons[Number(event.target.dataset.id) - 1].dataset.num_in = String(buttons[Number(event.target.dataset.id) - 1].dataset.num_in - 1);
                    let product = new productObj(event.target);
                    if (event.target.dataset.num_in == 0) {
                        delFromBasket(product);
                        let total = new totalPriceObj();
                        addToBasket(total);
                    } else {
                        addToBasket(product);
                        let total = new totalPriceObj();
                        addToBasket(total);
                    }

                }
            });
        }
    }
    if (product.name == 'TotalPrice:') {
        let tr = document.createElement('tr');
        basket2.appendChild(tr);
        tr.className = product.name;
        for (let key in product) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = product[key];
            td.style.outline = '1px solid black';
            td.style.width = '20%';
        }
    }

}

function delFromBasket(product) {  // удаляет обЪект таблици корзины при его пересоздании
    for (let i = 0; i < basket2_children.length; i++) {
        if (basket2_children[i].className == product.name) {
            basket2_children[i].remove();
        }
    }
}
 














