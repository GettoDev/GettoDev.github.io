// Global language switching script
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Update all elements with data-en and data-es attributes
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        const newContent = element.getAttribute('data-' + lang);
        console.log('Changing content from', element.textContent, 'to', newContent);
        
        // Handle HTML content properly
        if (newContent.includes('<a')) {
            element.innerHTML = newContent;
        } else {
            element.textContent = newContent;
        }
    });
    
    // Update meta tags
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        if (element.tagName === 'META') {
            const newContent = element.getAttribute('data-' + lang);
            if (newContent) {
                element.setAttribute('content', newContent);
            }
        }
    });
    
    // Update page title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = titleElement.getAttribute('data-' + lang);
    }
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'en';
    console.log('Loading saved language:', savedLang);
    setLanguage(savedLang);
});
