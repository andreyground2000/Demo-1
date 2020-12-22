export let task2 = (envelope1, envelope2) => {
    let demonstrationDiv = document.querySelector(".resultTask2");
    if (!envelope1 || ({}.toString(envelope1)) !== "[object Object]" ) {
        let err = new Error("wrong type of input");
        console.log("Please, insert an object with 'a' and 'b' keys, that have number values in envelope 1 parametr");
        throw err;
    }
    if (!envelope2 || ({}.toString(envelope2)) !== "[object Object]" ) {
        let err = new Error("wrong type of input");
        console.log("Please, insert an object with 'c' and 'd' keys, that have number values in envelope 2 parametr");
        throw err;
    }
    let {a, b} = envelope1;
    let {c, d} = envelope2;
    if ((typeof a !== "number") || (!a) || (a === Infinity) || a <= 0) {
        let err = new Error("Wrong type of input");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "Please, insert a number in 'a' parametr!";
        console.log("Please, insert a number in 'a' parametr!");
        throw err;
    }

    if ((typeof b !== "number") || (!b) || (b === Infinity) || b <= 0) {
        let err = new Error("Wrong type of input");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "Please, insert a number in 'b' parametr!";
        console.log("Please, insert a number in 'b' parametr!");
        throw err;
    }

    if ((typeof c !== "number") || (!c) || (c === Infinity) || c <= 0) {
        let err = new Error("Wrong type of input");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "Please, insert a number in 'c' parametr!";
        console.log("Please, insert a number in 'c' parametr!");
        throw err;
    }

    if ((typeof d !== "number") || (!d) || (d === Infinity) || c <= 0) {
        let err = new Error("Wrong type of input");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "Please, insert a number in 'd' parametr!";
        console.log("Please, insert a number in 'd' parametr!");
        throw err;
    }
    chooseEnvelope(a,b,c,d);
};

function chooseEnvelope(a,b,c,d) {
    let demonstrationDiv = document.querySelector(".resultTask2");
    let envelope1 = Math.max(a, b) >= Math.max(c, d) && Math.min(a, b) >= Math.min(c, d);
    
    let envelope2 = Math.max(c, d) >= Math.max(a, b) && Math.min(c, d) >= Math.min(a, b);

    if (envelope1 && !envelope2) {
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "1";
        console.log(1);
    }else if(envelope2 && !envelope1) {
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "2";
        console.log(2);
    } else if(envelope1 && envelope2){
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "Envelopes are the same";
        console.log("Envelopes are the same");
    }
    else {
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "0";
        console.log(0);
    }
}


