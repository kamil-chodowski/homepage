const name = "Kamil";
const age = 33;

const emptySelector = document.querySelector(".about__description--js");

emptySelector.innerHTML = "Ta treść została dodana w JavaScript";

function greet(age, name) {
  console.log(`Cześć! Mam na imie ${name} i mam ${age} lata.`);
}

greet(age, name);

const greetNew = (age, name) => {
  console.log(`Cześć! Jestem ${name} i mam ${age} lata!`);
};

greetNew(33, "Kamil");

if (3 === 3) {
  console.log("To prawda");
}

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
