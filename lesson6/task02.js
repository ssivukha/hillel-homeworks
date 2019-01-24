// Функция которая создает пиццы по типу create human (название, ингридиенты, цена)
// Функция которая создает пиццы - просто по ингридиентам (ингридиенты)
// Функция которая Pizza Manager - которая создает пиццы, на основе массива который передаем

// Два типа пицц - из меню
// Пицца наборная - цена которой вычисляется из суммы ингридиентов

/*
   Pizza
   {
       name: ''                  // ''
       ingridients: [ingridient] // [{name: 'cheese', price: 2}, {name: 'tomato', price: 3}]
       price: number
       type: custom || menu
       getPrice:
   }
   Ingridient {
       name: '',
       price: number
   }
*/

// createPizza('margarita', 25, [{name:'cheese', price: 3}, {name:'basil', price: 4}, {name:'tomato', price: 4}])
// createPizza('Pizza order number 25', 20, [{name:'cheese', price: 3}, {name:'basil', price: 4}, {name:'tomato', price: 4}])


function createPizza(name, ingridients, price) {
    return {
        name: '',
        ingridients: [
            base = {
                name: 'Base',
                price: 5
            },
            bacon = {
                name: 'Bacon',
                price: 8
            },
            cheese = {
                name: 'Cheese',
                price: 4
            },
            basil = {
                name: 'Basil',
                price: 2
            },
            tomato = {
                name: 'tomato',
                price: 3
            },
        ],
        price: number,
        type: custom || menu,
        getPrice: function() {
           
            
            return number
        }
    }
}


let pizza1 = createPizza('margarita');
let pizza2 = createPizza('', ['cheese', 'tomato']);

console.log(pizza1);
console.log(pizza2);