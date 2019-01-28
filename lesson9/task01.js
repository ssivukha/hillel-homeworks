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

let cocktail = {
    name: 'name',
    ingridients: [
        {name: 'name', price: 5}
    ],
    isAlcohol: true || false,
    type: 'long' || 'short',
    getPrice: function() {
        let result = this.ingridients.reduce(function (prev, current){
            let res = prev.price + current.price
            //console.log(current)
            return{
                price: res
            }
        })
        return result
    }
}


let pinaColada = Object.create(cocktail);
pinaColada.name = 'pina colada';
pinaColada.ingridients = [
    {name: 'Rom', price: 5},
    {name: 'Juice', price: 2},
    {name: 'Liquor', price: 4},
];
pinaColada.isAlcohol = true;
pinaColada.type = 'long';
pinaColada.getPrice()

console.log(pinaColada)
console.log(pinaColada.getPrice())



let blodyMary = Object.create(cocktail);
blodyMary.name = 'Bloody Mary';
blodyMary.ingridients = [
    {name: 'Vodka', price: 4},
    {name: 'Juice', price: 2},
    {name: 'Solt', price: 1},
];
blodyMary.isAlcohol = true;
blodyMary.type = 'short';
blodyMary.getPrice()

console.log(blodyMary)
console.log(blodyMary.getPrice())



let orangeJuice = Object.create(cocktail);
orangeJuice.name = 'Orange Juice';
orangeJuice.ingridients = [
    {name: 'Juice', price: 2}
];
orangeJuice.isAlcohol = false;
orangeJuice.type = 'long';
orangeJuice.getPrice()

console.log(orangeJuice)
console.log(orangeJuice.getPrice())




let cocktails = {
    items: [],
    add: function copy(value) {
        this.items.push(value)
    },
    removeByName: function(value) {
        let index = this.items.indexOf(value);
        if (index != -1) {
            return this.items.splice(index, 1)
        }
        return items;
    },
    showAlcohol: function() {
        let result = this.items.map(function (prev, current) {
            if (prev.isAlcohol && current.isAlcohol === true) 
            return this.items
        })
        return result;

        //if (this.items.isAlcohol === true) {
        //    return this.items
        //}
    },
    showNonAlcohol: function() {

    },
    showCocktails: function() {
        return this.items
    }
}

cocktails.add(pinaColada)
cocktails.add(blodyMary)
cocktails.add(orangeJuice)
console.log(cocktails.showCocktails())


cocktails.removeByName(blodyMary)
console.log(cocktails.showCocktails())


cocktails.showAlcohol()
console.log(cocktails.showAlcohol())