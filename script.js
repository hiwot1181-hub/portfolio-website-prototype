console.log("Welocome to Hiwot Kassa Portfolio 💜");
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#f8f1ff";
  } else {
    navbar.style.background = "white";
  }
});

const form = document.getElementById("contact-form");
const message = document.getElementById("thank-you-message");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.style.display = "block";
    form.reset();
  });
}
