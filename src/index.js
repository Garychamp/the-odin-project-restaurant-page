import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

loadHome();

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
  loadMenu();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
  loadContact();
});

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
  loadHome();
});


