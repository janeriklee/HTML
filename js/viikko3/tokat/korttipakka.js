function luoKorttipakka() {
    const maat = ['♥', '♦', '♣', '♠'];
    const numerot = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const korttipakka = [];

    for (let maa of maat) {
        for (let numero of numerot) {
            korttipakka.push(numero + maa);
        }
    }

    return korttipakka;
}

function sekoitaKortit(kortit) {
    for (let i = kortit.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kortit[i], kortit[j]] = [kortit[j], kortit[i]];
    }
}

function arpooKortit() {
    const kortit = luoKorttipakka();
    sekoitaKortit(kortit);

    const arvotutKortit = kortit.slice(0, 5);

    document.getElementById("vastaus14").innerHTML = "Arvotut kortit: " + arvotutKortit.join(', ');
}