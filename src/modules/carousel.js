import { projects } from "./projects";
const projectTitle = document.querySelector("#project-title");
const summuryText = document.querySelector(".project-summary-container > p");
const learnings = document.querySelector(".project-learnt-container > p");
const previewBtn = document.querySelector("#preview-button");
const codeBtn = document.querySelector("#code-button");

let slidingImages = document.querySelectorAll(".sliding-image");
slidingImages = Array.from(slidingImages);

const classes = [
  "carousel-hide-left",
  "carousel-hide-left",
  "carousel-left-left",
  "carousel-left",
  "carousel-center",
  "carousel-right",
  "carousel-right-right",
  "carousel-hide-right",
  "carousel-hide-right",
];

projectTitle.addEventListener("transitionend", () => {
  projectTitle.classList.remove(
    "slide-in-right",
    "slide-out-left",
    "pre-slide-in-right"
  );
});

function updateClassesRight() {
  const firstClass = classes.shift();
  classes.push(firstClass);

  slidingImages.forEach((element, index) => {
    if (element.classList.length > 1) {
      element.classList.remove(element.classList[1]);
    }
    element.classList.add(classes[index]);
  });

  updateInfo();
}

function updateClassesLeft() {
  const lastClass = classes.pop();
  classes.unshift(lastClass);

  slidingImages.forEach((element, index) => {
    if (element.classList.length > 1) {
      element.classList.remove(element.classList[1]);
    }
    element.classList.add(classes[index]);
  });

  updateInfo();
}

function updateInfo() {
  let currentDisplayedProject = document.querySelector(".carousel-center").id;
  let info = projects.find((element) => element.id === currentDisplayedProject);

  projectTitle.classList.remove("slide-in-right");
  projectTitle.classList.add("slide-out-left");

  setTimeout(() => {
    projectTitle.textContent = info.title;

    void projectTitle.offsetWidth;

    projectTitle.classList.remove("slide-out-left");
    projectTitle.classList.add("slide-in-right");

    summuryText.textContent = info.summary;
    learnings.textContent = info.learnings;
    previewBtn.href = info.previewLink;
    codeBtn.href = info.codeLink;
  }, 200);
}

export { updateClassesLeft, updateClassesRight };
