document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("etsiSuurin").addEventListener("click", function () {
        var first = parseFloat(document.getElementById("first").value);
        var second = parseFloat(document.getElementById("second").value);
        var third = parseFloat(document.getElementById("third").value);
        var fourth = parseFloat(document.getElementById("fourth").value);
        var fifth = parseFloat(document.getElementById("fifth").value);

        if (!isNaN(first) && !isNaN(second) && !isNaN(third) && !isNaN(fourth) && !isNaN(fifth)) {
            var suurin = Math.max(first, second, third, fourth, fifth);
            document.getElementById("suurin").textContent = "Suurin luku: " + suurin;
        } else {
            alert("Anna kaikki viisi lukua.");
        }
    });
});
