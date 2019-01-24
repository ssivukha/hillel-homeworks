/*
Задача 2                      
Дано целое число N (> 0). Найти количество и сумму его цифр.
*/

function getNumbersSum(num) {
    let number = '' + num;
    let result = 0;
    for (let i = 0; i < number.length; i++) 
        result += +number[i]
    return result
}