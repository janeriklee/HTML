function muunnaSalasanaksi() {
    const syotettySana = document.getElementById("sisaantulo9").value;

    if (syotettySana.trim() === "") {
        alert("Syötä sana.");
        return;
    }

    let salasana = "";

    for (let i = 0; i < syotettySana.length; i++) {
        if (i % 2 === 0) {
            salasana += syotettySana[i];
        } else {
            const satunnainenKirjain = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Arpoo isoja kirjaimia
            salasana += satunnainenKirjain;
        }
    }

    document.getElementById("vastaus9").innerHTML = "Salasana: " + salasana;
}