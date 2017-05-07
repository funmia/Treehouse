var question;
var answer;
var response;
var correctAnswers = 0;
var correct = [];
var wrong = [];

var quiz = [
  ['What language do you use to style web pages', 'CSS'],
  ["Name a programming language that's also a snake", 'PYTHON'],
  ["Name a programming language that's also a gem", 'RUBY']
];


//
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//get the user's response and check if right or wrong
for (var i = 0; i < quiz.length; i++) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question).toUpperCase();
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

//make a list of the questions answered right and wrong
function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
  listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}


var html = print('You got ' + correctAnswers + ' question(s) right');
html += print('<h2>You got these questions correct:</h2>');
print(buildList(correct));
print('<h2>You got these questions wrong:</h2>');
print(buildList(wrong));
