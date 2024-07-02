let score = 0;

let currentQuestion = 1;
const totalQuestions = 12;
const answers = {};

function startPrompt() {
    updateProgress();
    askNextQuestion();
}

function askNextQuestion() {
    let questionText;
    switch (currentQuestion) {
        case 1:
            questionText = "<strong>STEP 1 Personal details | Question 1/4</strong><br>What is your name ?";
            break;
        case 2:
            questionText = "<strong>STEP 1 Personal details | Question 2/4</strong><br>How old are you ?";
            break;
        case 3:
            questionText = "<strong>STEP 1 Personal details | Question 3/4</strong><br>Where are you located ?";
            break;
        case 4:
            questionText = "<strong>STEP 1 Personal details | Question 4/4</strong><br>How did you become interested in life below water ?";
            break;
        case 5:
            questionText = "<strong>STEP 2 Tasks | Question 1/4</strong><br>Have you participated in any beach clean-up events or marine life rescue operations ?";
            break;
        case 6:
            questionText = "<strong>STEP 2 Tasks | Question 2/4</strong><br>Do you follow any sustainable practices in your daily routine to reduce your impact on marine environments ?";
            break;
        case 7:
            questionText = "<strong>STEP 2 Tasks | Question 3/4</strong><br>Have you engaged in any conservation efforts related to marine life ?";
            break;
        case 8:
            questionText = "<strong>STEP 2 Tasks | Question 4/4</strong><br>How do you contribute to raising awareness about the importance of preserving ocean ecosystems ?";
            break;
        case 9:
            questionText = "<strong>STEP 3 Qualifications | Question 1/4</strong><br>Have you published any research papers or articles related to marine conservation ?";
            break;
        case 10:
            questionText = "<strong>STEP 3 Qualifications | Question 2/4</strong><br>Are you affiliated with any organizations or institutions that focus on marine life preservation ?";
            break;
        case 11:
            questionText = "<strong>STEP 3 Qualifications | Question 3/4</strong><br>What formal education or training do you have in marine biology, oceanography, or related fields ?";
            break;
        case 12:
            questionText = "<strong>STEP 3 Qualifications | Question 4/4</strong><br>Have you received any awards or recognitions for your contributions to protecting life below water ?";
            break;
        default:
            displayAnswers();
            return;
    }
    showModal(questionText);
}

function showModal(text) {
    const modal = document.getElementById("myModal");
    const questionTextElement = document.getElementById("questionText");
    questionTextElement.innerHTML = text;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("glassbox");
    const progressBar = document.getElementById("progressBar");
    const outputBox = document.querySelector(".output-box"); // Ensure the class matches the HTML
    const feedbackSection = document.getElementById("feedback-section");

    modal.style.display = "none";
    progressBar.style.display = "none";
    outputBox.style.display = "block";
    displayAnswers();
    feedbackSection.style.display = "block";

}

function handleResponse(action) {
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value.trim();

    if (action === 'Next') {
        if (inputValue === "") {
            alert("Please enter a response.");
            return;
        }
        if (currentQuestion === 2) {
            if (!/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(inputValue)) {
                alert("Please enter numeric characters and symbols only.");
                return;
            }
        } else {
            if (!/^[A-Za-z\s]+$/.test(inputValue)) {
                alert("Please enter alphabetic characters only.");
                return;
            }
        }
        currentQuestion++;
        answers[currentQuestion - 1] = inputValue;
    } else if (action === 'Skip') {
        currentQuestion++;
        askNextQuestion();
        return;
    } else if (action === 'Back' && currentQuestion > 1) {
        currentQuestion--;
        inputField.value = answers[currentQuestion] || ""; 
        updateProgress();
        askNextQuestion();
        return;
    }
    inputField.value = "";

    updateProgress();
    if (currentQuestion > totalQuestions) {
        closeModal();
    } else {
        askNextQuestion();
    }
}

function displayAnswers() {
    document.getElementById("answer1").textContent = answers[1];
    document.getElementById("answer2").textContent = answers[2];
    document.getElementById("answer3").textContent = answers[3];
    document.getElementById("answer4").textContent = answers[4];
    document.getElementById("answer5").textContent = answers[5];
    document.getElementById("answer6").textContent = answers[6];
    document.getElementById("answer7").textContent = answers[7];
    document.getElementById("answer8").textContent = answers[8];
    document.getElementById("answer9").textContent = answers[9];
    document.getElementById("answer10").textContent = answers[10];
    document.getElementById("answer11").textContent = answers[11];
    document.getElementById("answer12").textContent = answers[12];
}

function updateProgress() {
    const progress = Math.ceil(((currentQuestion / totalQuestions) * 100) - 9);
    document.getElementById("progressBar").value = progress;
    // document.getElementById("profileCompletion").textContent = progress;
}

startPrompt();