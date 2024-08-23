const sentences = [
    "Facia sayangnya koko",
    "This is for you sayang",
    "♪ I'm sorry if I said I need YOU ♪",
    "♪ But I don't care, I'm not scared of love ♪",
    "♪ Cause when I'm not with YOU I'm weaker ♪",
    "♪ Is that so wrong ♪",
    "♪ Is it so wrong ♪",
    "♪ That YOU make me strong ♪",
];

const backgrounds = [
    "", // Kalimat 1 tanpa background
    "", // Kalimat 2 tanpa background
    "url('./assets/1.jpeg')",
    "url('./assets/2.jpeg')",
    "url('./assets/3.jpeg')",
    "url('./assets/4.jpeg')",
    "url('./assets/5.jpeg')",
    "url('./assets/6.jpeg')",
];

let currentIndex = 0;
const sentenceElement = document.getElementById("sentence");
const container = document.querySelector(".sentence-container");

// Buat elemen audio untuk memainkan musik
const music = new Audio('./assets/strong.mp3'); // Ganti dengan path ke file musikmu

container.addEventListener("click", () => {
    sentenceElement.style.opacity = 0; // Fade out

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % sentences.length;
        sentenceElement.textContent = sentences[currentIndex];
        sentenceElement.style.transform = "translateX(20px)"; // Move text to the right
        sentenceElement.style.opacity = 1; // Fade in

        // Ganti background sesuai kalimat
        if (backgrounds[currentIndex]) {
            container.style.backgroundImage = backgrounds[currentIndex];
            container.style.backgroundSize = "cover"; // Sesuaikan ukuran background
            container.style.backgroundPosition = "center"; // Posisikan background di tengah
        } else {
            container.style.backgroundImage = ""; // Hapus background untuk kalimat tanpa background
        }

        setTimeout(() => {
            sentenceElement.style.transform = "translateX(0)"; // Reset position
        }, 50); // Short delay to make the transition smoother
        
        // Mulai musik ketika kalimat ketiga muncul (indeks 2)
        if (currentIndex === 2) {
            music.play();
        }
    }, 500); // Match with the transition time
});