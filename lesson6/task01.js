// создать функцию которая вернет объект,
// содержащий методы реализующие основные арифметические операции (+ - * /)
// добавить метод clear
// добавить метод showResult (=)


function createCalc() {
    let result = 0;
    return {
        plus: function(value) {
            result += value
        },
        minus: function(value) {
            result -= value
        },
        multiply: function(value) {
            result *= value
        },
        split: function(value) {
            result /= value
        },
        clear: function() {
            result = 0
        },
        showResult: function() {
            return result
        }
        
    }
}

createCalc()

let calc = createCalc();
calc.plus(5)
calc.minus(1)
calc.multiply(3)
calc.split(2)
//calc.clear()

console.log(calc.showResult())