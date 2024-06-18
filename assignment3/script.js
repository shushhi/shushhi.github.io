// This function allows the drop down menu to be displayed when 
// clicking the profile icon
const profileButton = document.querySelector("#my-profile");
console.log(profileButton);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

profileButton.addEventListener("click", toggleContent);

function toggleContent() {
  console.log("I am clicked");
  profileContent.classList.toggle("show");
}

// This function allows the drop down menu to be displayed when 
// clicking the shopping cart icon
const cartButton = document.querySelector("#my-cart");
console.log(cartButton);

const cartContent = document.querySelector("#cart-content");
console.log(cartContent);

cartButton.addEventListener("click", toggleCart);

function toggleCart() {
  console.log("I am clicked");
  cartContent.classList.toggle("show");
}