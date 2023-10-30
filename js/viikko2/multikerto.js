function calculate() {
    var luku = document.getElementById('luku').value;
    var lause = "";

    for (var i = 1; i <= 10; i++) {
        lause += luku + "x" + i + " = " + luku * i + "<br>";
    }

    document.getElementById('tulos').innerHTML = lause;
}