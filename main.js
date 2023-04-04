import questions from "./mcq.json" assert { type: "json" };

const answeredQuestions = [];
// render the questions in #mcqQuestions div with above template
const mcqQuestions = document.getElementById("mcq-questions");


// on click of user-answer store question and option in answeredQuestions array
// update if already answered
// apply it to all .user-answer divs
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("user-answer")) {
        const questionIndex = parseInt(e.target.dataset.question);
        const optionIndex = parseInt(e.target.dataset.option);
        // check if answer is correct
        const question = questions[questionIndex];
        const isCorrect = optionIndex === question.answer;

        // store the answer in answeredQuestions array with questionIndex and optionIndex and isCorrect
        const questionAnswered = answeredQuestions.find((question) => question.questionIndex === questionIndex);
        if (questionAnswered) {
            questionAnswered.optionIndex = optionIndex;
            questionAnswered.isCorrect = isCorrect;
        }
        else {
            answeredQuestions.push({ questionIndex, optionIndex, isCorrect });
        }
        // update .answer-counter div
        const answerCounter = document.getElementById("answer-counter");
        answerCounter.innerHTML = answeredQuestions.length;

        // show submit button if all questions are answered
        if (answeredQuestions.length > 0) {
            document.getElementById("submit-btn").style.display = "block";
        }
    }

});

// submit-btn click event
// show the result  in #result div
document.getElementById("submit-btn").addEventListener("click", () => {
    const result = document.getElementById("result");
    const correctAnswers = answeredQuestions.filter((question) => question.isCorrect).length;
    // hide quiz div
    document.getElementById("mcq-questions").style.display = "none";
    // also hide submit button
    document.getElementById("submit-btn").style.display = "none";

    result.innerHTML = `
        <div class="result">
            <div class="result-title success-message">
                Congratulations! 🥳 You have completed the quiz.
            </div>
            <div class="result-title">
                You have answered ${correctAnswers} out of ${questions.length} questions correctly.
            </div>
            <div class="result-options">
                <button class="btn btn-primary" id="reset-btn">Reset</button>
            </div>
        </div>
    `;
    document.getElementById("reset-btn").addEventListener("click", () => {
        answeredQuestions.length = 0;
        answeredQuestions = [];
        document.getElementById("answer-counter").innerHTML = answeredQuestions.length;
        document.getElementById("result").innerHTML = "";
        // show quiz div
        document.getElementById("mcq-questions").style.display = "block";
        // also show submit button
        document.getElementById("submit-btn").style.display = "block";
        renderQuiz(questions, mcqQuestions);
    });
});



function renderQuiz(questions,element) {
    element.innerHTML = questions.map((question, questionIndex) => {
        const options = question.options.map((option, optionIndex) => {
            let name = question.question.replace(/[^a-zA-Z0-9]/g, "");
            let uniqueOptionId = option.replace(/[^a-zA-Z0-9]/g, "") + questionIndex + optionIndex;
            return `
            <div class="form-check" >
                <input data-question=${questionIndex} data-option=${optionIndex} type="radio" class="form-check-input user-answer" value=${optionIndex} name=${name} id="${uniqueOptionId}">
                <label for="${uniqueOptionId}">${option}</label>
            </div>
        `;
        }
        ).join("");
        return `
            <div class="quiz">
                <div class="quiz-title">
                ${questionIndex + 1}. ${question.question}
                </div>
                <div class="quiz-options">
                    ${options}
                </div>
            </div>

    `;

    }).join("");
}
renderQuiz(questions,mcqQuestions);
