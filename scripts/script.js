document.querySelector("button").addEventListener("click", gradeQuiz);

let q1Message = document.querySelector("#q1Message");
let q2Message = document.querySelector("#q2Message");
let q3Message = document.querySelector("#q3Message");
let q4Message = document.querySelector("#q4Message");
let q5Message = document.querySelector("#q5Message");

const correctMessage = "You got it right!";
const incorrectMessage = "You got it wrong";

let score = 0;
let timesTaken = localStorage.getItem("timesTaken");
let showTimesTaken = document.querySelector("#timesTakenContainer");

if(timesTaken != null) {
    showTimesTaken.textContent = "This test was taken " + timesTaken + " times!";
}

shuffleQ1();
function shuffleQ1() {
    let q1Choices = ["Gen I","Gen II","Gen III","Gen IV"];
    q1Choices = shuffleArray(q1Choices);
    console.log(q1Choices);

    for ( let i of q1Choices) {
    // Create HTML element in javascript
    let inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "q1";
    inputElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(inputElement);

    document.querySelector("#q1Choices").append(labelElement);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [ array[i], array[j] ] = [ array[j], array[i] ];
     }
     return array;
}

function gradeQuiz() {
    score = 0;
    deleteImages(); // deletes all images so we can add new ones in their place

    timesTaken++;
    localStorage.setItem("timesTaken", timesTaken);
    showTimesTaken.textContent = "This test was taken " + timesTaken + " times!"

    let q1Answer = "Gen III";
    let userAnswerQ1 = document.querySelector("input[name=q1]:checked").value;
    let q1ImageContainer = document.querySelector("#q1Image");

    if(q1Answer == userAnswerQ1) {
        score += 20;
        q1Message.textContent = correctMessage;
        q1Message.style.color = "lightgreen";
        createCorrectImage(q1ImageContainer);
    } else {
        q1Message.textContent = incorrectMessage;
        q1Message.style.color = "red";
        createIncorrectImage(q1ImageContainer);
    }

    let q2Answer = "glaceon";
    let userAnswerQ2 = document.querySelector("#q2").value.toLowerCase();
    let q2ImageContainer = document.querySelector("#q2Image");

    if(q2Answer == userAnswerQ2) {
        score += 20;
        q2Message.textContent = correctMessage;
        q2Message.style.color = "lightgreen";
        createCorrectImage(q2ImageContainer);
    } else {
        q2Message.textContent = incorrectMessage;
        q2Message.style.color = "red";
        createIncorrectImage(q2ImageContainer);
    }

    let q3Answer = "dialga";
    let userAnswerQ3 = document.querySelector("#q3").value;
    let q3ImageContainer = document.querySelector("#q3Image");

    if(q3Answer == userAnswerQ3) {
        score += 20;
        q3Message.textContent = correctMessage;
        q3Message.style.color = "lightgreen";
        createCorrectImage(q3ImageContainer);
    } else {
        q3Message.textContent = incorrectMessage;
        q3Message.style.color = "red";
        createIncorrectImage(q3ImageContainer);
    }

    let q4Answer = 8;
    let userAnswerQ4 = document.querySelector("#q4").value;
    let q4ImageContainer = document.querySelector("#q4Image");

    if(q4Answer == userAnswerQ4) {
        score += 20;
        q4Message.textContent = correctMessage;
        q4Message.style.color = "lightgreen";
        createCorrectImage(q4ImageContainer);
    } else {
        q4Message.textContent = incorrectMessage;
        q4Message.style.color = "red";
        createIncorrectImage(q4ImageContainer);
    }

    let q5Answer = ["pikachu","mew"];
    let q5Checked = document.querySelectorAll("input[name=q5]:checked");
    let userAnswerQ5 = [];
    let correct = true;
    let q5ImageContainer = document.querySelector("#q5Image");

    // querySelectorAll doesn't return the values of the checkboxes
    // You have to manually get the values by using .value on each element in the NodeList
    for(let i = 0; i < q5Checked.length; i++) {
        userAnswerQ5.push(q5Checked[i].value);
    }

    if(q5Answer.length != userAnswerQ5.length) {
        correct = false;
    }

    if(correct) {
        for(let i = 0; i < q5Answer.length; i++) {
            if(q5Answer[i] != userAnswerQ5[i]) {
                correct = false;
                break;
            }
        }
    }

    if(correct) {
        score += 20;
        q5Message.textContent = correctMessage;
        q5Message.style.color = "lightgreen";
        createCorrectImage(q5ImageContainer);
    } else {
        q5Message.textContent = incorrectMessage;
        q5Message.style.color = "red";
        createIncorrectImage(q5ImageContainer);
    }

    let scoreDisplay = document.querySelector("#score");

    if(score >= 80) {
        scoreDisplay.textContent = "Score: " + score + " | You Passed! Congratulations!";
        scoreDisplay.style.color = "lightgreen";
    } else {
        scoreDisplay.textContent = "Score: " + score + " | You Failed";
        scoreDisplay.style.color = "red";
    }
}

function createCorrectImage(imageContainer) {
    let image = document.createElement("img");
    image.src = "images/checkmark.jpg";
    image.className = "image"; // .className gives the element a class
    imageContainer.appendChild(image);
}

function createIncorrectImage(imageContainer) {
    let image = document.createElement("img");
    image.src = "images/cross.jpg";
    image.className = "image";
    imageContainer.appendChild(image);
}

// deletes all images so we can add new ones in their place
function deleteImages() {
    // getting all images from the class "image"
    let images = document.querySelectorAll(".image");

    // deleting the images
    for(let i = 0; i < images.length; i++) {
        images[i].remove();
    }
}