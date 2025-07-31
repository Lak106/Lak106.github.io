document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.innerText = 'Please fill in all fields.';
      return;
    }

    Email.send({
      // SecureToken: 'TOKEN',
      To: 'lakshanth.thiru@gmail.com',
      From: email,
      Subject: `New contact from ${name}`,
      Body: `
        <b>Name:</b> ${name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}
      `
    })
    .then(response => {
      if (response === 'OK') {
        status.innerText = 'Message sent successfully!';
        form.reset();
      } else {
        throw new Error(response);
      }
    })
    .catch(err => {
      console.error('Email error:', err);
      status.innerText = 'Failed to send message. Please try again later.';
    });
  });
});
