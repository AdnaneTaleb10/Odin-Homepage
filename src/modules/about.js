const aboutTextContainer = document.querySelector("#about-text");
const fadedText = document.querySelector("#fade-text");
const moreButton = document.querySelector("#more-button-container");
const title = document.querySelector("#about-title").firstElementChild;

function appendRemainingText() {
  moreButton.addEventListener("click", () => {
    moreButton.style.display = "none";
    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Since then, I’ve worked on several small projects that allowed me to apply and grow my frontend skills using HTML, CSS, and JavaScript. I'm hoping to continue learning, get deeper into the field, and eventually explore more advanced technologies as I progress";

    paragraph.classList.add("fade-in");

    fadedText.classList.add("expanded");
    aboutTextContainer.append(paragraph);

    void paragraph.offsetWidth;
    paragraph.classList.add("visible");
  });
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
/*       if(entry.isIntersecting){
        entry.target.classList.add("visible");
      } */

      entry.target.classList.toggle("visible" , entry.isIntersecting);
    });
  },
  { threshold: 1 }
);

observer.observe(title)

export { appendRemainingText };
