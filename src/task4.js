export function task4(number) {
   let resDiv = document.querySelector(".resultTask4");
   let input = document.querySelector("#numberTask4");
   if ((typeof number !== "number") || (!number) || (number === Infinity) || (number === 0)) {
    let err = new Error("wrong type of input");
    console.log("Please, insert one number greater or less than zero.");
    input.value = "";
    resDiv.innerText = "";
    resDiv.innerText = "Please, insert one number greater or less than zero.";
    throw err;
    }
    number = String(number);
    findPalindrom(number);
}


function findPalindrom(number) {
    let resDiv = document.querySelector(".resultTask4");
    let input = document.querySelector("#numberTask4");
    let palindrom = [];
    let splitedNumber = number.split("");
    
    for(let i = 0; i < splitedNumber.length; i++) {
        let stringForCheck = splitedNumber[i];
        
        for (let j = i + 1; j < splitedNumber.length; j++) {
            stringForCheck += splitedNumber[j];
            let reversedNumber = stringForCheck.split("").reverse().join("");
            if (stringForCheck === reversedNumber) {
                palindrom.push(stringForCheck);
            }
        }
    }

    let res;

    if (number > 0) {
        let positivePalindrom = palindrom.map(item => {
            return +item;
        });
        res = Math.max(...positivePalindrom);
    }

    if (number < 0) {
        let negativePalindrom = palindrom.map(item => {
            return -item;
        });
        res = Math.min(...negativePalindrom);
    }
    
    if (res === Infinity || res === -Infinity) {
        input.value = "";
        resDiv.innerText = "";
        resDiv.innerText = 0;
        console.log(0);
    } else {
        input.value = "";
        resDiv.innerText = "";
        resDiv.innerText = res;
        console.log(res);
    }

}









