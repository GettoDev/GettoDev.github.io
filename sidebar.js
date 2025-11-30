// Horizontal Navigation Menu
const menuItems = [
  { name: 'Home', url: 'index.html' },
  { name: 'About Us', url: 'AboutUs.html' },
  { name: 'Guestbook', url: 'http://users3.smartgb.com/g/g.php?a=s&i=g36-37295-9b', external: true },
  {
    name: 'GAMES',
    dropdown: [
      { name: 'Run Cat Run', url: 'RunCatRun.html' },
      { name: 'Pies Frescos', url: 'PiesFrescos.html' },
      { name: 'Maidhen', url: 'Maidhen.html' }
    ]
  },
  {
    name: 'Mod',
    dropdown: [
      { name: 'UT99', url: 'UT99.html' }
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
      a.textContent = item.name + ' ▼';
      li.appendChild(a);

      const dropdownUl = document.createElement('ul');
      dropdownUl.className = 'dropdown-menu';

      item.dropdown.forEach(subItem => {
        const subLi = document.createElement('li');
        const subA = document.createElement('a');
        subA.href = basePath + subItem.url;
        subA.textContent = subItem.name;
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