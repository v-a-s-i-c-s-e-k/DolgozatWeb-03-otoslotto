function otoslotto() {
	const szamok = new Set();

	while (szamok.size < 5) {
		const veletlenSzam = Math.floor(Math.random() * 90) + 1;
		szamok.add(veletlenSzam);
	}

	return Array.from(szamok).sort((a, b) => a - b);
}

function szamokMegjelenitese(szamok) {
	const lista = document.querySelector("#szamok");

	lista.innerHTML = "";

	szamok.forEach((szam) => {
		const listaElem = document.createElement("li");
		listaElem.textContent = szam;
		lista.appendChild(listaElem);
	});
}

function otoslottoTeszt(szamok) {
	const pontosanOtSzam = szamok.length === 5;
	const mindenSzamTartomanybanVan = szamok.every((szam) => szam >= 1 && szam <= 90);
	const nincsIsmetlodes = new Set(szamok).size === szamok.length;
	const novekvoSorrend = szamok.every((szam, index, tomb) => {
		return index === 0 || tomb[index - 1] < szam;
	});

	return pontosanOtSzam
		&& mindenSzamTartomanybanVan
		&& nincsIsmetlodes
		&& novekvoSorrend;
}

function sorsolas() {
	const eredmeny = otoslotto();
	const tesztSikeres = otoslottoTeszt(eredmeny);

	szamokMegjelenitese(eredmeny);

	document.querySelector("#teszt-eredmeny").textContent = tesztSikeres
		? "Teszt sikeres: a számok megfelelnek a feltételeknek."
		: "Teszt sikertelen: hiba található a generált számok között.";
}

document.querySelector("#sorsolas-gomb").addEventListener("click", sorsolas);

sorsolas();