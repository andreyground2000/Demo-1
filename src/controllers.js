import {handlerForTask1} from "./handlers.js";
import {handlerForTask2} from "./handlers.js";
import {handlerAddTrTask3, handlerCountTask3} from "./handlers.js";
import {handlerForTask4} from "./handlers.js";
import {handlerForTask5} from "./handlers.js";
import {handlerForTask6} from "./handlers.js";
import {handlerLengthBtnTask7} from  "./handlers.js";
import {handlerMinMaxBtnTask7} from "./handlers.js";

export function controllers() {
    document.querySelector("#task1Btn").addEventListener("click", handlerForTask1);
    
    document.querySelector("#task2Btn").addEventListener("click", handlerForTask2);

    document.querySelector("#addTrTask3").addEventListener("click", handlerAddTrTask3);
    document.querySelector("#countSquareTask3").addEventListener("click", handlerCountTask3);

    document.querySelector("#task4Btn").addEventListener("click", handlerForTask4);

    document.querySelector("#task5Btn").addEventListener("click", handlerForTask5);

    document.querySelector("#task6Btn").addEventListener("click", handlerForTask6);

    document.querySelector("#lengthTask7Btn").addEventListener("click", handlerLengthBtnTask7);
    document.querySelector("#minMaxTask7Btn").addEventListener("click", handlerMinMaxBtnTask7);
}