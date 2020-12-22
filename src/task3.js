export function task3(arr) {
    let demonstrationDiv = document.querySelector(".resultTask3");
    let verticesTr = document.querySelector("#verticiesTask3");
    let side1 = document.querySelector("#side1Task3");
    let side2 = document.querySelector("#side2Task3");
    let side3 = document.querySelector("#side3Task3");
    if (arr.length <= 0 || !arr) {
        let err = new Error("wrong type of input");
        console.log("No added triangles. Please, insert values in inputs and try again.");
        demonstrationDiv.innerText = "";
        demonstrationDiv.innerText = "No added triangles. Please, insert values in inputs and try again.";
        verticesTr.value = "";
        side1.value = "";
        side2.value = "";
        side3.value = "";
        arr.length = 0;
        throw err;
    }

    sortTriangles(arr);
}

function sortTriangles(arr) {
    let verticesTr = document.querySelector("#verticiesTask3");
    let side1 = document.querySelector("#side1Task3");
    let side2 = document.querySelector("#side2Task3");
    let side3 = document.querySelector("#side3Task3");
    let resDiv = document.querySelector(".resultTask3");
    let arrOfTriangles = arr.map(item => {
        let arrOfSides = item.vertices.toLowerCase().split("");
        let [s1, s2, s3] = arrOfSides;
        let p = (item[s1] + item[s2] + item[s3]) / 2;
        if(p < item[s1] || p < item[s2] || p < item[s3]) {
            let err = new Error("wrong type of input");
            console.log("The sum of the sides of the triangle divided by two must be greater than each of the sides. Insert correct values and try again");
            resDiv.innerText = "";
            resDiv.innerText = "The sum of the sides of the triangle divided by two must be greater than each of the sides. Insert correct values and try again.";
            verticesTr.value = "";
            side1.value = "";
            side2.value = "";
            side3.value = "";
            arr.length = 0;
            throw err;
        } else {
            let squ = Math.sqrt(p * (p - item[s1]) * (p - item[s2]) * (p - item[s3]));
            item.square = squ;
            return item;   
        }
    });
    let res = arrOfTriangles.sort((a, b) => b.square - a.square).map(item => item.vertices.toUpperCase());
    resDiv.innerText = JSON.stringify(res);
    console.log(res);
    arr.length = 0;
}

//{vertices: "ABC", a: 10, b: 20, c:22.36}, {vertices: "GKL", g: 35, k: 40, l:51}, {vertices: "SME", s: 7, m: 4, e:9}, {vertices: "DFG", d: 15, f: 28, g:37}