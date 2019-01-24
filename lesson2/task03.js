/*
String
Задача 3*
Дано - есть произвольная строка. Вывести на экран слово имеющее максимальную длину. 
Если таких слов несколько вывести то, которое встречается раньше.
*/

var str = "this is random string";
var arr = str.split(" ");
var longestWord = arr[0];
for(var i=0; i<arr.length; i++) {
    longestWord = (longestWord.length<arr[i].length) ? arr[i] : longestWord;
}
console.log(longestWord);
