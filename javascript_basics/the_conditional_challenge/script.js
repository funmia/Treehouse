// quiz begins, no answers correct
var correctAnswers = 0;

// ask questions
var answer1 = prompt('What language do you use to style web pages?');
if (answer1.toUpperCase() === 'CSS') {
  correctAnswers += 1
}
var answer2 = prompt("Name a programming language that's also a snake");
if (answer2.toUpperCase() === 'PYTHON') {
  correctAnswers += 1
}
var answer3 = prompt('what shape is the earth?');
if (answer3.toUpperCase() === 'OVAL') {
  correctAnswers += 1
}
var answer4 = prompt('what is the first day of the week?');
if (answer4.toUpperCase() === 'MONDAY') {
  correctAnswers += 1
}
var answer5 = prompt("Name a programming language that's also a gem");
if (answer5.toUpperCase() === 'RUBY') {
  correctAnswers += 1
}

// output results
document.write('<p> You got ' + correctAnswers + ' out of 5 questions correct.</p>');
// output rank
if (correctAnswers == 5) {
      document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correctAnswers >= 3) {
      document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if (correctAnswers >= 1) {
      document.write("<p><strong>You earned a bronze crown!</strong></p>");
} else {
      document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
