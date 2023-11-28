function arpooLottonumerot() {
    const lottonumerot = [];

    while (lottonumerot.length < 7) {
        const arvottuNumero = Math.floor(Math.random() * 40) + 1;
        if (!lottonumerot.includes(arvottuNumero)) {
            lottonumerot.push(arvottuNumero);
        }
    }

    lottonumerot.sort(function (a, b) {
        return a - b;
    });

    document.getElementById("vastaus12").innerHTML = "Lottonumerot: " + lottonumerot.join(", ");
}