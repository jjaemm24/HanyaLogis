document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('quoteForm');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 페이지 이동 막기

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      successModal.show();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch(error => {
      errorModal.show();
      console.error(error);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  });
});
