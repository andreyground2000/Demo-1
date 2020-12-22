export function task5(obj) {
    let resDiv = document.querySelector(".resultTask5");
    let inputMin = document.querySelector("#minTask5");
    let inputMax = document.querySelector("#maxTask5");

    if ((!obj.min) || (obj.min === Infinity) || obj.min < 0 || obj.min > 999999 || obj.min > obj.max) {
        let err = new Error("Wrong type of input");
        inputMin.value = "";
        inputMax.value = "";
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the natural number in 'min' parametr!. Number should be greater than zero and less than 1000000. Min value should be less than max.";
        console.log("Please, insert the natural number in 'min' parametr!. Number should be greater than zero and less than 1000000. Min value should be less than max.");
        throw err;
    }
    if ((!obj.max) || (obj.max === Infinity) || obj.max < 0 || obj.max > 999999) {
        let err = new Error("Wrong type of input");
        inputMin.value = "";
        inputMax.value = "";
        resDiv.innerText = "";
        resDiv.innerText = "Please, insert the natural number in 'max' parametr!. Number should be greater than zero and less than 1000000.";
        console.log("Please, insert the natural number in 'max' parametr!. Number should be greater than zero and less than 1000000.");
        throw err;
    }
    countTickets(obj.min, obj.max);
}

function countTickets(min, max) {
    let resDiv = document.querySelector(".resultTask5");
    let inputMin = document.querySelector("#minTask5");
    let inputMax = document.querySelector("#maxTask5");

    let intervalArr = []; 
    for (let i = min; i <= max; i++) {
        let num = String(i);
        switch(num.length) {
            case 1: {
                intervalArr.push("00000" + num);
                break;
            }
            case 2: {
                intervalArr.push("0000" + num);
                break;
            }
            case 3: {
                intervalArr.push("000" + num);
                break;
            }
            case 4: {
                intervalArr.push("00" + num);
                break;
            }
            case 5: {
                intervalArr.push("0" + num);
                break;
            }
            case 6: {
                intervalArr.push(num);
                break;
            }
        }
    }
    let res = {
        easy: easyWay(intervalArr),
        hard: hardWay(intervalArr),
        winner: '',
        chooseWinner: function() {
            if (this.easy > this.hard) this.winner = "Easy";
            if (this.easy < this.hard) this.winner = "Hard";
            if (this.easy === this.hard) this.winner = "Draw";
        }
    };
    res.chooseWinner();
    delete res.chooseWinner;
    inputMin.value = "";
    inputMax.value = "";
    resDiv.innerText = "";
    resDiv.innerText = JSON.stringify(res);
    console.log(res);
}

function easyWay(arr) {
    let counter = 0;
    arr.forEach(item => {
        let splitedNumber = item.split('');
        let firstThreeNumbers = [];
        let secondThreeNumbers = [];
        for (let i = 0; i < splitedNumber.length; i++) {
            if (i < 3) firstThreeNumbers.push(+splitedNumber[i]);
            if (i >= 3) secondThreeNumbers.push(+splitedNumber[i]);
        }
        let sumOfFirstThreeNumbers = firstThreeNumbers.reduce((acc, item) => {
            acc += item;
            return acc;
        });
        let sumOfsecondThreeNumbers = secondThreeNumbers.reduce((acc, item) => {
            acc += item;
            return acc;
        });
        if (sumOfFirstThreeNumbers === sumOfsecondThreeNumbers) counter++; 
    });
    return counter;
  }

  function hardWay(arr) {
      let counter = 0;
      arr.forEach(item => {
        let splitedNumber = item.split("");
        let evenPositionNumbers = [];
        let notevenPositionNumbers = [];
        for (let i = 0; i < splitedNumber.length; i++) {
            if (i % 2 === 0) evenPositionNumbers.push(+splitedNumber[i]);
            if (i % 2 !== 0) notevenPositionNumbers.push(+splitedNumber[i]);
        }
        let sumOfevenPositionNumbers = evenPositionNumbers.reduce((acc, item) => {
            acc += item;
            return acc;
        });
        let sumOfnotevenPositionNumbers = notevenPositionNumbers.reduce((acc, item) => {
            acc += item;
            return acc;
        });
        if (sumOfevenPositionNumbers === sumOfnotevenPositionNumbers) counter++;
      });
      return counter;  
  }

