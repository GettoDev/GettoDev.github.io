// Fullscreen API Utility
class FullscreenManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.gameContainer = document.querySelector('.game-container');
        
        if (this.fullscreenBtn && this.gameContainer) {
            this.bindEvents();
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
        
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        
        this.updateButtonText('✕ Exit Fullscreen', '✕ Salir Pantalla Completa');
    }
    
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        this.updateButtonText('⛶ Fullscreen', '⛶ Pantalla Completa');
    }
    
    isFullscreen() {
        return !!(
            document.fullscreenElement || 
            document.webkitFullscreenElement || 
            document.mozFullScreenElement || 
            document.msFullscreenElement
        );
    }
    
    handleFullscreenChange() {
        if (!this.isFullscreen()) {
            this.updateButtonText('⛶ Fullscreen', '⛶ Pantalla Completa');
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
