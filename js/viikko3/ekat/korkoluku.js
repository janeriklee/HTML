function laskePotenssi() {
    const korotettavaLuku = parseFloat(document.getElementById("korotettava").value);
    const potenssi = parseFloat(document.getElementById("potenssi").value);

    if (isNaN(korotettavaLuku) || isNaN(potenssi)) {
        alert("Syötä kelvolliset luvut.");
        return;
    }

    const tulos = Math.pow(korotettavaLuku, potenssi);

    document.getElementById("vastaus7").innerHTML = "Tulos: " + tulos;
}