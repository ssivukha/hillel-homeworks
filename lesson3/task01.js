/*
Задача 1
                    
Дано целое число N (> 1). Если оно является простым, то есть не имеет положительных делителей, кроме 1 и самого себя, то вывести True, иначе вывести False.
*/

function checkNumber(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
            return false;  
    }
    return true;
}