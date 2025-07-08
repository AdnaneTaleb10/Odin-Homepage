import './style.css';
import { appendRemainingText } from './modules/about';
import { updateClassesLeft , updateClassesRight } from './modules/carousel';

const rightArrow = document.querySelector("#right-arrow");
const leftArrow = document.querySelector("#left-arrow");

appendRemainingText()
setInterval(updateClassesRight, 8000);

rightArrow.addEventListener('click' , updateClassesRight);
leftArrow.addEventListener('click' , updateClassesLeft);