export function task7(obj) {
    let lengthInput = document.querySelector("#widthTask7");
    let resDiv = document.querySelector(".resultTask7");
    let minVal = document.querySelector("#minTask7");
    let maxVal = document.querySelector("#maxTask7");

    if (Object.keys(obj).length === 1) {
        if ((!obj.length) || (obj.length === Infinity) || obj.length < 0) {
            let err = new Error("Wrong type of input");
            lengthInput.Value = "";
            resDiv.innerText = "";
            resDiv.innerText = "Please, insert the number in parameter 'length'. The parameter 'length' should be greater than 0";
            console.log("Please, insert the number in parameter 'length'. The parameter 'length' should be greater than 0");
            throw err;
        }
        fibLength(obj.length);
    }

    if (Object.keys(obj).length === 2) {
        if ((typeof obj.min !== "number") || (obj.min === Infinity) || obj.min < 0 || obj.min > obj.max || isNaN(obj.min)) {
            let err = new Error("Wrong type of input");
            minVal.value = "";
            maxVal.value = "";
            resDiv.innerText = "";
            resDiv.innerText = "Please, insert the number in parameter 'min'.The 'max' parameter should be greater than 'min' parametr.";
            console.log("Please, insert the number in parameter 'min'. The 'max' parameter should be greater than 'min' parametr.");
            throw err;
        }
        if ((typeof obj.max !== "number") || (obj.max === Infinity) || obj.max < 0 || isNaN(obj.max)) {
            let err = new Error("Wrong type of input");
            minVal.value = "";
            maxVal.value = "";
            resDiv.innerText = "";
            resDiv.innerText = "Please, insert the number in parameter 'max'.";
            console.log("Please, insert the number in parameter 'max'. The 'max' parameter should be greater than 'min' parametr.");
            throw err;
        }
        fibInterval(obj.min, obj.max);
    }
}

function fibInterval(min, max) {
    let resDiv = document.querySelector(".resultTask7");
    let minVal = document.querySelector("#minTask7");
    let maxVal = document.querySelector("#maxTask7");
    
    let  nextFib = 1;
    let res = [];
    for(let i = 0; nextFib <= max; i = nextFib - i) {
         nextFib += i;
         if(nextFib >= min) {
             res.push(nextFib);    
         }       
     }

     if (min === 0) {
         res.unshift(0,1);
     }
     if (min === 1) {
        res.unshift(1);
    }
     res.length--;
 
     if (res.length < 1) {
        minVal.value = "";
        maxVal.value = "";
        resDiv.innerText = "";
        resDiv.innerText = "No fibonacci numbers in this interval";
        console.log("No fibonaci numbers in this interval.");
     } else {
        minVal.value = "";
        maxVal.value = "";
        resDiv.innerText = "";
        resDiv.innerText = JSON.stringify(res);
        console.log(res);
     }        
 }
 
 
 function fibLength(number) {
     let lengthInput = document.querySelector("#widthTask7");
     let resDiv = document.querySelector(".resultTask7");
     let fibonaciNumbers = [0, 1];
     for(let i = 2; number >= String(fibonaciNumbers[fibonaciNumbers.length - 1]).length; i++) {
         let prev1 = fibonaciNumbers[i-1];
         let prev2 = fibonaciNumbers[i-2];
         fibonaciNumbers.push(prev1 + prev2);
     }
     let res = fibonaciNumbers.filter(item => {
         item = String(item);
         if (item.length === number) {
            return item;
        }
     });
     lengthInput.value = "";
     resDiv.innerText = "";
     resDiv.innerText = JSON.stringify(res);
     console.log(res);
 }

 


 
 