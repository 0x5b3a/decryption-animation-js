// characters for randomizations
const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&|?></\\";

// html element selection
const element = document.querySelector(".text");

// dataset selection
let dataSet;
if (!element.getAttribute("data-value")) {
    element.setAttribute("data-value", "Decryption Animation");
}
dataSet = element.dataset;

// set inner Text to data-value
element.innerText = dataSet.value

// function that generates random number of given lenghts
function randomNumber(length) {
    return Math.floor(Math.random()*length)
}


//defines interval
let interval = null
let letterSpeed = 50
let iteratorController = 1/10

// main function
function hackerEffect() {
    clearInterval(interval)

    let iterator = 0
    let arbitraryValues = randomArray(dataSet.value.length);

    interval = setInterval(() => {
        element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
                if (iterator >= arbitraryValues[index]) {
                    return dataSet.value[index];
                }
                return chars[randomNumber(chars.length)];
            })
            .join("");
            if (iterator === dataSet.value.length) {
                clearInterval(interval)
            }
            iterator += iteratorController
        }, letterSpeed);
}

function randomArray(length) {
    let randomArray = []
    let tmp = randomNumber(length)
    while (true) {
        if (!randomArray.includes(tmp)) {
            randomArray.push(tmp)
        } else {
            tmp = randomNumber(length)
        }
        if (randomArray.length >= length) {
            break
        }
    }
    return randomArray
}

// array of words
let words = ['Say, Hello to-', "JavaScript", 'Decryption Animation', 'Made by' ,"0x5b3a"]


// index for iteriation of array
let index = 0

let timeOut = setTimeout(function script() {
  // set data value to the words of given index
    dataSet.value = words[index];

  // set inner Text to value of data-set
    element.innerText = dataSet.value;

    // default speed and actual speed
    let defaultDelay = 2000;
    let speed = letterSpeed * words.length * dataSet.value.length + defaultDelay + ((1 / iteratorController) * dataSet.value.length * letterSpeed);


  // increase value of index gradually
    index++;
    hackerEffect();
    timeOut = setTimeout(script, speed);

    if (index >= words.length) {
        index = 0;
    }
},1000)