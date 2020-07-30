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
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price / 4 * 3;
}

let milk = new Product("Happy Milk", 100);
milk.make25PercentDiscount();
console.log(milk);

class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        }
        make25PercentDiscount() {
            this.price = this.price / 4 * 3;
        }
}

let milk2 = new Product2("Happy Milk", 100);
milk2.make25PercentDiscount();
console.log(milk2);

// Задание 1.2
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (newText) {
    this.text = this.text + newText; 
}
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    if (this.highlighted == false) {
        this.highlighted = true;
    } else {
        this.highlighted = false;
    }
}


let post1 = new Post("Ann", "Any text", "30.07.2020");
post1.edit(" New text");
console.log(post1);

let post2 = new AttachedPost("Ann", "Any text", "30.07.2020");
post2.edit(" New text");
console.log(post2);
post2.makeTextHighlighted(); 
console.log(post2); // true
post2.makeTextHighlighted(); 
console.log(post2); // false



class Post_с {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText) {
        this.text = this.text + newText;
    }
}
class AttachedPost_c extends Post_с {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        if (this.highlighted == false) {
            this.highlighted = true;
        } else {
            this.highlighted = false;
        }
    }
}

let post_c1 = new Post_с("Ann", "Any text", "30.07.2020");
post_c1.edit(" New text");
console.log(post_c1);

let post_c2 = new AttachedPost_c("Ann", "Any text", "30.07.2020");
post_c2.edit(" New text");
console.log(post_c2);
post_c2.makeTextHighlighted();
console.log(post_c2); // true
post_c2.makeTextHighlighted();
console.log(post_c2); // false
