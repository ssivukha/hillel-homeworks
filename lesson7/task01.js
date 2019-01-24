//* Написать функцию которая возвращает глубокую копию массива.(или хотябы на 1 уровень глубже чем slice)
// Написать функцию которая будет копировать элементы одного массива в другой
// Написать функцию которая удаляет самый минимальный элемент массива из него (все элементы числа)
// Написать функцию которая сортирует массив строк по длине, по возрастанию и по убыванию
// Обернуть все это в объект (условный API)



// arr3.shift()
// arr3
// arr3.splice(0)
// arr3

// arr3


function createArray(value) {
    let array = value;
    return {
        slice: function copy() { // Написать функцию которая будет копировать элементы одного массива в другой
            let newArray = [];
            for (let i = 0; i < array.length; i++) {
                if (typeof array[i] === 'object') {
                    newArray[i] = copy(array[i])
                } else {
                    newArray[i] = array[i];
                }
            }
            return newArray
        },
        delMin: function() { // Написать функцию которая удаляет самый минимальный элемент массива из него (все элементы числа)
            let min = Math.min.apply(null, array);
            //console.log(min)
            let index = array.indexOf(min);
            array.splice(index, 1)
            return array;
        },
        sort: function() { // Написать функцию которая сортирует массив строк по длине, по возрастанию и по убыванию
            array.sort(function(a, b) {
                if (a.length < b.length) {
                    return -1;
                }
                if (a.length > b.length) {
                    return 1;
                }
            })
        },
        result: function() {
            return array;
        }
    }

}

let arr1 = createArray([1, 5, 254, 9])
arr1.slice()
console.log(arr1.slice())

arr2 = createArray(["где", "самое", "длинное", "слово"])
arr2.sort()
console.log(arr2.result())

let arr3 = createArray([2, 5, 1, 254, 9])
arr3.delMin()
console.log(arr3.delMin())