const btnToggle = document.getElementById('toggler');

btnToggle.addEventListener('click', () => {
	let calculator = document.getElementById('calculator');
	let timer = document.getElementById('timer');

	calculator.classList.toggle("hidden");
	timer.classList.toggle("hidden");
});