function muunnaTaulukko() {
    const alkuperainenTaulukko = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    // Luo HTML-taulukko
    const htmlTaulukko = document.createElement("table");

    // Käy läpi alkuperäisen taulukon rivit
    for (let i = 0; i < alkuperainenTaulukko.length; i++) {
        const rivi = alkuperainenTaulukko[i];
        const riviElementti = document.createElement("tr");

        // Käy läpi alkuperäisen taulukon sarakkeet
        for (let j = 0; j < rivi.length; j++) {
            const soluElementti = document.createElement("td");
            soluElementti.textContent = rivi[j];
            riviElementti.appendChild(soluElementti);
        }

        // Lisää rivi HTML-taulukkoon
        htmlTaulukko.appendChild(riviElementti);
    }

    // Näytä HTML-taulukko
    document.getElementById("vastaus13").innerHTML = "";
    document.getElementById("vastaus13").appendChild(htmlTaulukko);
}