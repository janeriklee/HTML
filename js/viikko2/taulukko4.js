document.addEventListener("DOMContentLoaded", function () {
    var translateButton = document.getElementById("kaanna");
    var outputText = document.getElementById("kaannettyTeksti");

    translateButton.addEventListener("click", function () {
        var selectedLanguage = document.getElementById("kieli").value;

        var translations = {
            en: "Hello world",
            et: "Tere maailm",
            sv: "Hej v\u00E4rlden",
            es: "Hola mundo"
        };

        var translatedText = translations[selectedLanguage];

        if (translatedText) {
            outputText.textContent = "K\u00E4\u00E4nn\u00F6s: " + translatedText;
        } else {
            alert("K\u00E4\u00E4nn\u00F6s ep\u00E4onnistui.");
        }
    });
});