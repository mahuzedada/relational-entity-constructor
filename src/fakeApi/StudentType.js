import find from "./find";
import findAll from "./findAll";

const list = [
  {
    id: 1,
    label: 'Under Graduate',
  },
  {
    id: 2,
    label: 'Graduate',
  },
];

export default {
  find: async (id) => find(id, list),
  findAll: async (params) => findAll(params, list),
}
