import './style.css';
import { appendRemainingText } from './modules/about';
import { updateClassesLeft , updateClassesRight } from './modules/carousel';
import copyDiscordUserName from './modules/contact';

const rightArrow = document.querySelector("#right-arrow");
const leftArrow = document.querySelector("#left-arrow");
const discordIcon = document.querySelector("#discord");


appendRemainingText()
setInterval(updateClassesRight, 8000);

rightArrow.addEventListener('click' , updateClassesRight);
leftArrow.addEventListener('click' , updateClassesLeft);

discordIcon.addEventListener("click" , copyDiscordUserName)