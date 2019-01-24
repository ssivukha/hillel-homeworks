/*
String
Задача 1
Дано строка произвольной длины. Необходимо вывести в консоль перевернутую строку. Пример - “bar” “rab”
*/
var str = "bar";
str = str.split("").reverse().join("");
console.log(str)