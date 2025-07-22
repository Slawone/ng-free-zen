export const handleShowModal = () => {
  const body = document.body;
  const modal = document.getElementById('modal');
  body.classList.add('open');
  modal?.classList.add('open');
}

export const handleSubmitForm = () => {

}

/*
<script>
document.getElementById('myForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Останавливаем стандартную отправку формы

  const formData = new FormData(this); // Собираем данные формы
  const jsonData = Object.fromEntries(formData); // Преобразуем в объект

  try {
    const response = await fetch('https://example.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    });

    if (response.ok) {
      const result = await response.json();
      alert('Форма отправлена успешно!');
    } else {
      alert('Ошибка при отправке: ' + response.status);
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Произошла ошибка при отправке формы');
  }
});
</script>
*/