function tarkistaKirjain() {
    var sana = document.getElementById('sisaantulo2').value;
    var vastaus = document.getElementById('vastaus2');

    if (sana.includes('ö') || sana.includes('Ö')) {
        vastaus.innerText = 'On';
    } else {
        vastaus.innerText = 'Ei ole';
    }
}