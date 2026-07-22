/* 
 _____ _   _ _   _    _    _   _  ____ _____ ____  
| ____| \ | | | | |  / \  | \ | |/ ___| ____|  _ \ 
|  _| |  \| | |_| | / _ \ |  \| | |   |  _| | | | |
| |___| |\  |  _  |/ ___ \| |\  | |___| |___| |_| |
|_____|_| \_|_| |_/_/   \_\_| \_|\____|_____|____/ 
                                                
    POWERED BY GETTODEV SINCE 1998
    Cyberpunk Gaming Studio - Retro Indie Games
*/

// Horizontal Navigation Menu
const menuItems = [
  { name: 'Home', url: 'index.html', 'data-en': 'Home', 'data-es': 'Inicio' },
  { name: 'About Us', url: 'AboutUs.html', 'data-en': 'About Us', 'data-es': 'Acerca de' },
  { name: 'Guestbook', url: 'guestbook.html', 'data-en': 'Guestbook', 'data-es': 'Libro de Visitas' },
  {
    name: 'Legacy Games',
    'data-en': 'Legacy Games',
    'data-es': 'Juegos Legacy',
    dropdown: [
      { name: 'Maidhen', url: 'Maidhen.html' },
      { name: 'Pies Frescos', url: 'PiesFrescos.html' }
    ]
  },
  {
    name: 'Emulators',
    'data-en': 'Emulators',
    'data-es': 'Emuladores',
    dropdown: [
      { name: 'VirCon32', url: 'vircon32web/VirCon32Web.html' }
    ]
  },
  {
    name: 'Mod',
    'data-en': 'Mod',
    'data-es': 'Mod',
    dropdown: [
      { name: 'UT99', url: 'UT99.html' }
    ]
  },
  { name: 'Contact', url: 'contact.html', 'data-en': 'Contact', 'data-es': 'Contacto' },
  {
    name: 'Language',
    'data-en': 'Language',
    'data-es': 'Idioma',
    dropdown: [
      { name: 'English', url: '#', lang: 'en' },
      { name: 'Español', url: '#', lang: 'es' }
    ]
  }
];

// Detect if we're in a subdirectory and adjust paths accordingly
function getBasePath() {
  const path = window.location.pathname;
  const pathParts = path.split('/');

  // Remove empty strings from path parts
  const cleanPathParts = pathParts.filter(part => part !== '');

  // Get the last directory name if we're in a subdirectory
  const lastPart = cleanPathParts[cleanPathParts.length - 1];

  // Check if we're in a subdirectory (not the root)
  const isInSubdirectory = cleanPathParts.length > 1 && lastPart.includes('.html') === false;

  // Known subdirectories that need '../' prefix
  const subdirs = ['bubblenoid', 'gomafalda', 'neondirective', 'runsnowballrun', 'superrobotx', 'brumbrumcarrera', 'Maidhen', 'PiesFrescos', 'vircon32web'];

  // If we're in a known subdirectory, prepend '../' to relative URLs
  if (isInSubdirectory && subdirs.includes(lastPart)) {
    return '../';
  }
  return '';
}

function createHorizontalMenu() {
  const basePath = getBasePath();
  console.log('BasePath:', basePath);

  const ul = document.createElement('ul');

  menuItems.forEach(item => {
    const li = document.createElement('li');

    if (item.external) {
      const a = document.createElement('a');
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = item.name;
      li.appendChild(a);
    } else if (item.dropdown) {
      // Create dropdown menu
      li.className = 'dropdown';
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'dropdown-toggle';
      a.textContent = item.name;

      // Add language attributes if available
      if (item['data-en'] && item['data-es']) {
        a.setAttribute('data-en', item['data-en']);
        a.setAttribute('data-es', item['data-es']);
      }

      li.appendChild(a);

      const dropdownUl = document.createElement('ul');
      dropdownUl.className = 'dropdown-menu';

      item.dropdown.forEach(subItem => {
        const subLi = document.createElement('li');
        const subA = document.createElement('a');

        if (subItem.lang) {
          subA.href = '#';
          subA.onclick = function (e) {
            e.preventDefault();
            if (typeof setLanguage === 'function') {
              setLanguage(subItem.lang);
            }
          };
        } else {
          subA.href = basePath + subItem.url;
        }

        subA.textContent = subItem.name;

        // Add language attributes if available
        if (subItem['data-en'] && subItem['data-es']) {
          subA.setAttribute('data-en', subItem['data-en']);
          subA.setAttribute('data-es', subItem['data-es']);
        }

        console.log('Dropdown item:', subItem.name, 'URL:', subA.href);
        subLi.appendChild(subA);
        dropdownUl.appendChild(subLi);
      });

      li.appendChild(dropdownUl);
    } else {
      // Regular menu item
      const a = document.createElement('a');
      a.href = basePath + item.url;
      a.textContent = item.name;

      // Add language attributes if available
      if (item['data-en'] && item['data-es']) {
        a.setAttribute('data-en', item['data-en']);
        a.setAttribute('data-es', item['data-es']);
      }

      li.appendChild(a);
    }

    ul.appendChild(li);
  });

  return ul;
}

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = ''; // Clear any existing content
sidebar.style.position = 'relative';

// --- HAMBURGER BUTTON (mobile only) ---
const hamburgerBtn = document.createElement('button');
hamburgerBtn.id = 'hamburger-btn';
hamburgerBtn.innerHTML = 'MENU <span id="hamburger-icon">☰</span>';
sidebar.appendChild(hamburgerBtn);

// Wrapper div that can be shown/hidden on mobile
const navLinksWrapper = document.createElement('div');
navLinksWrapper.id = 'nav-links-wrapper';
navLinksWrapper.appendChild(createHorizontalMenu());
sidebar.appendChild(navLinksWrapper);

hamburgerBtn.addEventListener('click', function () {
  navLinksWrapper.classList.toggle('open');
  const isOpen = navLinksWrapper.classList.contains('open');
  document.getElementById('hamburger-icon').textContent = isOpen ? '✕' : '☰';
  navLinksWrapper.style.display = isOpen ? 'block' : 'none';
});

// On desktop, always show the nav links
function handleResize() {
  if (window.innerWidth > 768) {
    navLinksWrapper.style.display = 'flex';
    hamburgerBtn.style.display = 'none';
  } else {
    navLinksWrapper.style.display = navLinksWrapper.classList.contains('open') ? 'block' : 'none';
    hamburgerBtn.style.display = 'flex';
  }
}
handleResize();
window.addEventListener('resize', handleResize);

// --- MUSIC PLAYER INTEGRATION ---
const musicBar = document.createElement('div');
musicBar.id = 'music-bar';
musicBar.innerHTML = `
    <div id="yt-player-container" style="display:none;"></div>
    <div class="controls">
        <span class="status-lcd" id="music-status">BGM: OFF</span>
        <button onclick="if(window.ytPlayer && typeof window.ytPlayer.previousVideo === 'function') window.ytPlayer.previousVideo()">PREV</button>
        <button onclick="toggleGlobalPlay()" id="playBtn">PLAY</button>
        <button onclick="if(window.ytPlayer && typeof window.ytPlayer.nextVideo === 'function') window.ytPlayer.nextVideo()">NEXT</button>
    </div>
`;
sidebar.insertBefore(musicBar, sidebar.firstChild);

window.onYouTubeIframeAPIReady = function () {
  window.ytPlayer = new YT.Player('yt-player-container', {
    height: '0',
    width: '0',
    playerVars: {
      'listType': 'playlist',
      'list': 'PLQYjFRxXA9z_hnZmpsvYZ_J0V9FJuJ6r0',
      'autoplay': 0,
      'controls': 0,
      'origin': window.location.origin === "file://" ? "*" : window.location.origin
    }
  });
};

window.toggleGlobalPlay = function () {
  if (!window.ytPlayer || typeof window.ytPlayer.getPlayerState !== 'function') return;
  var state = window.ytPlayer.getPlayerState();
  const statusLcd = document.getElementById('music-status');
  const playBtn = document.getElementById('playBtn');

  // 1 = playing, 2 = paused, -1 = unstarted, 0 = ended, 3 = buffering
  if (state == 1) {
    window.ytPlayer.pauseVideo();
    playBtn.innerText = 'PLAY';
    statusLcd.innerText = 'BGM: PAUSED';
    statusLcd.classList.remove('playing');
  } else {
    window.ytPlayer.playVideo();
    playBtn.innerText = 'PAUSE';
    statusLcd.innerText = 'BGM: PLAYING';
    statusLcd.classList.add('playing');
  }
};

if (!document.getElementById('yt-api-script')) {
  const tag = document.createElement('script');
  tag.id = 'yt-api-script';
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  if (firstScriptTag) {
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    document.head.appendChild(tag);
  }
}
// ---------------------------------

console.log('Menu created successfully');

// Add dropdown toggle functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  if (toggle && menu) {
    // Show dropdown on hover
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) menu.style.display = 'block';
    });

    // Hide dropdown on mouse leave
    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) menu.style.display = 'none';
    });

    // Toggle dropdown on click (for mobile)
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  }
});

// Force hide all dropdown menus on page load
document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.style.display = 'none';
});

// --- SPA NAVIGATION ---
document.addEventListener('click', function(e) {
  const a = e.target.closest('a');
  if (!a) return;
  
  const href = a.getAttribute('href');
  
  // Ignore links that shouldn't be intercepted
  if (!href || 
      href.startsWith('#') || 
      a.target === '_blank' ||
      href.startsWith('mailto:')) {
    return;
  }

  // Cross-origin check
  if (a.hostname && a.hostname !== window.location.hostname && window.location.protocol !== 'file:') {
    return;
  }

  e.preventDefault();
  navigateTo(a.href);
});

window.addEventListener('popstate', function(e) {
  navigateTo(window.location.href, false);
});

async function navigateTo(url, push = true) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const htmlString = await response.text();
    
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
      
      // Re-trigger language switcher if it exists globally
      if (typeof updateContent === 'function') {
         const currentLang = localStorage.getItem('language') || 'en';
         updateContent(currentLang);
      }

      // Handle email protection script specific to About Us
      const emailElement = document.getElementById('email-contact');
      if (emailElement) {
          const user = 'GettoDev';
          const domain = 'proton.me';
          emailElement.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
      }
      
      window.scrollTo(0, 0);
    } else {
      window.location.href = url;
    }
  } catch (error) {
    console.error('Error in SPA navigation:', error);
    window.location.href = url; // Fallback for local file:// testing
  }
}