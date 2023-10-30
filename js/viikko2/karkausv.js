document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('tarkista');
    button.addEventListener('click', function() {
        var luku = document.getElementById('luku').value;
        var tulos = document.getElementById('tulos');  // Vastaus.
        if ((luku % 4 == 0 && luku % 100 != 0) || luku % 400 == 0) {
            tulos.textContent = 'Vuosi on karkausvuosi.';
        } else {
            tulos.textContent = 'Vuosi ei ole karkausvuosi.';
        }
    });
})