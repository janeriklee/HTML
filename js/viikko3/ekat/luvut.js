function tulostaLuvut() {
    let tuloste = "";

    for (let i = 1; i <= 10; i++) {
        tuloste += i + ", ";
    }

    tuloste = tuloste.slice(0, -2);

    document.getElementById("vastaus5").innerHTML = tuloste;
}