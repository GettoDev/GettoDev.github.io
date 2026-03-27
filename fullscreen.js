// Fullscreen API Utility
class FullscreenManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.gameContainer = document.querySelector('.game-container');
        this.gameFrame = document.querySelector('.game-iframe');
        
        if (this.fullscreenBtn && this.gameContainer) {
            this.showButtonImmediately();
            this.bindEvents();
        }
    }
    
    showButtonImmediately() {
        // Show button immediately while game loads
        this.fullscreenBtn.style.display = 'block';
        this.fullscreenBtn.style.position = 'relative';
        this.fullscreenBtn.style.zIndex = '1000';
        
        // Add loading overlay to game
        this.createLoadingOverlay();
    }
    
    createLoadingOverlay() {
        // Create overlay that covers the game while loading
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            border-radius: 8px;
        `;
        
        // Add loading text
        const loadingText = document.createElement('div');
        loadingText.textContent = 'Loading Game...';
        loadingText.style.cssText = `
            color: #00ffff;
            font-family: 'Courier New', monospace;
            font-size: 1.2em;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
        `;
        
        overlay.appendChild(loadingText);
        this.gameContainer.appendChild(overlay);
        this.loadingOverlay = overlay;
        
        // Hide overlay when game loads
        if (this.gameFrame) {
            this.gameFrame.addEventListener('load', () => {
                setTimeout(() => {
                    if (this.loadingOverlay) {
                        this.loadingOverlay.style.opacity = '0';
                        setTimeout(() => {
                            if (this.loadingOverlay && this.loadingOverlay.parentNode) {
                                this.loadingOverlay.parentNode.removeChild(this.loadingOverlay);
                            }
                        }, 300);
                    }
                }, 1000); // Give game 1 second to initialize
            });
        }
    }
    
    bindEvents() {
        // Button click
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        
        // Fullscreen change events
        document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('webkitfullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('mozfullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('MSFullscreenChange', () => this.handleFullscreenChange());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isFullscreen()) {
                this.exitFullscreen();
            }
        });
    }
    
    toggleFullscreen() {
        if (this.isFullscreen()) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }
    
    enterFullscreen() {
        const element = this.gameContainer;
        
        // Try different fullscreen APIs
        if (element.requestFullscreen) {
            element.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
                this.fallbackFullscreen();
            });
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            this.fallbackFullscreen();
        }
        
        this.updateButtonText('✕ Exit Fullscreen', '✕ Salir Pantalla Completa');
    }
    
    fallbackFullscreen() {
        // Fallback for mobile browsers
        const element = this.gameContainer;
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.width = '100vw';
        element.style.height = '100vh';
        element.style.zIndex = '9999';
        element.style.background = '#000';
        element.style.borderRadius = '0';
        
        document.body.style.overflow = 'hidden';
        this.isFallbackMode = true;
    }
    
    exitFullscreen() {
        if (this.isFallbackMode) {
            // Exit fallback mode
            const element = this.gameContainer;
            element.style.position = '';
            element.style.top = '';
            element.style.left = '';
            element.style.width = '';
            element.style.height = '';
            element.style.zIndex = '';
            element.style.background = '';
            element.style.borderRadius = '';
            
            document.body.style.overflow = '';
            this.isFallbackMode = false;
        } else {
            // Exit normal fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        
        this.updateButtonText('⛶ Fullscreen', '⛶ Pantalla Completa');
    }
    
    isFullscreen() {
        return !!(
            document.fullscreenElement || 
            document.webkitFullscreenElement || 
            document.mozFullScreenElement || 
            document.msFullscreenElement ||
            this.isFallbackMode
        );
    }
    
    handleFullscreenChange() {
        if (!this.isFullscreen()) {
            this.updateButtonText('⛶ Fullscreen', '⛶ Pantalla Completa');
            this.isFallbackMode = false;
        }
    }
    
    updateButtonText(enText, esText) {
        if (this.fullscreenBtn) {
            this.fullscreenBtn.textContent = enText;
            this.fullscreenBtn.setAttribute('data-en', enText);
            this.fullscreenBtn.setAttribute('data-es', esText);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FullscreenManager();
});
