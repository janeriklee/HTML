function calculate() {
    var luku = document.getElementById('luku1').value;
    var lause = "";

    for (var i = 1; i <= 10; i++) {
        lause += luku + "x" + i + " = " + luku * i + "<br>";
    }

    document.getElementById('tulos1').innerHTML = lause;
}