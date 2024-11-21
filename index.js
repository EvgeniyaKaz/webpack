import "./index.css";
import image from "./assets/images.png";

const header = document.createElement("h1");
header.textContent = "Hello";
const img = document.createElement("img");
img.src = image;

document.querySelector("body").append(header);
document.querySelector("body").append(img);

console.log("Hello World!");
