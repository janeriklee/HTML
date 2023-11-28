function laskeYhteen() {
    let tuloste = 0;

    for (let i = 1; i <= 10; i++) {
        tuloste += i;
    }

    document.getElementById("vastaus6").innerHTML = tuloste;
}