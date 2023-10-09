document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tarkistaPari").addEventListener("click", function () {
        var luku = parseFloat(document.getElementById("luku").value);

        if (!isNaN(luku)) {
            if (luku % 2 === 0) {
                document.getElementById("tulos").textContent = "Luku " + luku + " on parillinen.";
            } else {
                document.getElementById("tulos").textContent = "Luku " + luku + " on pariton.";
            }
        } else {
            alert("Anna kelvollinen luku.");
        }
    });
});
