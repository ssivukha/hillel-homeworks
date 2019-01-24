/*
Задача 4
Дано массив строк. Необходимо обернуть каждую строку в тег span
“str” - > “<span>str</span>” и вывести получившуюся строку.
*/

function newString() {
    let array = ['1', '2', '5', '7', '0'];

    let newArray = array.map(function(name) {
        return ('<span>' + name + '</span>');
    });
    
    alert(newArray);
}