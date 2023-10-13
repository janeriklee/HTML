document.addEventListener("DOMContentLoaded", function () {
        var tarkistaNappi = document.getElementById("tarkistaIka");
        var tulosTeksti = document.getElementById("ajoneuvoTulos");

        tarkistaNappi.addEventListener("click", function () {
            var ika = parseInt(document.getElementById("ika").value);

            if (!isNaN(ika)) {
                var ajoneuvo = "";

                if (ika < 15) {
                    ajoneuvo = "polkupy\u00F6r\u00E4\u00E4 ja s\u00E4hk\u00F6potkulautaa.";
                } else if (ika === 15) {
                    ajoneuvo = "mopoa.";
                } else if (ika === 16) {
                    ajoneuvo = "kevaria.";
                }else if (ika === 17) {
                    ajoneuvo = "kevaria. Voit my\u00F6s hakea erityislupaa autokorttiin.";
                } else if (ika === 18) {
                    ajoneuvo = "autoa.";
                } else if (ika >= 21) {
                    ajoneuvo = "mit\u00E4 tahansa ajoneuvoa.";
                } else {
                    ajoneuvo = "autoa.";
                }

                tulosTeksti.textContent = "Olet " + ika + " vuotta, saat ajaa " + ajoneuvo;
            } else {
                alert("Anna kelvollinen ik\u00E4.");
            }
        });
    });