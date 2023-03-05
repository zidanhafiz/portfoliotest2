const scriptURL = "https://script.google.com/macros/s/AKfycbzw-gEUyNBwKhdxrxGP2pwtpWzHdTeeaOgfFcmtIPuX0KEpHUakTkq1gFKH5M4D4pM4/exec";
const form = document.forms["contact-form"];
const btn = document.querySelector(".btn");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btn.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btn.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      alert("Terima Kasih! Pesan anda telah kami terima :)");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
