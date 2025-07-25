export const handleShowModal = () => {
  const body = document.body;
  const modal = document.getElementById('modal');
  body.classList.add('open');
  modal?.classList.add('open');
}
