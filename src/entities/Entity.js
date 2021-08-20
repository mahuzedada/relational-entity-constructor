/* eslint-disable security/detect-object-injection */
import {MANY_TO_ONE} from "./relationships/manyToOne";
import {ONE_TO_MANY} from "./relationships/oneToMany";
import {MANY_TO_MANY} from "./relationships/manyToMany";

/**
 * Entity
 * @param resource
 * @param relationships
 */
export default function Entity({ resource, relationships }) {
  const manyToOneKeys = Object
    .keys(relationships)
    .filter((key) => relationships[key].type === MANY_TO_ONE);

  const oneToManyKeys = Object
    .keys(relationships)
    .filter((key) => relationships[key].type === ONE_TO_MANY);
  
  const manyToManyKeys = Object
    .keys(relationships)
    .filter((key) => relationships[key].type === MANY_TO_MANY);
  
  /**
   * findManyToOnes
   * @param parentDbFields
   * @returns {Promise<{}>}
   */
  async function findManyToOnes(parentDbFields) {
    const result = {};

    const manyToOneKeysWithValue = manyToOneKeys
      .filter((key) => !!parentDbFields[relationships[key].idField]);

    const manyToOnePromises = manyToOneKeysWithValue
      .map((key) => relationships[key].resource.find(parentDbFields[relationships[key].idField]));
    const manyToOneResults = await Promise.all(manyToOnePromises);
  
    manyToOneResults.forEach((manyToOneResult, index) => {
      result[manyToOneKeysWithValue[index]] = manyToOneResult;
    });

    return result;
  }
  
  /**
   * findOneToMany
   * @param parentId
   * @returns {Promise<{}>}
   */
  async function findOneToMany(parentId) {
    const result = {};
    const oneToManyPromises = oneToManyKeys
      .map((key) => relationships[key].resource.findAll({ [relationships[key].idField]: parentId }));
  
    const oneToManyResults = await Promise.all(oneToManyPromises);
  
    oneToManyResults.forEach((oneToManyResult, index) => {
      result[oneToManyKeys[index]] = oneToManyResult;
    });
    return result;
  }

  async function findManyToMany(parentId) {
    const result = {};
    const associativeManyToManyPromises = manyToManyKeys
      .map((key) => relationships[key].associativeResource.findAll({[relationships[key].parentIdField]: parentId}));
    const associativeManyToManyResults = await Promise.all(associativeManyToManyPromises);
  
    for(let index = 0; index < associativeManyToManyResults.length; index++) {
      const associativeManyToManyResult = associativeManyToManyResults[index];
      const childrenPromises = associativeManyToManyResult
        .map(child => relationships[manyToManyKeys[index]].childResource.find(child[relationships[manyToManyKeys[index]].childIdField]));
      const childrenResult = await Promise.all(childrenPromises);
      result[manyToManyKeys[index]] = childrenResult
        .map((child, index) => ({
          ...child,
          ...associativeManyToManyResult[index],
        }));
    }

    return result;
  }
  /**
   * find
   * @param id
   */
  async function find(id) {
    const dbFields = await resource.find(id);

    return {
      ...dbFields,
      ...(await findManyToOnes(dbFields)),
      ...(await findOneToMany(id)),
      ...(await findManyToMany(id)),
    };
  }

  /**
   * findAll
   * @param params
   */
  async function findAll(params) {
    const detailObjects = [];
    const dbRows = await resource.findAll(params);

    for (const row of dbRows) {
      detailObjects.push({
        ...row,
        ...(await findManyToOnes(row)),
        ...(await findOneToMany(row.id)), // TODO detailObject.id the `id` needs to be a variable passed
        ...(await findManyToMany(row.id)), // TODO detailObject.id the `id` needs to be a variable passed
      });
    }

    return detailObjects;
  }

  return {
    find,
    findAll,
  };
}
