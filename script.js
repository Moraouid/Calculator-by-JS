let num1 = 0;
let num2 = 0;
let operator;
let flag = false;
let newNumber = false;
let numberOfScreen = 0;

const screen = document.querySelector(".number");
const numbers = document.querySelectorAll("#num");
const equal = document.querySelector("#e");
const ops = document.querySelectorAll("#op");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");

screen.textContent = `${numberOfScreen}`;

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		if (screen.textContent == 0 || newNumber === true) {
			numberOfScreen = `${number.textContent}`
			newNumber = false;
		}
		else
			numberOfScreen += `${number.textContent}`
		screen.textContent = `${numberOfScreen}`;

		if (flag === false) {
			num1 = numberOfScreen;
		}
		else {
			num2 = numberOfScreen;
		}
		console.log(num1);
		console.log(num2);

	});
});

ops.forEach((op) => {
	op.addEventListener("click", () => {
		operator = op.textContent === '×' ? '*' : op.textContent;
		flag = true;
		newNumber = true;
	});
});

equal.addEventListener("click", () => {
	operate(num1, num2, operator);
});

ac.addEventListener("click", () => {
	num1 = 0;
	num2 = 0;
	operator = undefined;
	flag = false;
	newNumber = false;
	numberOfScreen = 0;
	screen.textContent = numberOfScreen;
});

del.addEventListener("click", () => {
	numberOfScreen = screen.textContent.slice(0, -1);
	if (numberOfScreen === "")
		numberOfScreen = 0;
	screen.textContent = numberOfScreen;
});

function subtract(num1, num2) {
	numberOfScreen = num1 - num2;
	screen.textContent = numberOfScreen;
}

function add(num1, num2) {
	numberOfScreen = Number(num1) + Number(num2);
	screen.textContent = numberOfScreen;
}

function multiply(num1, num2) {
	numberOfScreen = num1 * num2;
	screen.textContent = numberOfScreen;
}

function divide(num1, num2) {
	numberOfScreen = num1 / num2;
	screen.textContent = numberOfScreen;
}

function operate(num1, num2, op) {
	if (op === '-')
		subtract(num1, num2);
	else if (op === '+')
		add(num1, num2);
	else if (op === '*')
		multiply(num1, num2);
	else if (op === '/')
		divide(num1, num2);
}
