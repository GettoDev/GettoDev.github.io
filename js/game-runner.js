// Game Runner Engine for play.html
window.initGameRunner = async function() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('id') || params.get('game');

    const titleElem = document.getElementById('gameTitleHeading');
    const iframeElem = document.getElementById('gameFrame');
    const controlsContainer = document.getElementById('controlsContent');
    const pageTitle = document.querySelector('title');

    if (!gameId) {
        showError("No game specified / No se especificó ningún juego.");
        return;
    }

    let games = [];
    if (window.GAMES_DATA && Array.isArray(window.GAMES_DATA)) {
        games = window.GAMES_DATA;
    } else {
        try {
            const response = await fetch('data/games.json');
            if (!response.ok) throw new Error('Network error');
            games = await response.json();
        } catch (e) {
            console.warn("Could not fetch data/games.json via HTTP:", e);
        }
    }

    const game = games.find(g => g.id.toLowerCase() === gameId.toLowerCase());

    if (!game) {
        showError(`Game "${gameId}" not found / Juego no encontrado.`);
        return;
    }

    // Set page title and metadata
    const currentLang = localStorage.getItem('language') || 'en';
    const localizedTitle = `${game.title} | GettoDev`;
    document.title = localizedTitle;
    if (pageTitle) {
        pageTitle.setAttribute('data-en', `${game.title} | GettoDev`);
        pageTitle.setAttribute('data-es', `${game.title} | GettoDev`);
        pageTitle.textContent = localizedTitle;
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('data-en', game.descEn);
        metaDesc.setAttribute('data-es', game.descEs);
        metaDesc.setAttribute('content', currentLang === 'es' ? game.descEs : game.descEn);
    }

    // Update Open Graph and Twitter
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${game.title} | GettoDev`);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentLang === 'es' ? game.descEs : game.descEn);
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', `https://gettodev.github.io/${game.thumbnail}`);

    // Update heading if exists
    if (titleElem) {
        titleElem.textContent = game.title;
    }

    // Render controls
    if (controlsContainer && game.controls) {
        controlsContainer.innerHTML = '';
        game.controls.forEach(ctrl => {
            const item = document.createElement('div');
            item.className = 'control-item';
            
            const keySpan = document.createElement('span');
            keySpan.className = 'control-key';
            keySpan.textContent = ctrl.key;

            const descSpan = document.createElement('span');
            descSpan.className = 'control-desc';
            descSpan.setAttribute('data-en', ctrl.descEn);
            descSpan.setAttribute('data-es', ctrl.descEs);
            descSpan.textContent = currentLang === 'es' ? ctrl.descEs : ctrl.descEn;

            item.appendChild(keySpan);
            item.appendChild(descSpan);
            controlsContainer.appendChild(item);
        });
    }

    // Set iframe src immediately
    if (iframeElem) {
        if (iframeElem.src !== game.iframe && !iframeElem.src.endsWith(game.iframe)) {
            iframeElem.src = game.iframe;
        }
        iframeElem.title = `${game.title} Game`;
    }

    // Apply language preferences if setLanguage function exists
    if (typeof setLanguage === 'function') {
        setLanguage(currentLang);
    }

    function showError(msg) {
        if (titleElem) titleElem.textContent = "Error";
        const wrapper = document.querySelector('.game-wrapper');
        if (wrapper) {
            wrapper.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #ff0055; font-family: monospace;">
                    <h2>SYSTEM ERROR: 404</h2>
                    <p style="margin: 20px 0; color: #fff;">${msg}</p>
                    <a href="index.html" class="back-button">← Return to Games / Volver al catálogo</a>
                </div>
            `;
        }
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initGameRunner);
} else {
    window.initGameRunner();
}
