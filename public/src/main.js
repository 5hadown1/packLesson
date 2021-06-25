import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { Howl } from "./howler.js";
import "../style.css";
import "./toggle.js";
import "./timer.js";
import "./sound.mp3";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

function loadScript(url, callback) {
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;
    element.onload = callback;

    document.body.appendChild(element);
}