// Horizontal Navigation Menu
const menuItems = [
  { name: 'Home', url: 'index.html' },
  { name: 'About Us', url: 'AboutUs.html' },
  { name: 'Guestbook', url: 'http://users3.smartgb.com/g/g.php?a=s&i=g36-37295-9b', external: true },
  { 
    name: 'GAMES', 
    dropdown: [
      { name: 'Pies Frescos', url: 'PiesFrescos.html' },
      { name: 'Maidhen', url: 'Maidhen.html' }
    ]
  },
  { 
    name: 'RetroReviews', 
    dropdown: [
      { name: 'Coming Soon', url: 'RetroReviews.html' }
    ]
  }
];

// Detect if we're in a subdirectory and adjust paths accordingly
function getBasePath() {
  const path = window.location.pathname;
  const pathParts = path.split('/');
  const fileName = pathParts[pathParts.length - 1];
  
  // If we're in a subdirectory (not root), prepend '../' to relative URLs
  // Check if there's a directory before the filename (e.g., /runcatrun/index.html)
  if (pathParts.length > 2 && pathParts[pathParts.length - 2] !== '') {
    return '../';
  }
  return '';
}

function createHorizontalMenu() {
  const basePath = getBasePath();
  let menuHTML = '<ul>';
  
  menuItems.forEach(item => {
    if (item.external) {
      menuHTML += `<li><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a></li>`;
    } else if (item.dropdown) {
      // Create dropdown menu
      menuHTML += `<li class="dropdown"><a href="#" class="dropdown-toggle">${item.name} ▼</a><ul class="dropdown-menu">`;
      item.dropdown.forEach(subItem => {
        const url = basePath + subItem.url;
        menuHTML += `<li><a href="${url}">${subItem.name}</a></li>`;
      });
      menuHTML += '</ul></li>';
    } else {
      // Regular menu item
      const url = basePath + item.url;
      menuHTML += `<li><a href="${url}">${item.name}</a></li>`;
    }
  });
  
  menuHTML += '</ul>';
  return menuHTML;
}

document.getElementById("sidebar").innerHTML = createHorizontalMenu();