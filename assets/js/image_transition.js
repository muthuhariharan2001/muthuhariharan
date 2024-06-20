// List of image URLs
const images = [
  "assets/images/about/3D_Images.gif",
  "assets/images/about/Entire_Stack.gif",
  "assets/images/about/Hack.webp",
  "assets/images/about/Test_evelopment.gif",
  "assets/images/about/Full_Stack_Moving.gif",
  "assets/images/about/ProgramminG_Man.gif",
];

// Function to display a random image
function displayRandomImage() {
  const imgElement = document.getElementById("carousel");
  const randomIndex = Math.floor(Math.random() * images.length);
  imgElement.src = images[randomIndex];
}

// Set an interval to change the image every 5 seconds (5000 milliseconds)
setInterval(displayRandomImage, 5000);

// Initial call to display a random image immediately on load
displayRandomImage();

//==========================Text Tranisition======================================

let textElement = document.querySelector(".text");
let textContent = textElement.textContent;
textElement.innerHTML = "";

for (let char of textContent) {
  let span = document.createElement("span");
  span.textContent = char;
  textElement.appendChild(span);
}

let spans = textElement.querySelectorAll("span");

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  spans.forEach((span, index) => {
    if (scrollDistance >= (index +10) * 2) {
      span.classList.add("active");
    } else {
      span.classList.remove("active");
    }
  });
});
