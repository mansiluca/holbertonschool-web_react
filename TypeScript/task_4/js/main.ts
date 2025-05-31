/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

console.log('C++');
const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
const javaTeacher: Subjects.Teacher = {
  firstName: 'James',
  lastName: 'Gosling',
  experienceTeachingJava: 10,
};

java.setTeacher(javaTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
const reactTeacher: Subjects.Teacher = {
  firstName: 'Jordan',
  lastName: 'Walke',
  experienceTeachingReact: 5,
};

react.setTeacher(reactTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log('React - No Experience');
const noExperienceTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
};

react.setTeacher(noExperienceTeacher);
console.log(react.getAvailableTeacher());

