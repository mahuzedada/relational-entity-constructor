import find from "./find";
import findAll from "./findAll";

const list = [
  {
    id: 1,
    typeId: 2,
    firstName: 'Christian',
    lastName: 'Alebodun',
    dateOfBirth: '08/21/1990',
  },
  {
    id: 2,
    typeId: 1,
    firstName: 'Alex',
    lastName: 'Smith',
    dateOfBirth: '09/12/1995',
  },
];

export default {
  find: async (id) => find(id, list),
  findAll: async (params) => findAll(params, list),
}
