/*
Задача 3

Дано 2 массива одинаковой длины (длина четная). Элементами массива являются исключительно числа. Необходимо сравнить массивы по индексно. 
Результатом сравнения вывести счет между массивами(если число у одного из массивов больше то добавляем к счету 1, если числа равны - ничего не меняем).
Например:
array1 = [1, 3, 4, 9], array2 = [2, 3, 6, 0]
сравниваем 1 и 2, 3 и 3, 4 и 6, 9 и 0
результат - 1:2

*/

function arrScore() {
    let array1 = [1, 3, 4, 9];
    let array2 = [2, 3, 6, 0];
    let result = {
        x: 0,
        y: 0
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > array2[i]) {
            result.x++;
        } else if (array1[i] < array2[i]) {
            result.y++;
        }
    }

    alert(result.x + ':' + result.y)
}



/* version 2  */
function arrScore() {
    let array1 = [1, 3, 4, 9];
    let array2 = [2, 3, 6, 0];
    let result = {
        x: 0,
        y: 0
    }

    for (let i = 0; i < array1.length; i++) {
       for (let j = 0; j < array2.length; j++) {
            if (array1[i] > array2[j]) {
                result.x++;
            } else if (array1[i] < array2[j]) {
                result.y++;
            }
       }
    }

    console.log(result.x + ':' + result.y)
}