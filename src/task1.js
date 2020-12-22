export function task1(width, height, symbol) {
    let demonstration = document.querySelector(".resultTask1");
    symbol = String(symbol).trim();
    if ((typeof width !== "number") || (!width) || width < 1) {
        let err = new Error("Wrong type of input");
        demonstration.innerText = "";
        demonstration.innerText = "Please, insert a number in width parametr!";
        console.log("Please, insert a number in width parametr!");
        throw err;
    }

    if ((typeof height !== "number") || (!height) || height < 1) {
        let err = new Error("Wrong type of input");
        demonstration.innerText = "";
        demonstration.innerText = "Please, insert a number in height parametr!";
        console.log("Please, insert a number in height parametr!");
        throw err;
    }

    if (symbol.length > 1 || !symbol) {
        let err = new Error("Wrong type of input");
        demonstration.innerText = "";
        demonstration.innerText = "Please, insert one symbol in symbol parametr!";
        console.log("Please, insert one symbol in symbol parametr!");
        throw err;
    }

    createDesk(width, height, symbol);
}

function createDesk(row, cols, symbol) {
    let result = '';
    let demonstration = document.querySelector(".resultTask1");
 
    for (let i = 0; i < cols; i++) { 
        for (let j = 0; j < row; j++) { 
            if (i % 2 === 0) { 
                result += symbol + ' '; 
            } else { 
                result += ' ' + symbol ; 
            } 
        } 
        result += '\n'; 
    } 
    console.log(result);
    demonstration.innerText = "";
    demonstration.innerText = result;
}












