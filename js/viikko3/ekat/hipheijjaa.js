function tulostaLuvut() {
    const syotettyLuku = parseInt(document.getElementById("sisaantulo4").value);

    if (isNaN(syotettyLuku) || syotettyLuku < 1 || syotettyLuku > 100) {
        alert("Syötä kelvollinen luku 1-100.");
        return;
    }

    let tuloste = "";

    for (let i = 1; i <= syotettyLuku; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tuloste += "hipheijaa, ";
        } else if (i % 3 === 0) {
            tuloste += "hip, ";
        } else if (i % 5 === 0) {
            tuloste += "heijaa, ";
        } else {
            tuloste += i + ", ";
        }
    }

    tuloste = tuloste.slice(0, -2);

    document.getElementById("vastaus4").innerHTML = tuloste;
}