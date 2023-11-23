let score = 0;
let currentQuestionIndex = 0;

let questions = [
    {
    question : "What is the capital city of Macedonia?",
    answer : ["Istanbul","Belgrade","Paris","Skopje"],
    corectAnswer : 3
    },
    {
        question : "What colour is the lemon?",
        answer : ["yellow","pink","black","orange"],
        corectAnswer : 0
    },
    {
        question : "How many legs do  dogs have? ",
        answer : ["3","1","4","2"],
        corectAnswer : 2
    },
    {
        question : "How long  is a century? ",
        answer : ["1","100","10","1000"],
        corectAnswer : 1
    },
  
    
];

function displayQuestion () {
    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent= question.question;
    let answersDiv = document.getElementById("answers");
    answers.innerHTML = "";
    question.answersDiv.forEach ((answer, index)=>  {
        let answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);

    });


}
displayQuestion();

function checkAnswer (userAnswer) {
    let corectAnswer = questions[currentQuestionIndex];

    if(userAnswer == corectAnswer){
        score += 1;
    }

    nextQuestion();
}
function nextQuestion() {
    currentQuestionIndex += 1;
    displayQuestion ();
}
