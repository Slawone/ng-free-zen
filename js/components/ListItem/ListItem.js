/**
 * @function ListItem
 * @param {string} value
 * @param {string} href
 * @param {string} className
 * @param {*} props
 * @returns {string} HTML or empty
 */

export const ListItem = (value, href, className, ...props) => {
  return /* html */ `
    <li class="${className}">
      <a href=${href}>${value}</a>
    </li>
  `;
};
