document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('tarkista');
    button.addEventListener('click', function() {
        var luku = document.getElementById('luku').value;
        var tulos = document.getElementById('tulos');  // Vastaus.
        if (luku > 0) {
            tulos.textContent = 'Antamasi luku on positiivinen.';
        } else if (luku < 0) {
            tulos.textContent = 'Antamasi luku on negatiivinen.';
        } else {
            tulos.textContent = 'Antamasi luku on nolla.';
        }
    });
})