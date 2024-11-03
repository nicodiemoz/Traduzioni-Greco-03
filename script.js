const nomi = [
    { parola: "ἄνθρωπος", traduzione: "uomo" },
    { parola: "βίος", traduzione: "vita" },
    { parola: "γῆ", traduzione: "terra" },
    { parola: "ὠ̃ψ", traduzione: "occhio" },
    { parola: "γυνή", traduzione: "donna" },
    { parola: "κύων", traduzione: "cane" },
    { parola: "μάρτυς", traduzione: "testimone" },
    { parola: "οὖς", traduzione: "orecchio" },
    { parola: "πῦρ", traduzione: "fuoco" }
];

const aggettivi = [
    { parola: "ἀγαθός", traduzione: "buono" },
    { parola: "καλός", traduzione: "bello" },
    { parola: "μικρός", traduzione: "piccolo" },
    { parola: "μέλας, μέλαινα, μέλαν", traduzione: "nero" },
    { parola: "τάλας, τάλανα, τάλαν", traduzione: "infelice" },
    { parola: "τερπνός, τερπνή, τερπνόν", traduzione: "tenero" },
    { parola: "σύμπας, σύμπασα, σύμπαν", traduzione: "tutto insieme" },
    { parola: "ἀντίος, ἀντία, ἀντίον", traduzione: "noto, contrario" },
    { parola: "ἀγαθός, ἀγαθή, ἀγαθόν", traduzione: "valente, favorevole" },
    { parola: "χαρίεις, χαρίεσσα, χαρίεν", traduzione: "grazioso" },
    { parola: "γλυκύς, γλυκεῖα, γλυκύ", traduzione: "dolce (per gusto)" },
    { parola: "βραδύς, βραδεῖα, βραδύ", traduzione: "lento" },
    { parola: "βαθύς, βαθεῖα, βαθύ", traduzione: "profondo" },
    { parola: "ταχύς, ταχεῖα, ταχύ", traduzione: "veloce" },
    { parola: "ἠδύς, ἠδεῖα, ἠδύ", traduzione: "dolce (con le mente)" },
    { parola: "αὐτός, αὐτή, αὐτό", traduzione: "auto, quieto" },
    { parola: "πιός, πιά, πιόν", traduzione: "grasso" },
    { parola: "εὐδαίμων, εὐδαίμονος", traduzione: "felice" },
    { parola: "εὐπρεπής, εὐπρεπές", traduzione: "saggio" },
    { parola: "σκληρός, σκληρά, σκληρόν", traduzione: "stretto, sicuro" },
    { parola: "πέπνος, πέπνη, πέπνον", traduzione: "maturo" },
    { parola: "σεβής, σεβής, σεβές", traduzione: "empio" },
    { parola: "εὐσεβής, εὐσεβής, εὐσεβές", traduzione: "pio" },
    { parola: "ἀμαθής, ἀμαθής, ἀμαθές", traduzione: "ignorante" },
    { parola: "ἀληθής, ἀληθής, ἀληθές", traduzione: "vero" },
    { parola: "ἀσθενής, -ές", traduzione: "debole" },
    { parola: "ἀκριβής, -ές", traduzione: "attento, preciso" },
    { parola: "εὐχάρις, εὔχαρι", traduzione: "grazioso" },
    { parola: "εὐγενής, -ές", traduzione: "nobile" },
    { parola: "φιλοπάτρις, -τρος", traduzione: "patriottico" },
    { parola: "εὐέλπης, -ελπες", traduzione: "di buona speranza, speranzoso" },
    { parola: "ἀνέλπης, -ελπες", traduzione: "senza speranza, sfiduciato" },
    { parola: "ἐλπής, -ές", traduzione: "espetto" },
    { parola: "ἀδάκρυς, -υ", traduzione: "senza lacrime" },
    { parola: "ἀπάτης, -ος", traduzione: "rapace, avido" },
    { parola: "φυγάς, -δος", traduzione: "esule, fuggiasco" },
    { parola: "πτωχός, -ος", traduzione: "povero" },
    { parola: "μέγας, μεγάλη, μέγα", traduzione: "grande" },
    { parola: "πολύς, πολλή, πολύ", traduzione: "molto" },
    { parola: "πρᾶος, πραεία, πραεῖον", traduzione: "mite" }
];

const verbi = [
    { parola: "λύω", traduzione: "sciogliere" },
    { parola: "βλέπω", traduzione: "vedere" },
    { parola: "γράφω", traduzione: "scrivere" },
    { parola: "ἄρχομαι", traduzione: "cominciare" },
    { parola: "λήγω", traduzione: "finire" },
    { parola: "διαλείπω", traduzione: "continuare" },
    { parola: "ὁρῶ", traduzione: "vedere" },
    { parola: "αἰσθάνομαι", traduzione: "sentire + GEN" },
    { parola: "ἀκούω", traduzione: "percepire" },
    { parola: "γιγνώσκω", traduzione: "conoscere/sapere" },
    { parola: "χαίρω", traduzione: "mi allegro" },
    { parola: "ἡγέομαι", traduzione: "amabile" },
    { parola: "φαίνω", traduzione: "separare" },
    { parola: "φαίνομαι, εἰμί", traduzione: "sono evidente/chiaro" },
    { parola: "ἴσομαι εἰμί", traduzione: "sono evidente/chiaro" },
    { parola: "τυγχάνω", traduzione: "essere a caso/trovarsi (nel part.) casualmente" },
    { parola: "λανθάνω", traduzione: "sto nascosto (nel part.) di nascosto" },
    { parola: "φθάνω", traduzione: "prevengo (nel part.) primo/per primo" },
    { parola: "δηλόω", traduzione: "appaio/mi mostro (nel part.) chiaramente" }
],

    
  const complementi = [
    { parola: "εν + dativo / ὑπό + genitivo / παρά + dativo", traduzione: "Stato in luogo" },
    { parola: "εἰς / πρός / ἐπί + accusativo", traduzione: "Moto a luogo" },
    { parola: "εκ / από + genitivo", traduzione: "Moto da luogo" },
    { parola: "διά + genitivo / κατὰ + accusativo", traduzione: "Moto per luogo" },
    { parola: "συν + dativo / μετά + genitivo", traduzione: "Compagnia/Unione" },
    { parola: "διά + accusativo", traduzione: "Causa" },
    { parola: "συν + dativo", traduzione: "Modo" },
    { parola: "διά + genitivo", traduzione: "Mezzo" },
    { parola: "περί + genitivo", traduzione: "Argomento" },
    { parola: "ὑπό / παρά / εκ / από + genitivo/dativo", traduzione: "Agente/Causa efficiente" },
    { parola: "εν + dativo / πρό + genitivo (prima) / μετά + accusativo/genitivo (dopo)", traduzione: "Tempo determinato" },
    { parola: "εν / πρό / μετά + accusativo", traduzione: "Tempo continuato" }
  ]
];

let currentWordIndex = 0;
let currentMode = 'nomi';
let shuffledWords = [];

// Funzione per mescolare un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById("startQuiz").addEventListener("click", function () {
    currentMode = document.getElementById("modalita").value;

    if (currentMode === 'nomi') {
        shuffledWords = [...nomi];
    } else if (currentMode === 'aggettivi') {
        shuffledWords = [...aggettivi];
    } else if (currentMode === 'verbi') {
        shuffledWords = [...verbi];
    } else if (currentMode === 'complementi') {
        shuffledWords = [...complementi];
    } else {
        shuffledWords = [...nomi, ...aggettivi, ...verbi, ...complementi];
    }
    
    shuffle(shuffledWords);
    currentWordIndex = 0;
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quizAnswer").style.display = "none";
    showNextWord();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("quizAnswer").style.display = "block";
});

function showNextWord() {
    if (currentWordIndex < shuffledWords.length) {
        let word = shuffledWords[currentWordIndex];
        document.getElementById("quizPrompt").textContent = `Parola: ${word.parola}`;
        document.getElementById("quizAnswer").textContent = `Traduzione: ${word.traduzione}`;
        document.getElementById("quizAnswer").style.display = "none";

        currentWordIndex++;
    } else {
        document.getElementById("quizPrompt").textContent = "Quiz terminato!";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("quizAnswer").style.display = "none";
    }
}
