export const isRelative = (url) => !/^(?:[a-z]+:)?\/\//.test(url);

export default { isRelative };
