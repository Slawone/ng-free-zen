/**
 * @function Paragraph
 * @description return paragraph html
 * @param {string} className
 * @param {string} value
 * @returns {string} HTML or empty
 */

export const Paragraph = (value, className = 'copy') => {
  return /* html */ `
    <p class="${className}">${value}</p>
  `;
};
