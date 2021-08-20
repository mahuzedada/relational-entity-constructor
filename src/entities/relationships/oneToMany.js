export const ONE_TO_MANY = 'oneToMany';

/**
 * oneToMany
 * @param options
 */
export default function oneToMany({ resource, idField }) {
  return {
    type: ONE_TO_MANY,
    resource,
    idField,
  };
}
