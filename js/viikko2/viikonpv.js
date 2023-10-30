document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('tarkista');
    button.addEventListener('click', function() {
        var luku = document.getElementById('luku').value;
        var tulos = document.getElementById('tulos');  // Vastaus.
        if (luku === "1") {
            tulos.textContent = 'Maanantai.';
        } else if (luku === "2") {
            tulos.textContent = 'Tiistai.';
        } else if (luku === "3") {
            tulos.textContent = 'Keskiviikko.';
        } else if (luku === "4") {
            tulos.textContent = 'Torstai.';
        } else if (luku === "5") {
            tulos.textContent = 'Perjantai.';
        } else if (luku === "6") {
            tulos.textContent = 'Lauantai.';
        } else if (luku === "7") {
            tulos.textContent = 'Sunnuntai.';
        } else {
            tulos.textContent = 'Tarkista syöte. (1-7)';
        }
    });
})