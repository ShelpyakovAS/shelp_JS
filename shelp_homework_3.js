"use strict"

// Задание 2
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль.")
    } else if (i % 2 == 0) {
        console.log(i + " - это четное число.")
    } else {
        console.log(i + " - это нечетное число.")
    }
}


// Задание 3
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// Задание 4
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(i => {
    i.price = i.price / 100 * 85;
});


// Задание 5
const products_2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    }
]

let products_with_photo = products_2.filter(i => "photos" in i && i.photos.length > 0)
console.log(products_with_photo);
products_2.sort(function(i, j) {
    return i.price - j.price;
});
console.log(products_2);


// Задание 6
for (let i = 0; i <= 9; console.log(i++)) {}


// Задание 7
for (let i = ""; i.length <= 19; console.log(i = i + "x")) {}