function laskeNumerot() {
    const pienempiNumero = parseFloat(document.getElementById("pienempi").value);
    const isompiNumero = parseFloat(document.getElementById("isompi").value);

    if (isNaN(pienempiNumero) || isNaN(isompiNumero) || pienempiNumero >= isompiNumero) {
        alert("Syötä kelvolliset numerot. Jälkimmäisen numeron tulee olla suurempi.");
        return;
    }

    let parillisetNumerot = [];
    let parittomatNumerot = [];
    let parillistenSumma = 0;
    let parittomienSumma = 0;

    for (let i = pienempiNumero; i <= isompiNumero; i++) {
        if (i % 2 === 0) {
            parillisetNumerot.push(i);
            parillistenSumma += i;
        } else {
            parittomatNumerot.push(i);
            parittomienSumma += i;
        }
    }

    document.getElementById("vastaus10").innerHTML =
        "Parilliset numerot: " + parillisetNumerot.join(", ") + "<br>" +
        "Parillisten numeroiden summa: " + parillistenSumma + "<br>" +
        "Parittomat numerot: " + parittomatNumerot.join(", ") + "<br>" +
        "Parittomien numeroiden summa: " + parittomienSumma;
}