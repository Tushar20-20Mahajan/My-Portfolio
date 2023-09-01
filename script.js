function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw80UKnTUE2jBh9_qBmfMhqllrcD3Nlj6jo_hLBSWmu2bMjC9U6OmkDExg28-jcItdv/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
          form.reset();
        }, 3000);
      } else {
        console.error('Error:', response.statusText);
      }
    })
    .catch(error => console.error('Error!', error.message));
});
