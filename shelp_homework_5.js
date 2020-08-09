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

// создаем шахматную доску и раставляем шахмоты
let board = document.createElement('table');
document.body.appendChild(board);
let list_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let chess = ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л'];
let name = '';
let chess_in = { name: '', color: '' };
let step_counter = 1;
for (let row = 0; row < 8; row++) {
    let tr = document.createElement('tr');
    board.appendChild(tr);
    for (let col = 0; col < 8; col++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.classList = list_letter[row] + (col + 1);
        if (row % 2 == 0 && col % 2 != 0) {
            td.style.backgroundColor = 'black';
        } else if (row % 2 != 0 && col % 2 == 0) {
            td.style.backgroundColor = 'black';
        }
        if (row == 0) {
            td.innerHTML = chess[col];
            td.style.color = 'black';
            td.style.textShadow = 'white 1px 1px 0, white -1px -1px 0, white -1px 1px 0, white 1px -1px 0';
        } else if (row == 7) {
            td.innerHTML = chess[col];
            td.style.color = 'white';
            td.style.textShadow = 'black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0';
        }
        if (row == 1) {
            td.innerHTML = 'п';
            td.style.color = 'black';
            td.style.textShadow = 'white 1px 1px 0, white -1px -1px 0, white -1px 1px 0, white 1px -1px 0';
        } else if (row == 6) {
            td.innerHTML = 'п';
            td.style.color = 'white';
            td.style.textShadow = 'black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0';
        }
        td.addEventListener('click', {
            handleEvent(event) {
                if (step_counter % 2 != 0) {
                    takeChees(event);
                } else {
                    putChees(event);
                }
                step_counter++
            }
        });
    }
}
console.log('pause');

// создаем возможность двигать фигуры
function takeChees(event) {
    if (event.target.innerText == '') {  //чтобы не сделать копию уже пустой ячейки
        step_counter++
        return
    }
    chess_in.name = event.target.innerText;
    chess_in.color = event.target.style.color;
    event.target.innerText = '';
    event.target.style.color = '';
}

function putChees(event) {
    event.target.innerText = chess_in.name;
    event.target.style.color = chess_in.color;
    if (chess_in.color == 'black') {
        event.target.style.textShadow = 'white 1px 1px 0, white -1px -1px 0, white -1px 1px 0, white 1px -1px 0';
    } else {
        event.target.style.textShadow = 'black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0';
    }
}