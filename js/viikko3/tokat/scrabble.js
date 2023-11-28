function laskePisteet() {
    const syotettySana = document.getElementById("scrabbleSana").value.toUpperCase();

    let pisteytys = {
        'A': 1, 'E': 1, 'I': 1, 'N': 1, 'S': 1, 'T': 1,
        'O': 2, 'Ä': 2, 'K': 2, 'L': 2,
        'U': 3, 'M': 3,
        'Y': 4, 'H': 4, 'J': 4, 'P': 4, 'R': 4, 'V': 4,
        'Ö': 7, 'D': 7,
        'B': 8, 'F': 8, 'G': 8,
        'C': 10
    };

    let pisteet = 0;

    for (let i = 0; i < syotettySana.length; i++) {
        let kirjain = syotettySana[i];
        pisteet += pisteytys[kirjain] || 12;
    }

    document.getElementById("vastaus11").innerHTML = "Sanan \"" + syotettySana + "\" pisteet: " + pisteet;
}