/*

Задача 1
Создать объект (pizza) которые будет иметь свойства:
name - string
ingredients - array,
size - array of objects - {name: string, price: number},
getPrice - метод который вернет цену за пиццу
Выполнить задачу максимальным количество способов

*/

let pizza = {
    name: 'pizza',
    ingredients: ['bread', 'tomatoes', 'cheese', 'pasta'],
    size: [
        small = { name: 'small', price: 8.99},
        large = { name: 'large', price: 12.99}
    ],
    getPrice: function(value) {
        if (value === small) {
            return this.size[0].price;
        } else if ( value === large) {
            return this.size[1].price;
        }
    }
}

console.log(pizza.getPrice(small))
console.log(pizza.getPrice(large))

/* ======================================= */

let pizza2 = new Object();
pizza2.name = 'pizza2';
pizza2.ingredients = ['bread', 'tomatoes', 'cheese', 'pasta'];
pizza2.size = [
    small = { name: 'small', price: 8.99},
    large = { name: 'large', price: 12.99}
];
pizza2.getPrice = function(value) {
    if (value === small) {
        return this.size[0].price;
    } else if ( value === large) {
        return this.size[1].price;
    }
}

console.log(pizza2.name)
console.log(pizza2.getPrice(large))