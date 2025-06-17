/**
 * @typedef {import('./types').Clients} Clients;
 */

/**
 * @function Clients
 * @param {Clients} clients
 * @returns
 */

export const Clients = (clients) => {

  const section = document.createElement('section');
  const wrapper = document.createElement('div');
  const list = document.createElement('ul');

  section.className = 'clients';
  wrapper.className = 'clients__wrapper';
  list.className = 'list';

  for (const client of clients.clients) {
    const listItem = document.createElement('li');
    const image = document.createElement('img');

    listItem.classList = 'list__item';

    image.src = client.image.source;
    image.alt = client.image.description;

    listItem.append(image);

    list.append(listItem);
  }

  wrapper.append(list);
  section.append(wrapper);

  return section;
}