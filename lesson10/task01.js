// 1. Переписать класс используя Object.create
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create

class Button {
    constructor (label, width, height) {
        this.label = label;
        this.width = width;
        this.height = height;
        this.events = []
    }
    registerEvent (type, callback) {
        this.events.push({
            id: Date.now(), //  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/now
            type: type,
            callback: callback
        });
    }
    getEvents () {
        return this.events
    }
    clearEvents () {
        this.events = [];
    }
    getEvenstByType (type) {
        return this.events.filter(function (event) {
            return event.type === type;
        })
    }
}
let btn1 = new Button('test', 50, 50)
btn1.registerEvent('click', ()=>{})
console.log(btn1.getEvenstByType('click'))


///////

const buttonProto = {
    registerEvent: function (type, callback) {
        this.events.push({
            id: Date.now(),
            type: type,
            callback: callback
        });
    },
    getEvents: function () {
        return this.events
    },
    clearEvents: function () {
        this.events = [];
    },
    getEvenstByType: function (type) {
        return this.events.filter(function (event) {
            return event.type === type;
        })
    }
}

function createBtn (label, width, height) {
    let obj = Object.create(buttonProto);
    obj.label = label;
    obj.width = width;
    obj.height = height;
    obj.events = [];
    return obj;
}


let btn2 = createBtn('test', 50, 50);
btn2.registerEvent('click', ()=>{})
console.log(btn2.getEvenstByType('click'))




// 2. Написать класс
// Необходимо переписать данный функционал использую синтаксис классов 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

const ingridientsProto = {
    add: function (ingredient) {
        this.items.push(ingredient);
    },
    getAll: function () {
        return this.items;
    },
    getByName: function (name) {
        return this.items.find(function (item) {
            return item.name === name
        })
    }
}
function createIngridientsList () {
    let list = Object.create(ingridientsProto);
    list.items = [];
    return list;
}
let myIngredients = createIngridientsList();
myIngredients.add({name: 'tequila', price: 5})
myIngredients.add({name: 'vodka', price: 3})
console.log(myIngredients.getByName('tequila'))


///////

class Ingridients {
    constructor () {
        this.items = [];
    }
    add (ingredient) {
        this.items.push(ingredient);
    }
    getAll () {
        return this.items;
    }
    getByName (name) {
        return this.items.find(function (item) {
            return item.name === name
        })
    }
}


let myIngredients2 = new Ingridients()
myIngredients2.add({name: 'tequila', price: 5})
myIngredients2.add({name: 'vodka', price: 3})

console.log(myIngredients2.getAll())
console.log(myIngredients2.getByName('tequila'))