export const MANY_TO_ONE = 'manyToOne';

/**
 * manyToOne
 * @param options
 */
export default function manyToOne({ resource, idField }) {
  return {
    type: MANY_TO_ONE,
    resource,
    idField,
  };
}
