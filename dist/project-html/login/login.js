const inputLogin = document.querySelector("#umur");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputLogin.addEventListener("input", (e) => {
  const inputs = e.target.value;
  console.log(inputs);
});
