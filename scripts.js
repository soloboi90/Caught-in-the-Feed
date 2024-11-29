const questions = [
    "How often do you check social media in an hour?",
    "Do you feel anxious when you can’t access social media?",
    "Do you lose track of time scrolling through social media?"
  ];
  let currentQuestion = 0;
  let totalScore = 0;
  
  const questionEl = document.getElementById("question");
  const options = document.querySelectorAll(".quiz-option");
  const resultEl = document.getElementById("result");
  
  // Display the first question
  questionEl.textContent = questions[currentQuestion];
  
  // Add event listeners for options
  options.forEach(option => {
    option.addEventListener("click", () => {
      const score = parseInt(option.getAttribute("data-score"));
      totalScore += score;
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        questionEl.textContent = questions[currentQuestion];
      } else {
        showResult();
      }
    });
  });
  
  // Show the result
  function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultEl.style.display = "block";
  
    if (totalScore <= 3) {
      resultEl.textContent = "Your social media habits seem healthy!";
    } else if (totalScore <= 6) {
      resultEl.textContent = "You might want to monitor your social media usage.";
    } else {
      resultEl.textContent = "It’s time to take a break from social media.";
    }
  }
  