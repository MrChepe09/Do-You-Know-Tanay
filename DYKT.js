// Title:- First CLI App
// Created by:- Bhupinder Singh
// Taught by:- Tanay Pratap Sir

// Imports
var readline = require('readline-sync');

// Score variable
var score = 0;

// Introduction
name = readline.question('What is your name? ');
console.log('Welcome to the Game - '+name);
console.log('--------------------------');
console.log('----DO YOU KNOW TANAY?----');
console.log('--------------------------');

// Game function
function play(question, answer) {
  // Getting User's Answer
  var tempAnswer = readline.question(question);

  // Checking User's Answer
  if (tempAnswer.toLowerCase() === answer.toLowerCase()) {
    // Right Answer
    console.log('Right Answer!!');
    score = score + 1;
  } else {
    // Wrong Answer
    console.log('Sorry! Thats a wrong answer');
  }
  // Displaying Score after each question
  console.log('You Score is: '+score);
  console.log('------------------------');
}

// Question Database - (Objects in Array)
var questions = [{
  question: 'Where does Tanay live? ',
  answer: 'Banglore'
},
{
  question: 'Where does Tanay works? ',
  answer: 'Microsoft'
},
{
  question: "What is Tanay's favourite SuperHero? ",
  answer: 'Dhruv'
}]

// Looping through each question
for(i=0; i<questions.length; i++){
  // Passing each question and answer to Play function
  play(questions[i].question, questions[i].answer);
}

// Ending
console.log('-------------------------------');
console.log('Your Final Score is '+score);
console.log('Thankyou for playing this Quiz');
console.log('-------------------------------');


