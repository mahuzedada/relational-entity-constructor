import find from "./find";
import findAll from "./findAll";

const list = [
  {
    id: 1,
    title: 'Mathematics',
    description: 'The study of numbers',
  },
  {
    id: 2,
    title: 'Biology',
    description: 'The study of living beings',
  },
];

export default {
  find: async (id) => find(id, list),
  findAll: async (params) => findAll(params, list),
}
