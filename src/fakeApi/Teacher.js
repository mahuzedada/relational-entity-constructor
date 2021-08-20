import find from "./find";
import findAll from "./findAll";

const list = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Bathia',
    dateOfBirth: '08/12/1956',
  },
  {
    id: 2,
    firstName: 'Alex',
    lastName: 'Smith',
    dateOfBirth: '03/24/1965',
  },
];

export default {
  find: async (id) => find(id, list),
  findAll: async (params) => findAll(params, list),
}
