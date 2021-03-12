export function getDeepValue(obj, findKey) {
  for (let key in obj) {
    if (key === findKey) {
      return obj[key];
    }

    if (typeof obj[key] === 'object') {
      const deepFind = getDeepValue(obj[key], findKey);
      if (deepFind) {
        return deepFind;
      }
    }
  }
  return undefined;
}
