import "./style.css";
import { appendRemainingText } from "./modules/about";
import { updateClassesLeft, updateClassesRight } from "./modules/carousel";
import copyDiscordUserName from "./modules/contact";

const rightArrow = document.querySelector("#right-arrow");
const leftArrow = document.querySelector("#left-arrow");
const discordIcon = document.querySelector("#discord");

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const menuToggle = document.getElementById("menu-toggle");
  const linksContainer = document.getElementById("links-container");
  const links = document.querySelectorAll('#links-container > li');
  let areLinksDisplayed = false;

  menuToggle.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    if(!areLinksDisplayed){
      navbar.style.padding = "0 0.5em";
    }else{
      navbar.style.padding = "1em";
    }

    areLinksDisplayed = !areLinksDisplayed;
  });

  links.forEach((link) => {
    link.addEventListener('click' , () => {
      linksContainer.classList.toggle("active");
    })
  })
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    const intro = document.getElementById("intro-screen");
    intro.classList.add("hide");

    setTimeout(() => {
      intro.style.display = "none";
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 1000);
  }, 2000);
});

appendRemainingText();
setInterval(updateClassesRight, 8000);

rightArrow.addEventListener("click", updateClassesRight);
leftArrow.addEventListener("click", updateClassesLeft);

discordIcon.addEventListener("click", copyDiscordUserName);
