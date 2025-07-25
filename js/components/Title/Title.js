/**
 * @function Title
 * @description return title html
 * @param {number} priority
 * @param {string} className
 * @param {string} value
 * @returns {string} HTML or empty
 */

export const Title = (priority, className, value) => {
  switch (priority) {
    case 1:
      return `<h1 class="${className}">${value}</h1>`
    case 2:
      return `<h2 class="${className}">${value}</h2>`
    case 3:
      return `<h3 class="${className}">${value}</h3>`

    default:
      return`<h4 class="${className}">${value}</h4>`;
  }
}