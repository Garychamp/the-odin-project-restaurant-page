export default function loadHome() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "Gary's Restaurant";
  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome to Gary's Restaurant! We serve the best food in town. Enjoy your meal and have a great time!";
  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  image.alt = "Delicious food";
  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(image);
}







