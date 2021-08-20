export const MANY_TO_MANY = 'manyToMany';

/**
 * manyToMany
 * @param options
 */
export default function manyToMany({ childResource, associativeResource, parentIdField, childIdField }) {
  return {
    type: MANY_TO_MANY,
    childResource,
    associativeResource,
    parentIdField,
    childIdField,
  };
}
