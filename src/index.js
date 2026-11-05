import loadHome from "./home.js";
import loadMenu from "./menu.js";

loadHome();

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
  loadMenu();
});

