function laske() {
    var luku1 = parseInt(document.getElementById('summa1').value);
    var luku2 = parseInt(document.getElementById('summa2').value);
    var luku3 = parseInt(document.getElementById('summa3').value);
    var luku4 = parseInt(document.getElementById('summa4').value);
    var luku5 = parseInt(document.getElementById('summa5').value);

    var summa = luku1 + luku2 + luku3 + luku4 + luku5;
    var keskiarvo = summa / 5;

    document.getElementById('tulos3').textContent = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}