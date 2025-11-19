const questions = [
    {
        question: "In what planet are we living?",
        options: ["Sun", "Earth", "Jupiter", "Moon"],
        correct: "Earth"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Dolphin"],
        correct: "Blue Whale"
    },
    {
        question: "Which gas do plants breathe in?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct: "Carbon Dioxide"
    },
    {
        question: "Which is the smallest continent?",
        options: ["Asia", "Europe", "Australia", "Africa"],
        correct: "Australia"
    },
    {
        question: "What is H2O?",
        options: ["Salt", "Water", "Hydrogen", "Oxygen"],
        correct: "Water"
    }
];

let currentQuestionIndex = 0;
let totalCorrect = 0;

function displayQuestion() {
    let extracted_question = questions[currentQuestionIndex].question;
    let extracted_options = questions[currentQuestionIndex].options;

    document.getElementById("fill-question").textContent = extracted_question;

    let optionLabels = document.querySelectorAll("#options-div label span");
    for (let i = 0; i < optionLabels.length; i++) {
        optionLabels[i].textContent = extracted_options[i];
    }

    let radios = document.querySelectorAll('input[name="option"]');
    radios.forEach(r => r.checked = false);
}

function getSelectedOption() {
    let selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        return selected.value;
    }
    return null;
}

displayQuestion();

document.querySelector(".next-button").addEventListener("click", () => {
    let selected = getSelectedOption();

    if (selected === null) {
        alert("Please select an answer!");
        return;
    }

    let selectedText = questions[currentQuestionIndex].options[selected];

    if (selectedText === questions[currentQuestionIndex].correct) {
        totalCorrect++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        document.getElementById("fill-question").textContent = "Quiz Finished!";
        document.getElementById("options-div").style.display = "none";
        document.querySelector(".next-button").style.display = "none";
        document.getElementById("result").textContent =
            "You got " + totalCorrect + " out of " + questions.length + " correct!";
        return;
    }

    displayQuestion();
});
