function muutaSalasanaksi() {
    var sisaantulo = document.getElementById('sisaantulo1').value;
    var vastaus = document.getElementById('vastaus1');

    var salasana = '';
    for (var i = 0; i < sisaantulo.length; i++) {
        if (i % 2 === 1) {
            salasana += 'Ö' + sisaantulo[i];
        } else {
            salasana += sisaantulo[i];
        }
    }
    vastaus.innerText = salasana;
}




