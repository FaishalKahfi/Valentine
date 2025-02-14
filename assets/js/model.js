class ValentineModel {
    constructor() {
        this.quotes = [
            "Love is about how much you love each other every single day.",
            "In all the world, there is no love for you like mine.",
            "You are my today and all of my tomorrows.",
            "I have found the one whom my soul loves.",
            "You are my sun, my moon, and all my stars.",
            "Every love story is beautiful, but ours is my favorite.",
            "To love and be loved is to feel the sun from both sides.",
            "Your love is all I need to feel complete.",
            "You make every day feel like Valentine's Day.",
            "Love is not finding someone to live with, it's finding someone you can't live without."
        ];

        this.imageUrls = [
            "assets/images/image1.jpg",
            "assets/images/image2.jpg",
            "assets/images/image3.jpg",
            "assets/images/image4.jpg",
            "assets/images/image5.jpg",
            "assets/images/image6.jpg",
            "assets/images/image7.jpg",
            "assets/images/image8.jpg",
            "assets/images/image9.jpg",
            "assets/images/image10.jpg",
            "assets/images/image11.jpg",
            "assets/images/image12.jpg",
            "assets/images/image13.jpg",
            "assets/images/image14.jpg",
            "assets/images/image15.jpg",
            "assets/images/image16.jpg",
            "assets/images/image17.jpg",
            "assets/images/image18.jpg",
            "assets/images/image19.jpg",
            "assets/images/image20.jpg"
        ];

        this.isPlaying = false;
    }

    getRandomQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }

    getImageUrls() {
        return this.imageUrls;
    }

    togglePlayState() {
        this.isPlaying = !this.isPlaying;
        return this.isPlaying;
    }
}