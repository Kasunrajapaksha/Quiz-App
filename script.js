

const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false }
      ]
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      question: "What is 5 + 7?",
      answers: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "11", correct: false },
        { text: "13", correct: false }
      ]
    },
    {
      question: "Which country is known for the Great Wall?",
      answers: [
        { text: "Japan", correct: false },
        { text: "China", correct: true },
        { text: "India", correct: false },
        { text: "Russia", correct: false }
      ]
    },
    {
      question: "What is the boiling point of water?",
      answers: [
        { text: "50°C", correct: false },
        { text: "100°C", correct: true },
        { text: "150°C", correct: false },
        { text: "0°C", correct: false }
      ]
    },
    {
      question: "Who is the current president of the USA (as of 2024)?",
      answers: [
        { text: "Joe Biden", correct: true },
        { text: "Donald Trump", correct: false },
        { text: "Barack Obama", correct: false },
        { text: "George W. Bush", correct: false }
      ]
    },
    {
      question: "Which animal is known as the king of the jungle?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Lion", correct: true },
        { text: "Tiger", correct: false },
        { text: "Cheetah", correct: false }
      ]
    },
    {
      question: "How many continents are there?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
      ]
    }
  ];

  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0
  
  const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

const resetState = () => {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

const selectAnswer = (event) => {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

const handleNextButton = () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
  

