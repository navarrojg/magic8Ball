const bila = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const randomAnswers = [
	"Tak",
	"Nie",
	"Być może",
	"Mozliwe",
	"Nie chcesz wiedzieć",
	"Całkiem prawdopodobne",
	"Trudno powiedzieć",
	"Następne pytanie proszę!",
	"Nawet nie pytaj!",
];

const randomAnswer = () => {
	const number = Math.floor(Math.random() * randomAnswers.length);
	answer.textContent = randomAnswers[number];
};

const checkQM = () => {
	lastChar = input.value.slice(-1);
	if (lastChar !== "?") {
		error.textContent = "Pytanie musi się kończyć znakiem zapytania!";
	} else {
		error.textContent = "";
		randomAnswer();
	}
};

const checkInput = () => {
	if (input.value === "") {
		error.textContent = "Musisz zadać kuli jakieś pytanie!";
	} else {
		error.textContent = "";
		checkQM();
	}
};

bila.addEventListener("click", () => {
	bila.classList.add("shake-animation");
	setTimeout(() => {
		bila.classList.remove("shake-animation");
	}, 1000);
});

bila.addEventListener("click", checkInput);
