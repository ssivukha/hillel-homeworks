/*
Statements*
Дано. последовательность (массив) инструкций обозначающий направление движения. Инструкция может быть одна из четырех строк - “Left”, “Right”, “Forward”, “Back”.
Пример последовательности [“Back”, “Back”, “Forward”, “Left”, “Right”, “Right”]. 
Стартовые координаты [0;0]. 
Инструкция “Forward” увеличивает первую координату на 1,
инструкция “Back” - уменьшает первую координату на 1, 
инструкция “Right” увеличивает вторую координату на 1, 
инструкция “Left” уменьшает вторую координату на 1.
Необходимо вывести в консоль полный путь и отметить начало и конец

Пример
начало [0;0]
[-1; 0]
[-2; 0]
[-1; 0]
[-1; -1]
конец [-1;1]

*Дополнительно нужно учитывать граничные значение - обе координаты не могут быть больше 3 или меньше -3;
Если после выполнения команды данное условие может нарушиться - команду нельзя выполнять и весь процесс остановить выведя текущие координаты как конечные - игнорируя
последующие команды. Пример - имеет текущие координаты [1; 3] и поступившую команду “Right” - в данном случае мы останавливаем и выводим 
начало [0;0]
….
….
[1; 3]
конец [1; 3]
*/

const defaultInstructions = {
    back: "Back",
    forward: "Forward",
    left: "Left",
    right: "Right"
}

const instructions = ["Back", "Back", "Forward", "Left", "Right", "Right"]

function walk (instructions) {
    let location = {
        x: 0,
        y: 0
    };
    let i = 0;
    while (instractions[i]) {
        switch (instructions[i] !== undefined) {
            case defaultInstructions.back:
                if ( location.y === -3) {
                    break;
                } else{
                    location.y--
                }
            break
            case defaultInstructions.forward:
                if ( location.y === 3) {
                    break;
                } else{
                    location.y++
                }
            break
            case defaultInstructions.left:
                if ( location.x === -3) {
                    break;
                } else{
                    location.x--
                }
                
            break
            case defaultInstructions.right:
                if ( location.x === 3) {
                    break;
                } else{
                    location.x++
                }
            break
        }
        i++;
    }
    return location
}

