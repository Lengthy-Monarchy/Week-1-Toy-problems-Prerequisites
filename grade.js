// function to determine the grade based on the given score.
function calculateGrade() {
    // Prompt user for input
    const userInput = prompt("Enter student marks (between 0 and 100):");
    const marks = parseFloat(userImput);
    // Check if the input is a valid number and within the range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {

        // Calculate the grade based on marks
        let grade;
    if (marks > 79 && marks <=100) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
        }  else if (marks >= 40 && marks <= 49) {
    grade = "D";
    } else if (marks <=39 && marks >=0) {
    grade = "E";
    }
    else {return "please enter a valid mark"}
        
    //example
    console.log(grade(23))