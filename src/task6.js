export function task6(n, m) {
    let resDiv = document.querySelector(".resultTask6");
    let nVal = document.querySelector("#nTask6");
    let mVal = document.querySelector("#mTask6");
    if ((typeof n !== "number") || (n === Infinity) || n < 0 || isNaN(n)) {
        let err = new Error("Wrong type of input");
        nVal.value = "";
        mVal.value = "";
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the natural number in parameter 'n'.";
        console.log("Please, insert the number in parameter 'n'.");
        throw err;
    }

    if ((typeof m !== "number") || (!m) || (m === Infinity) || n < 0) {
        let err = new Error("Wrong type of input");
        nVal.value = "";
        mVal.value = "";
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the natural number in parameter 'm' greater than zero.";
        console.log("Please, insert the number in parameter 'n' greater than zero.");
        throw err;
    }

    findNumbers(n, m);
}

function findNumbers(n, m) {
    let resDiv = document.querySelector(".resultTask6");
    let nVal = document.querySelector("#nTask6");
    let mVal = document.querySelector("#mTask6");
    if (n === 0) {
        nVal.value = "";
        mVal.value = "";
        resDiv.innerText = "";
        resDiv.innerText = "\"\"";
        console.log('""');
    } else {
        let res = [];

        for (let i = 1; i <= n; i++) {
            res.push(m + i);
        }
    
        nVal.value = "";
        mVal.value = "";
        resDiv.innerText = "";
        resDiv.innerText = res.join(", ");
        console.log(res.join(", "));
    }

}