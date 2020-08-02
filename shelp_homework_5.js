"use strict"
// Задание 3-а,б
let wrap = document.querySelector('.wrap');

let span = wrap.querySelector('span');

let button = document.querySelector('button');

button.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
    wrap.classList.remove('hidden', 'puffOut');
    wrap.classList.add('magictime', 'puffIn');
}


span.addEventListener('click', spanClickHandler);
function spanClickHandler() {
    wrap.classList.remove('puffIn');
    wrap.classList.add('puffOut');
    setTimeout(function () { wrap.classList.add('hidden');}, 1000);
}


// Задание 4
let prod_buttom = document.querySelectorAll('.prod_button');
prod_buttom.forEach(function (button) {
    button.addEventListener('click', function (event) {
        clickButtonFunc(event);
    });
});

function clickButtonFunc(clickEvent) {
    let divParent = clickEvent.target.parentNode;
    let parentCard = {
        wrap: divParent,
        img: divParent.querySelector('img'),
        productName: divParent.querySelector('.productName'),
        button: divParent.querySelector('button')
    }
    let textButton = parentCard.button.innerText;
    if (textButton === 'Подробнее') {
        showText(parentCard);
    } else if (textButton === 'Отмена') {
        hideText(parentCard);
    }
}

function showText(parentCard) {
    parentCard.img.style.display = 'none';
    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nesciunt nobis dolorum molestiae saepe libero repudiandae magnam, quae excepturi. Optio commodi dolorum, ullam harum assumenda explicabo exercitationem est soluta id."
    parentCard.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    parentCard.button.innerText = 'Отмена';
}

function hideText(parentCard) {
    parentCard.img.style.display = 'block';
    parentCard.wrap.querySelector('.desc').remove();
    parentCard.button.innerText = 'Подробнее';
}


//Задание 5

let last_div_prod = document.querySelector('p');
last_div_prod.insertAdjacentHTML('afterend', getChess());

function getChess() {
    let text = '<div class="container">';
    let i = 1;
    while (i != 9) {
        if (i % 2 == 0) {
            text += getFistLine();
            i++;
        } else {
            text += getSecnLine();
            i++;
        }
    }
    text += "</div>";
    return text;
}

function getFistLine() {
    let i = 1;
    let text = "";
    while (i != 9) {
        if (i % 2 == 0) {
            text += '<div class="chess white"></div>';
            i++;
        } else {
            text += '<div class="chess black"></div>';
            i++;
        }
    }
    return text;
}

function getSecnLine() {
    let i = 1;
    let text = "";
    while (i != 9) {
        if (i % 2 == 0) {
            text += '<div class="chess black"></div>';
            i++;
        } else {
            text += '<div class="chess white"></div>';
            i++;
        }
    }
    return text;
}
console.log("123");