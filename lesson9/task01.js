/*

Создать Объект cocktail следующей структуры: {name: String, ingredients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
Поместить следующие методы в прототип:
- getPrice (с помощью reduce)

Создать Объект cocktails
Поместить следующие методы в прототип:
- добавить коктейль
- удалить коктейль по имени
- вернуть все
- вернуть все безалкогольные
- вернуть все алкогольные

*/


// прототип коктейля
const cocktailProto = {
    // метод подсчета суммы ингридиентов
    getPrice: function() {
        return this.ingredients.reduce(function(sum, ingredient) {
            return sum + ingredient.price
        }, 0)
    }
}


// функция для создания коктейля
function createCocktail(name, ingredients, isAlcohol, type) {
    let obj = Object.create(cocktailProto);
    obj.name = name;
    obj.ingredients = ingredients;
    obj.isAlcohol = isAlcohol;
    obj.type = type;
    return obj;
}

// создаем коктейли
let margarita = createCocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long')
let oldFashioned = createCocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long')
let bloodyMary = createCocktail('Bloody Mary', [{name: 'vodka', price: 4},{name: 'juice', price: 2} ], true, 'short')
let orangeJuice = createCocktail('Orange Jiuce', [{name: 'juice', price: 3}], false, 'long')


// прототип списка коктейлей
const cocktailsListProto = {
    add: function (cocktail) {
        this.list.push(cocktail)
    },
    remove: function (cocktail) {
        let index = this.list.indexOf(cocktail);
        if (index != -1) {
           return this.list.splice(index, 1)
        }
        return list;
    },
    showAlcohol: function () {
        return this.list.filter(item => item.isAlcohol === true)
    },
    showNonAlcohol: function () {
        return this.list.filter(item => item.isAlcohol === false)
    },
    getAll: function () {
        return this.list
    }
}

// функция создания списка коктейлей
function createCoctailsList () {
    return Object.create(cocktailsListProto, {
        list: {
            value: [],
            enumerable: true,
            writable: true,
            configurable: true
        }
    });
}

// создаем список коктейлей с помощью функции
const myCocktailList = createCoctailsList()

// добавляем созданные ранее коктейли в список коктейлей
myCocktailList.add(margarita)
myCocktailList.add(oldFashioned)
myCocktailList.add(bloodyMary)
myCocktailList.add(orangeJuice)
console.log(myCocktailList.getAll())

myCocktailList.remove(bloodyMary)
console.log(myCocktailList.getAll())

myCocktailList.showAlcohol()
console.log(myCocktailList.showAlcohol())

myCocktailList.showNonAlcohol()
console.log(myCocktailList.showNonAlcohol())