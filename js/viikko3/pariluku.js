function parillisetNumerot() {
    var sisaantulo = document.getElementById('sisaantulo').value;
    var vastaus = document.getElementById('vastaus');

    if (sisaantulo % 2 === 0) {
        var ulostulo = '';
        for (var i = 2; i <= sisaantulo; i += 2) {
            ulostulo += i + ' ';
        }
        vastaus.innerText = ulostulo;
    } else {
        vastaus.innerText = 'Syötä parillinen luku.';
    }
}