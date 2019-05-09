// CODE here for your Lambda Classes

 class Person {
     constructor(props) {
         this.name = props.name
         this.age = props.age
         this.location = props.location
         this.gender = props.gender
     }
     speak() {
         return `Hello my name is ${this.name}, I am from ${this.location}.`;
     }
 }

class Instructor extends Person {
    constructor(props) {
        super(props)
        this.specialty = props.specialty
        this.favLanguage = props.favLanguage
        this.catchPhrase = props.catchPhrase
    }

    demo(subject) {
        return `Hi! I am your instructor ${this.name}. Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

    class Student extends Person {
        constructor(props) {
            super(props)
            this.previousBackground = props.previousBackground 
            this.className = props.className
            this.favSubjects = props.favSubjects
        }

    listsSubjects() {
        return this.favSubjects
    }
    // a method that logs out all of the student's favoriteSubjects one by one.
        PRAssignment(subject) {
            return `${this.name} has submitted a PR for ${subject}`
        }
        sprintChallenge(subject) {
            return `${this.name} has begun sprint challenge on ${subject}`
        }
    }

/* #### Project Manager
* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
 */

 class ProjectManager extends Instructor{
     constructor(props) {
        super(props)
        this.gradClassName = props.gradClassName
        this.favInstructor = props.favInstructor
     }
     standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
     }

     debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
     }
 }

 const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const alex = new Instructor({
    name: 'Alex',
    location: 'Montana',
    age: 33,
    gender: 'male',
    favLanguage: 'Scala',
    specialty: 'Back-end',
    catchPhrase: `Eat Sleep Code Repeat`
});

const napoleon = new Instructor({
    name: 'Napoleon',
    location: 'Idaho',
    age: 34,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Dev Ops',
    catchPhrase: `Just dance`
  });

  const bob = new Student({
    name: 'Bob',
    location: 'Bobsville',
    age: 34,
    gender: 'male',
    previousBackground: 'General Contractor',
    className: 'Web20',
    favSubjects: 'Constructors'
  });

  const abe = new Student({
    name: 'Abe',
    location: 'Illinois',
    age: 55,
    gender: 'male',
    previousBackground: 'President',
    className: 'DS8',
    favSubjects: 'Regression'
  });

  const buzz = new Student({
    name: 'Buzz',
    location: 'Moon',
    age: 75,
    gender: 'male',
    previousBackground: 'Astronaut',
    className: 'UI/UX',
    favSubjects: 'Material Design'
  });

  const kelly = new ProjectManager({
    name: 'Kelly',
    location: 'Bayside',
    age: 28,
    gender: 'female',
    gradClassName: 'Web17',
    favInstructor: 'Dan',
  });

  const josh = new ProjectManager({
    name: 'Josh',
    location: 'California',
    age: 37,
    gender: 'male',
    gradClassName: 'Handsome Guys 101',
    favInstructor: 'Ashton',
  });

  const sabrina = new ProjectManager({
    name: 'Sabrina',
    location: 'Witchville',
    age: 25,
    gender: 'female',
    gradClassName: 'DS2',
    favInstructor: 'Craig',
  });

  console.log(fred.speak());
  console.log(fred.demo("JS IV"))
  console.log(fred.grade(buzz, "CSS"))

  console.log(alex.speak());
  console.log(alex.demo("Multi-threading"))
  console.log(alex.grade(bob, "Python"))

  console.log(napoleon.speak());
  console.log(napoleon.demo("Dev Ops"))
  console.log(napoleon.grade(abe, "Algorithims"))

  console.log(bob.speak());
  console.log(bob.PRAssignment("Python"))
  console.log(bob.sprintChallenge("jQuery"))
