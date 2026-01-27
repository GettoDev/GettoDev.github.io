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
  { name: 'Guestbook', url: 'http://users3.smartgb.com/g/g.php?a=s&i=g36-37295-9b', external: true, 'data-en': 'Guestbook', 'data-es': 'Libro de Visitas' },
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

  // Get the directory name (second to last part)
  const dirName = pathParts[pathParts.length - 2];

  // Known subdirectories that need '../' prefix
  const subdirs = ['runcatrun', 'selene', '_private'];

  // If we're in a known subdirectory, prepend '../' to relative URLs
  if (subdirs.includes(dirName)) {
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
          subA.href = subItem.url;
          subA.onclick = function(e) {
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
sidebar.appendChild(createHorizontalMenu());
console.log('Menu created successfully');

// Force hide all dropdown menus on page load
document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.style.display = 'none';
});