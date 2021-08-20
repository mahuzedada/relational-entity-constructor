import find from "./find";
import findAll from "./findAll";

const list = [
  {
    studentId: 1,
    classId: 1,
    grade: 'A',
  },
  {
    studentId: 1,
    classId: 2,
    grade: 'B',
  },
];

export default {
  find: async (id) => find(id, list),
  findAll: async (params) => findAll(params, list),
}
