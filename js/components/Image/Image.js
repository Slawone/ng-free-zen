/**
 * @function Image
 * @description return image html
 * @param {string} className
 * @param {string} source
 * @param {string} alternate
 * @returns {string} HTML or empty
 */

export const Image = (source, alternate, className = 'image') => {
  return /* html */ `
    <img class=${className} src=${source} alt=${alternate} loading="lazy">
  `;
};
