import { formatError } from "./utils.js";

let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("start");
let timerShow = document.getElementById("timer__result");
let buttonStop = document.getElementById('stop');

buttonRun.addEventListener('click', startTimer);
buttonStop.addEventListener('click', stopTimer);

var sound = new Howl({
	src: ['./src/sound.mp3']
});

function startTimer() {
	let timerMinut = +timerInput.value * 60;
	let timerID = setInterval(function () {
		let seconds = timerMinut % 60;
		let minuts = timerMinut / 60 % 60;
		let hours = timerMinut / 60 / 60 % 60;
		if (timerMinut <= 0) {
			clearInterval(timerID);
			timerShow.innerHTML = 'Время закончилось!';
			sound.play();
		} else {
			let strTimer = `${Math.trunc(hours)}:${Math.trunc(minuts)}:${seconds}`;
			timerShow.innerHTML = strTimer;
		}
		timerMinut--;
	}, 1000);
	if (timerInput.value == '') {
		timer__result.innerHTML = formatError('Введите количество минут');
	}
	buttonStop.setAttribute('data-stop', timerID);
};

function stopTimer() {
	let timerID = buttonStop.dataset.stop;
	clearInterval(timerID);
}
// Проблема с написанием кнопки стоп для таймера.
// Так же пока не брался за оценку колбека, второе задание надеюсь добью.
// Коммент для пулл реквеста.
// Хоулер правильно ли подключил или надо было модульно, но там ошибка и гугл не помог :(

