var  students = [
  {
    name: 'Jane',
    track: 'Front End Development',
    achievements: 158,
    points: 1000
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: 175,
    points: 2500
  },
  {
    name: 'Jordan',
    track: 'Full Stack JavaScript',
    achievements: 356,
    points: 1850
  },
  {
    name: 'Seun',
    track: 'Rails Development',
    achievements: 150,
    points: 900
  },
  {
    name: 'Dayo',
    track: 'Python',
    achievements: 200,
    points: 1900
  }
];

var message = '';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h3>Student: ' + student.name + '</h3>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  return report;
}

while (true) {
  var search = prompt('Search student records: type a name (or type "quit" to exit)');
  if (search.toLowerCase() === 'quit'){
    break;
  }
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (search === student.name ) {
      message = getStudentReport(student)
    print(message);
    }
  }
}
