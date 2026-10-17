// SPA Navigation with Music Player
(function() {
    // Music Player Configuration
    const YOUTUBE_PLAYLIST_ID = 'PLQYjFRxXA9z_hnZmpsvYZ_J0V9FJuJ6r0';
    
    // Initialize YouTube Player
    let ytPlayer = null;
    let musicInitialized = false;

    function initMusicPlayer() {
        if (musicInitialized) return;
        
        // Create YouTube API script
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            document.head.appendChild(tag);
        }
        
        musicInitialized = true;
    }

    window.onYouTubeIframeAPIReady = function() {
        ytPlayer = new YT.Player('yt-player-container', {
            height: '0',
            width: '0',
            playerVars: {
                'listType': 'playlist',
                'list': YOUTUBE_PLAYLIST_ID,
                'autoplay': 0,
                'controls': 0,
                'origin': window.location.origin === "file://" ? "*" : window.location.origin
            }
        });
    };

    window.toggleMusic = function() {
        if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;
        
        const state = ytPlayer.getPlayerState();
        const statusLcd = document.getElementById('music-status');
        const playBtn = document.getElementById('music-play-btn');

        if (state === 1) {
            ytPlayer.pauseVideo();
            if (playBtn) playBtn.textContent = 'PLAY';
            if (statusLcd) {
                statusLcd.textContent = 'BGM: PAUSED';
                statusLcd.classList.remove('playing');
            }
        } else {
            ytPlayer.playVideo();
            if (playBtn) playBtn.textContent = 'PAUSE';
            if (statusLcd) {
                statusLcd.textContent = 'BGM: PLAYING';
                statusLcd.classList.add('playing');
            }
        }
    };

    window.prevTrack = function() {
        if (ytPlayer && typeof ytPlayer.previousVideo === 'function') {
            ytPlayer.previousVideo();
        }
    };

    window.nextTrack = function() {
        if (ytPlayer && typeof ytPlayer.nextVideo === 'function') {
            ytPlayer.nextVideo();
        }
    };

    // SPA Navigation
    function navigateTo(url, push = true) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(htmlString => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');
                
                const newMain = doc.querySelector('main');
                const newTitle = doc.title;
                
                if (newMain) {
                    document.querySelector('main').innerHTML = newMain.innerHTML;
                    document.title = newTitle;
                    
                    if (push) {
                        window.history.pushState({}, newTitle, url);
                    }
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                    
                    // Re-trigger language switcher if it exists
                    if (typeof updateContent === 'function') {
                        const currentLang = localStorage.getItem('language') || 'en';
                        updateContent(currentLang);
                    }
                    
                    // Handle email protection for About Us
                    const emailElement = document.getElementById('email-contact');
                    if (emailElement) {
                        const user = 'GettoDev';
                        const domain = 'proton.me';
                        emailElement.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
                    }
                } else {
                    window.location.href = url;
                }
            })
            .catch(error => {
                console.error('Error in SPA navigation:', error);
                window.location.href = url;
            });
    }

    // Intercept link clicks
    document.addEventListener('click', function(e) {
        const a = e.target.closest('a');
        if (!a) return;
        
        const href = a.getAttribute('href');
        
        // Ignore links that shouldn't be intercepted
        if (!href ||
            href.startsWith('#') ||
            a.target === '_blank' ||
            href.startsWith('mailto:') ||
            href.startsWith('http') && !href.includes(window.location.hostname)) {
            return;
        }

        e.preventDefault();
        navigateTo(href);
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        navigateTo(window.location.href, false);
    });

    // Initialize music player on page load
    document.addEventListener('DOMContentLoaded', function() {
        initMusicPlayer();
    });

    console.log('SPA Navigation with Music Player initialized');
})();
