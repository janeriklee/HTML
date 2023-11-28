function etsiSuurinPienin() {
    const luku1 = parseFloat(document.getElementById("luku1").value);
    const luku2 = parseFloat(document.getElementById("luku2").value);
    const luku3 = parseFloat(document.getElementById("luku3").value);
    const luku4 = parseFloat(document.getElementById("luku4").value);
    const luku5 = parseFloat(document.getElementById("luku5").value);

    if (isNaN(luku1) || isNaN(luku2) || isNaN(luku3) || isNaN(luku4) || isNaN(luku5)) {
        alert("Syötä kelvolliset luvut.");
        return;
    }

    const suurin = Math.max(luku1, luku2, luku3, luku4, luku5);
    const pienin = Math.min(luku1, luku2, luku3, luku4, luku5);

    document.getElementById("vastaus8").innerHTML = "Suurin: " + suurin + "<br>Pienin: " + pienin;
}