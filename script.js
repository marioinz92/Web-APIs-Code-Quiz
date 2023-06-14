const quizQuestions = [
    {
      question: "What is the correct way to declare a JavaScript variable?",
      options: [
        "var myVariable;",
        "variable myVariable;",
        "myVariable = var;",
        "declare myVariable;",
      ],
      answer: 0,
    },
    {
      question: "Which built-in method returns the length of a string?",
      options: [
        "length()",
        "count()",
        "size()",
        "charAt()",
      ],
      answer: 0,
    },
    {
      question: "What is the output of the following code?\nconsole.log(2 + '2');",
      options: [
        "4",
        "22",
        "NaN",
        "TypeError",
      ],
      answer: 1,
    },
    {
      question: "Which operator is used to compare both value and type?",
      options: [
        "==",
        "===",
        "!=",
        "<>",
      ],
      answer: 1,
    },
    {
      question: "What is the correct way to add an element to the end of an array?",
      options: [
        "array.push(element)",
        "array.add(element)",
        "array.append(element)",
        "array.insert(element)",
      ],
      answer: 0,
    },
  ];

  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let score = 0;
  let timerInterval;

  function startQuiz() {
    document.getElementById("start-button").style.display = "none";

    timerInterval = setInterval(function () {
      timeLeft--;
      document.getElementById("timer").textContent = "Time: " + timeLeft;

      if (timeLeft <= 0 || currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
      }
    }, 1000);

    displayQuestion();
  }

  function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex].question;
    const options = quizQuestions[currentQuestionIndex].options;

    document.getElementById("question").textContent = "Question: " + question;

    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("li");
      option.textContent = options[i];
      option.addEventListener("click", checkAnswer);
      optionsList.appendChild(option);
    }
  }

  function checkAnswer(event) {
    const selectedOption = event.target;
    const selectedOptionIndex = Array.from(
      selectedOption.parentNode.children
    ).indexOf(selectedOption);

    if (selectedOptionIndex === quizQuestions[currentQuestionIndex].answer) {
      score++;
      document.getElementById("score").textContent = "Score: " + score;
    } else {
      timeLeft -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    clearInterval(timerInterval);

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("end-screen").style.display = "block";

    document.getElementById("final-score").textContent = "Final Score: " + score;
  }

  document.getElementById("start-button").addEventListener("click", startQuiz);
  document.getElementById("submit-button").addEventListener("click", function () {
    const initials = document.getElementById("initials").value;
  });