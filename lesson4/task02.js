/*

Задача 2
Написать функцию которая будет создавать объекты имеющие структуру описанную в первой задаче. 

http://jsraccoon.ru/oop-constructors

*/

/*function cloneObj() {
    let obj = {
        name: '',
        ingredients: [],
        size: [
            { name: '', price: 0},
            { name: '', price: 0}
        ]
    }
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    

   console.log(newObj)
}*/


function object(name, ingredients, smallPrice, largePrice) {
    this.name = name;
    this.ingredients = ingredients;
    this.size = [
        small = { name: 'small', price: smallPrice},
        large = { name: 'large', price: largePrice}
    ]
};
  
const newObject = new object('Vasya', ['1', '2', '3'], 4, 8 );

console.log(newObject);