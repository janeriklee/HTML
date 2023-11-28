function laskeKertoma() {
    var luku = document.getElementById('sisaantulo3').value;
    var vastaus = document.getElementById('vastaus3');

    if (luku < 0) {
        vastaus.innerText = 'Kertomaa ei voi laskea negatiiviselle luvulle.';
    } else if (luku === 0) {
        vastaus.innerText = '0! = 1';
    } else {
        var kertoma = 1;
        for (var i = 1; i <= luku; i++) {
            kertoma *= i;
        }
        vastaus.innerText = luku + '! = ' + kertoma;
    }
}