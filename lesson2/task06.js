/*
Дано произвольное число - цена (5.99 или 2.55). Если данное число меньше определенной константы 
например 4 - применить к данной цене скидку равную 25% и вывести на экран. 
Если цена больше или равна определенной константе(4) применить скидку 10% и вывести полученную цену на экран 
*/

var price = 5.99;
const minPrice = 4

if (price > minPrice){
    discount = (price * 25 / 100);
    totalPrice = (price - discount);
    console.log(Math.round(totalPrice * 100) / 100)
} else {
    discount = (price * 10 / 100);
    totalPrice = (price - discount);
    console.log(Math.round(totalPrice * 100) / 100)
}