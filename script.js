/*
<script>
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formStatus = document.getElementById('form-status');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
      formStatus.style.display = 'block';
      formStatus.style.color = '#ff4d4d';
      formStatus.textContent = 'Please fill in all required fields.';
      return;
    }

    formStatus.style.display = 'block';
    formStatus.style.color = '#00ff88';
    formStatus.textContent = 'Message sent successfully!';

    // Clear form fields
    name.value = '';
    email.value = '';
    message.value = '';
  });
</script>
*/
