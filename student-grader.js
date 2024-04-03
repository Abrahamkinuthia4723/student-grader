document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const scoreElement = document.getElementById('score');
    const score = parseFloat(scoreElement.value);
    let grade = '';

    if (isNaN(score)) {
        grade = "Please enter a valid score.";
    } else if (score < 0 || score > 100) {
        grade = "Please enter a score between 0 and 100.";
    } else if (score > 79) {
        grade = "A";
    } else if (score >= 60 && score <= 79) {
        grade = "B";
    } else if (score >= 50 && score <= 59) {
        grade = "C";
    } else if (score >= 40 && score <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    const outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.innerText = `Your grade is: ${grade}`;
    } else {
        console.error("Element with id 'output' not found.");
    }
});
