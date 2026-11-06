export default function loadContact() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  content.appendChild(heading);

  const email = document.createElement("p");
  email.textContent = "Email: info@garysrestaurant.com";
  content.appendChild(email);

  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";
  content.appendChild(phone);

  const address = document.createElement("p");
  address.textContent = "Address: 123 Main Street, Food City, FC 12345";
  content.appendChild(address);

  content.appendChild(heading);
  content.appendChild(email);
  content.appendChild(phone);
  content.appendChild(address);

}