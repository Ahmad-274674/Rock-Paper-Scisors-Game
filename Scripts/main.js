// Game Variables
const computerName = "Ahmad Junior";
let userOne;
let userTwo;

// HTML Variables
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const thirdPage = document.getElementById('thirdPage');
const forthPage = document.getElementById('forthPage');
const resultPage = document.getElementById('resultPage');

// First Page Variables
const computerPlayBtn = document.getElementById('computerPlayBtn');
const friendPlayBtn = document.getElementById('friendPlayBtn');

// Second Page Variables
const computerPlayInput = document.getElementById('computerPlayInput');
const resetCP = document.getElementById('resetCP');
const submitCP = document.getElementById('submitCP');
const wrongCP = document.getElementById('wrongCP');

// Third Page Variables
const userInputOne = document.getElementById('userInputOne');
const userInputTwo = document.getElementById('userInputTwo');
const wrongInput = document.getElementById('wrongInput');
const resetUS = document.getElementById('resetUS');
const submitUS = document.getElementById('submitUS');

// Forth Page Variables
const playerOneName = document.getElementById('playerOneName');
const playerTwoName = document.getElementById('playerTwoName');



// Tag Variables
const body = document.getElementsByTagName('body');



// First Page Mind

computerPlayBtn.addEventListener("click", ()=>{
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
    thirdPage.style.display = "none";
    forthPage.style.display = "none";
    resultPage.style.display = "none";
})

friendPlayBtn.addEventListener("click", ()=>{
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    thirdPage.style.display = "flex";
    forthPage.style.display = "none";
    resultPage.style.display = "none";
})

// Second Page Mind
resetCP.addEventListener('click', () =>{
    if(computerPlayInput.value === ""){
        wrongCP.innerText = "Please enter something to reset! In above field.";
        wrongCP.style.display = 'block';
    }
    else{
        computerPlayInput.value = "";
        wrongCP.style.display = 'none';
    }
})

submitCP.addEventListener('click', () =>{
    if(computerPlayInput.value === ""){
        wrongCP.innerText = "I can't submit it! Please enter Your Name";
        wrongCP.style.display = 'block';
    }
    else{
        userOne = computerPlayInput.value;
        userTwo = computerName;
        forthPage.style.display = 'flex';
        forthPage.style.display = 'flex';
        playerOneName.innerText = userOne;
        playerTwoName.innerText = userTwo;
        secondPage.style.display = 'none';
    }
})

// Third Page and Forth Page Mind
resetUS.addEventListener('click', () => {
    if(userInputOne.value != "" && userInputTwo != ""){
        userInputOne.value = '';
        userInputTwo.value = '';
        wrongInput.style.display = 'none';
    }
    else{
        wrongInput.style.display = 'block';
        wrongInput.innerText = "Enter Some thing in above fields to reset";
    }
})

submitUS.addEventListener('click', () => {
    if(userInputOne.value != "" & userInputTwo != ""){
        userOne = userInputOne.value;
        userTwo = userInputTwo.value;
        wrongInput.style.display = 'none';
        thirdPage.style.display = 'none';
        playerOneName.innerText = userOne;
        playerTwoName.innerText = userTwo;
        forthPage.style.display = 'flex';
    }
    else{
        wrongInput.style.display = 'block';
        wrongInput.innerText = "You have to enter your name and your friend's Name first and then submit";
    }
})

