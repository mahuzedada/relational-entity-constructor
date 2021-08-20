export default function findAll (params, list) {
  if (!params) {
    return list;
  }
  let filteredList = [...list];
  Object
    .keys(params)
    .forEach(key => {
      filteredList = filteredList.filter(item => item[key] === params[key])
    });
  return filteredList;
}
