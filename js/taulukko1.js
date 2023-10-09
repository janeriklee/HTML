document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("laske").addEventListener("click", function () {
        var ekaNumero = parseFloat(document.getElementById("eka").value);
        var tokaNumero = parseFloat(document.getElementById("toka").value);
        var kolmasNumero = parseFloat(document.getElementById("kolmas").value);

        if (!isNaN(ekaNumero) && !isNaN(tokaNumero) && !isNaN(kolmasNumero)) {
            var numerot = [ekaNumero, tokaNumero, kolmasNumero];
            numerot.sort(function (a, b) {
                return a - b;
            });

            var jarjestysTeksti = numerot.join(", ");
            document.getElementById("jarjestys").textContent = "J\u00E4rjestys: " + jarjestysTeksti;
        } else {
            alert("Anna kaikki kolme numeroa.");
        }
    });
});