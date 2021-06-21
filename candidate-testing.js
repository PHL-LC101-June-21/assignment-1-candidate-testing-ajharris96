const input = require('readline-sync');
let candidateName =" ";
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = " ";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride",	"true", "40", "Trajectory", "3"]
let candidateAnswers = ['']; 

function askForName(){
  candidateName = input.question("What is your name? ");
}

function askQuestion(){
  for (x=0;x<5;x++)
  candidateAnswers[x] = input.question(questions[x]);
  x = x+1
}

function gradeQuiz(ans){
  let score=0
  for (i=0;i<ans.length;i++){
    if (ans[i].toLowerCase()=== correctAnswers[i].toLowerCase()){
    score += 1 
    } else {
      score = score
    }
  
  } return score/ans.length *100
}

function runProgram(){
  askForName();
  console.log("Hello, " + candidateName);
  askQuestion();
  console.clear();
  console.log(`Candidate Name: ${candidateName}\n`);
  for (let a = 0; a<5;a++){
    console.log(`${a+1}\)${questions[a]}\nYour Answer: ${candidateAnswers[a]}\nCorrect Answer: ${correctAnswers[a]}\n`);
  }
  grade = gradeQuiz(candidateAnswers);
  console.log(`>>> Overall Grade: ${grade}% (${(grade/100*5)} of 5 responses correct) <<<`);
  if (grade>=80){
   console.log(">>> Status: PASSED <<<");
    } else { 
      console.log(">>> Status: FAILED <<<");
  }
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
