const	setButton = (str) =>
{
	const	button = document.getElementById("btn");

	button.classList.remove("empire");
	button.classList.remove("rebels");
	if (str != "")
		button.classList.add(str);
}

const	setCounter = (heads, tails) =>
{
	const	rebelsCount = document.getElementById("rebel-count");
	const	empireCount = document.getElementById("empire-count");

	rebelsCount.innerHTML = heads;
	empireCount.innerHTML = tails;
}

const	setCoin = (nbr) =>
{
	const	heads = document.getElementById("heads");
	const	tails = document.getElementById("tails");

	heads.classList.remove('hidden');
	tails.classList.remove('show');
	heads.classList.add('show');
	tails.classList.add('hidden');
	if (nbr != 2)
	{
		heads.classList.remove('show');
		tails.classList.remove('hidden');
		heads.classList.add('hidden');
		tails.classList.add('show');
	}
}

const	startCounter = (nbr) =>
{
	let	heads = document.getElementById("rebel-count").innerHTML;
	let	tails = document.getElementById("empire-count").innerHTML;

	if (heads === "0" && tails === "0")
	{
		heads = 0;
		tails = 0;
		console.log(heads + 5);
	}
	if (nbr == 2)
	{
		heads++;
		setCounter(heads, tails);
		playSound("chewy");
		setButton("rebels");
	}
	else
	{
		tails++;
		setCounter(heads, tails);
		playSound("vader");
		setButton("empire");
	}
}

const	playSound = (str) =>
{
	let	sound = new Audio(`./resources/sounds/${str}.mp3`)
	
	sound.play();
}

const	coinToss = () =>
{
	const	element	= document.getElementById("inner");
	let		randomNbr = Math.floor(Math.random() * (2) + 1);
	
	if (randomNbr < 2)
		randomNbr = randomNbr + 0.5;
	setCoin(randomNbr);
	playSound("saberon");
	setTimeout (() => {startCounter(randomNbr);}, 3000);
	document.documentElement.style.setProperty('--end-rot', `${3600 * randomNbr}deg`);
	element.classList.remove('animation');
	void element.offsetWidth;
	element.classList.add('animation');
}

const	gameReload = () =>
{
	setCounter(0, 0);
	setButton("");
	setCoin(2);
}