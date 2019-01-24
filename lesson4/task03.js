/*

Задача 3*
Написать аналог функции .bind - myBind. Функция myBind должна принимать следующие параметры :
исходная функция,
контекст,
необязательный набор аргументов
Функция должна возвращать функцию - которая будет выполнять действия исходной функции с привязанным контекстом.
Пример:
var func = oldFunc.bind({}) эквивалентно  var func = myBind(oldFunc, {}).
при реализации .bind нельзя использовать. Представьте, что такой функции нет в стандарте и ее нужно реализовать

Читать Bind, Call, Apply, This, Arguments

*/

function myBind(func, context) {
	return function() {
		return func.apply(context, arguments);
	};
}

let user = {
	name: "user",
	oldFunc: function() {
	  return (this.name);
	}
};
  
let func = myBind(user.oldFunc, user);
// let func = user.oldFunc.bind(user);




