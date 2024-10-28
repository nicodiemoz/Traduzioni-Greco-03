const nomi = [
    { parola: "ἄνθρωπος", traduzione: "uomo" },
    { parola: "βίος", traduzione: "vita" },
    { parola: "γῆ", traduzione: "terra" }
];

const aggettivi = [
    { parola: "ἀγαθός", traduzione: "buono" },
    { parola: "καλός", traduzione: "bello" },
    { parola: "μικρός", traduzione: "piccolo" }
];

const verbi = [
    { parola: "λύω", traduzione: "sciogliere" },
    { parola: "βλέπω", traduzione: "vedere" },
    { parola: "γράφω", traduzione: "scrivere" }
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
    } else {
        shuffledWords = [...nomi, ...aggettivi, ...verbi];
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
