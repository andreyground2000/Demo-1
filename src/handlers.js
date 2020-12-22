import {task1} from "./task1.js";
import {task2} from "./task2.js";
import {task3} from "./task3.js";
import {task4} from "./task4.js";
import {task5} from "./task5.js";
import {task6} from "./task6.js";
import {task7} from "./task7.js";

//Task1
export function handlerForTask1() {
    let width = document.querySelector("#widthTask1");
    let height = document.querySelector("#heightTask1");
    let symbol = document.querySelector("#symbolTask1");
    task1(+width.value, +height.value, symbol.value);
    width.value = "";
    height.value = "";
    symbol.value = "";
}

//Task2
export function handlerForTask2() {
    let a = document.querySelector("#aTask2");
    let b = document.querySelector("#bTask2");
    let c = document.querySelector("#cTask2");
    let d = document.querySelector("#dTask2");
    task2({a: +a.value, b: +b.value}, {c: +c.value, d: +d.value});
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
}

//Task 3
let arrOfTr = [];

export function handlerAddTrTask3() {
    let demonstrationDiv = document.querySelector(".resultTask3");
    let verticesTr = document.querySelector("#verticiesTask3");
    let side1 = document.querySelector("#side1Task3");
    let side2 = document.querySelector("#side2Task3");
    let side3 = document.querySelector("#side3Task3");
    let reg = /[A-Za-z]{3}/;
    if ((!Number(side1.value)) || (!Number(side2.value)) || (!Number(side3.value))) {
        let err = new Error("wrong type of input");
        console.log("You should insert numbers greater than zero in sides parametres. Please, insert correct values in inputs and try again.");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "You should insert numbers greater than zero in sides parametres. Please, insert correct values in inputs and try again.";
        verticesTr.value = "";
        side1.value = "";
        side2.value = "";
        side3.value = "";
        arrOfTr.length = 0;
        throw err;
    }
    if(reg.test(verticesTr.value)) {
        let arrOfSides = verticesTr.value.toLowerCase().split("");
        let [s1, s2, s3] = arrOfSides;
        arrOfTr.push({vertices: verticesTr.value, [s1]: +side1.value, [s2]: +side2.value, [s3]: +side3.value});
        verticesTr.value = "";
        side1.value = "";
        side2.value = "";
        side3.value = "";
        demonstrationDiv.innerText = "";
    } else {
        let err = new Error("wrong type of input");
        console.log("The names of the vertices should include 3 english letters. Please, insert correct values in inputs and try again.");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "The names of the vertices should include 3 english letters. Please, insert correct values in inputs and try again.";
        verticesTr.value = "";
        side1.value = "";
        side2.value = "";
        side3.value = "";
        arrOfTr.length = 0;
        throw err;
    }

}

export function handlerCountTask3() {
    task3(arrOfTr);
}

//Task 4
export function handlerForTask4() {
    let number = document.querySelector("#numberTask4");
    task4(+number.value);
}

//Task 5
export function handlerForTask5() {
    let minVal = document.querySelector("#minTask5").value;
    let maxVal = document.querySelector("#maxTask5").value;
    task5({min: +minVal, max: +maxVal});
}

//Task6
export function handlerForTask6() {
    let nVal = document.querySelector("#nTask6");
    let mVal = document.querySelector("#mTask6");
    let resDiv = document.querySelector(".resultTask6");
    if (nVal.value === "") {
        let err = new Error("Wrong type of input");
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the natural number in parameter 'n'.";
        console.log("Please, insert the number in parameter 'n'.");
        throw err; 
    }
    if (mVal.value === "") {
        let err = new Error("Wrong type of input");
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the natural number in parameter 'm'.";
        console.log("Please, insert the number in parameter 'm'.");
        throw err; 
    }
    task6(+nVal.value, +mVal.value);
}

//Task 7
export function handlerLengthBtnTask7() {
    let lengthInput = document.querySelector("#widthTask7").value;
    task7({length: +lengthInput});
}

export function handlerMinMaxBtnTask7() {
    let resDiv = document.querySelector(".resultTask7");
    let minV = document.querySelector("#minTask7").value;
    let maxV = document.querySelector("#maxTask7").value;
    if (minV === "") {
        let err = new Error("Wrong type of input");
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the number in parameter 'min'.The 'max' parameter should be greater than 'min' parametr.";
        console.log("Please, insert the number in parameter 'min'.The 'max' parameter should be greater than 'min' parametr.");
        throw err;
    }
    if (maxV === "") {
        let err = new Error("Wrong type of input");
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the number in parameter 'max'.The 'max' parameter should be greater than 'min' parametr.";
        console.log("Please, insert the number in parameter 'max'.The 'max' parameter should be greater than 'min' parametr.");
        throw err;
    }
    task7({min: +minV, max: +maxV});
}