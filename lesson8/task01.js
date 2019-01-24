// сделать глубокую копию массива, с учетом того, что там могут быть объекты
function copy (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') { //this is array
            res[i] = copy(arr[i])
        } else if (arr  === 'object') {
            let obj = {};
            for (let k in arr) {
                obj[k] = copy(arr[k]);
            }
            return obj;
        }
         else {
            res[i] = arr[i];
        }
    }  
    return arr
}

let arr1 = copy([1, 6, {id: 1, name: 'test'}, [5, 1], 3])
console.log(arr1)



//Написать функцию, которая возвращает массив строк длинна которых больше N. Функция принимает массив и минимальную длинну строки
function filterArr(arr, n) {
    return res = arr.filter(function(item) {
        return item.length > n
    })
    //return res = arr.filter(item => item.length > n)
}

let arr2 = filterArr(['just', 'a', 'few', 'random', 'words'], 4);
console.log(arr2)



// Написать функцию, которая сортирует массив строк по количиству буквы (X)  в слове
// пример ['world', 'hello']   sortMe(['world', 'hello'], 'l') ---> ['hello', 'world']
function sortArr(arr, letter) {
    let res = arr.map(function(item, i) {
        return item.split(letter).length - 1;
    })


    return res.sort(function(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
    });
}

let arr3 = sortArr(['little', 'hello', 'test', 'world'], 'l');
console.log(arr3)









// 4. Применить filter, map, в пиццу(из прошлых дз)