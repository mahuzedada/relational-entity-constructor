import find from "./find";
import findAll from "./findAll";

const list = [
  {
    id: 1,
    studentId: 1,
    firstName: 'Father of Christian',
    lastName: 'Alebodun',
    dateOfBirth: '02/14/1950',
  },
  {
    id: 2,
    studentId: 1,
    firstName: 'Mother of Christian',
    lastName: 'Alebodun',
    dateOfBirth: '11/09/1945',
  },
];

export default {
  find: async (id) => find(id, list),
  findAll: async (params) => findAll(params, list),
}
