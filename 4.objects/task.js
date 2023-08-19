function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if('marks' in this) {
    this.marks.push(...marks);
   }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined || this.marks.length < 1) {
    return 0;
  }
  else {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }
  return sum / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}