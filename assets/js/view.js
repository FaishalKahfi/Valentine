class ValentineView {
    constructor() {
        this.heartContainer = this.createHeartContainer();
        document.body.appendChild(this.heartContainer);
    }

    createHeartContainer() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.overflow = 'hidden';
        return container;
    }

    updateQuote(quote) {
        const quoteElement = document.getElementById('quote');
        quoteElement.style.opacity = 0;
        quoteElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            quoteElement.textContent = quote;
            quoteElement.style.opacity = 1;
            quoteElement.style.transform = 'translateY(0)';
        }, 500);
    }

    createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.fontSize = (Math.random() * 1.5 + 0.5) + 'em';
        this.heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    createHeartBurst() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.animation = 'none';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.fontSize = '1.5em';
            
            const angle = (i / 15) * Math.PI * 2;
            const velocity = 10;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            let x = 0;
            let y = 0;
            
            document.body.appendChild(heart);
            
            let start = null;
            const animate = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                x += vx;
                y += vy + progress * 0.001;
                
                heart.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
                heart.style.opacity = Math.max(0, 1 - progress / 1000);
                
                if (progress < 1000) {
                    requestAnimationFrame(animate);
                } else {
                    heart.remove();
                }
            }
            
            requestAnimationFrame(animate);
        }
    }

    updatePlayButton(isPlaying) {
        const playPauseButton = document.getElementById('playPauseButton');
        const playIcon = document.getElementById('playIcon');
        
        if (isPlaying) {
            playIcon.textContent = '⏸';
            playPauseButton.innerHTML = '<span id="playIcon">⏸</span> Pause Music';
        } else {
            playIcon.textContent = '▶';
            playPauseButton.innerHTML = '<span id="playIcon">▶</span> Play Music';
        }
        
        playPauseButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            playPauseButton.style.transform = 'scale(1)';
        }, 100);
    }

    populateGallery(imageUrls) {
        const gallery = document.getElementById('gallery');
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = "Love Image";
            img.loading = "lazy";
            gallery.appendChild(img);
            
            img.addEventListener('mouseover', () => {
                gallery.querySelectorAll('img').forEach(otherImg => {
                    if (otherImg !== img) {
                        otherImg.style.opacity = '0.7';
                    }
                });
            });
            
            img.addEventListener('mouseout', () => {
                gallery.querySelectorAll('img').forEach(otherImg => {
                    otherImg.style.opacity = '1';
                });
            });
        });
    }

    toggleMessageBox(show) {
        const messageBox = document.getElementById('messageBox');
        if (show) {
            messageBox.style.display = 'block';
            setTimeout(() => {
                messageBox.classList.add('open');
            }, 10);
        } else {
            messageBox.classList.remove('open');
            setTimeout(() => {
                messageBox.style.display = 'none';
            }, 500);
        }
    }
}