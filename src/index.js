import Teacher from './fakeApi/Teacher';
import Student from "./fakeApi/Student";
import Class from "./fakeApi/Class";
import StudentEntity from "./entities/StudentEntity";

// StudentEntity
//   .find(1)
//   .then(studentEntityResult => {
//     console.log({studentEntityResult});
//   });

StudentEntity
  .findAll()
  .then(studentEntityResult => {
    console.log(JSON.stringify(studentEntityResult, null, 2));
  });

// Student
//   .find(1)
//   .then(studentResult => {
//     console.log({studentResult});
//   });
