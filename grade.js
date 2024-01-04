// function to determine the grade based on the given score.
function generateStudentGrade() {
    // Prompt the user for input
    const studentMarks = prompt("Enter student marks (between 0 and 100):");
    // Convert input to a number
    const marks = parseFloat(studentMarks);
    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Please enter a valid number between 0 and 100.");
} else {
    // Grade based on the given ranges
    let grade;
    if (marks > 79) {
    grade = "A";
} else if (marks >= 60) {
    grade = "B";
} else if (marks >= 50) {
    grade = "C";
} else if (marks >= 40) {
    grade = "D";
} else {
    grade = "E";
}

// Display the result
console.log("Grade: " + grade);
}
}
generateStudentGrade(76);
