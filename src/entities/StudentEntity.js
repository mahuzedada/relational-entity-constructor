import Entity from "./Entity";
import Student from "../fakeApi/Student";
import manyToOne from "./relationships/manyToOne";
import StudentType from "../fakeApi/StudentType";
import manyToMany from "./relationships/manyToMany";
import StudentClass from "../fakeApi/StudentClass";
import Class from "../fakeApi/Class";
import oneToMany from "./relationships/oneToMany";
import StudentParent from "../fakeApi/StudentParent";

export default Entity({
  resource: Student,
  relationships: {
    type: manyToOne({ resource: StudentType, idField: 'typeId' }),
    parents: oneToMany({ resource: StudentParent, idField: 'studentId'}),
    classes: manyToMany({ associativeResource: StudentClass, parentIdField: 'studentId', childResource: Class, childIdField: 'classId' }),
  },
});
