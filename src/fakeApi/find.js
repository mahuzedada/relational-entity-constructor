export default async function find(id, list) {
  return list.find(item => item.id === id);
}
