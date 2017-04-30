var noun = prompt('please type a noun');
var verb = prompt('please type a verb');
var adjective = prompt('please type an adjective');
alert('All done.');

var sentence = "There once was a " + adjective;
sentence += " programmer who wanted to use Javascript to " + verb;
sentence += ' the ' + noun;

document.write(sentence);
