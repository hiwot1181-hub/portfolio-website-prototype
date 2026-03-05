document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message, Hiwot✨ I will respond soon.");
});
