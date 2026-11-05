export default function loadMenu() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  content.appendChild(heading);

  const menuItems = [
    { name: "Spaghetti Bolognese", description: "Classic Italian pasta with rich meat sauce.", price: "$12.99" },
    { name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella cheese, and basil.", price: "$10.99" },
    { name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing and croutons.", price: "$8.99" },
    { name: "Grilled Salmon", description: "Fresh salmon fillet grilled to perfection.", price: "$15.99" },
    { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey center.", price: "$6.99" }
  ];

  menuItems.forEach((dish) => {
    const name = document.createElement("h2");
    name.textContent = dish.name;
    content.appendChild(name);

    const description = document.createElement("p");
    description.textContent = dish.description;
    content.appendChild(description);

    const price = document.createElement("p");
    price.textContent = dish.price;
    content.appendChild(price);
  });
}
