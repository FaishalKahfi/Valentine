class ValentineController {
    constructor() {
        this.model = new ValentineModel();
        this.view = new ValentineView();
        
        this.initializeApp();
        this.setupEventListeners();
    }

    initializeApp() {
        // Initialize the gallery
        this.view.populateGallery(this.model.getImageUrls());

        // Start quote rotation
        this.startQuoteRotation();

        // Initialize hearts
        for (let i = 0; i < 5; i++) {
            this.view.createHeart();
        }

        // Start heart creation interval
        setInterval(() => this.view.createHeart(), 300);
    }

    setupEventListeners() {
        // Music player controls
        const music = document.getElementById('bgMusic');
        const playPauseButton = document.getElementById('playPauseButton');
        
        playPauseButton.addEventListener('click', () => {
            const isPlaying = this.model.togglePlayState();
            if (isPlaying) {
                music.play().catch(error => {
                    console.log("Audio playback failed:", error);
                    this.model.togglePlayState();
                    this.view.updatePlayButton(false);
                });
            } else {
                music.pause();
            }
            this.view.updatePlayButton(isPlaying);
        });

        // Send love button
        const sendLoveButton = document.getElementById('sendLoveButton');
        sendLoveButton.addEventListener('click', () => {
            sendLoveButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                sendLoveButton.style.transform = 'scale(1)';
                this.view.createHeartBurst();
                alert("❤️❤️❤️❤️ Woppyuuu tuuu cayanggkuuu. Happy Valentine's Day cayanggkuuu ❤️❤️❤️❤️");
            }, 100);
        });

        // Message box controls
        const messageIcon = document.getElementById('messageIcon');
        const closeMessage = document.getElementById('closeMessage');
        
        messageIcon.addEventListener('click', () => {
            this.view.toggleMessageBox(true);
            this.view.createHeartBurst();
        });
        
        closeMessage.addEventListener('click', () => {
            this.view.toggleMessageBox(false);
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    startQuoteRotation() {
        const updateQuote = () => {
            const newQuote = this.model.getRandomQuote();
            this.view.updateQuote(newQuote);
        };

        setInterval(updateQuote, 6000);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const app = new ValentineController();
});