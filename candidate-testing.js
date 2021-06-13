const input = require('readline-sync');
let candidateName;
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
let grade;
function askForName(){
  candidateName = input.question("What is your name? ");
}
function askQuestion(){
  candidateAnswer = input.question(question);
}
function gradeQuiz(candidateAnswers){ 
if (candidateAnswer === correctAnswer){
  let grade = "Passed";
  return grade
}else{
  let grade = "Failed";
  return grade
}
}
function runProgram(){
  askForName();
  console.log("Hello, " + candidateName);
  askQuestion();
  grade = gradeQuiz(this.candidateAnswers);
  console.log("You " + grade);
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
