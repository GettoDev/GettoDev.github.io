// Horizontal Navigation Menu
const menuItems = [
  { name: 'Home', url: 'index.html' },
  { name: 'About Us', url: 'About Us.html' },
  { name: 'Guestbook', url: 'http://users3.smartgb.com/g/g.php?a=s&i=g36-37295-9b', external: true },
  { name: 'Pies Frescos', url: 'Pies Frescos.html' },
  { name: 'Maidhen', url: 'Maidhen.html' }
];

function createHorizontalMenu() {
  let menuHTML = '<ul>';
  
  menuItems.forEach(item => {
    if (item.external) {
      menuHTML += `<li><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a></li>`;
    } else {
      menuHTML += `<li><a href="${item.url}">${item.name}</a></li>`;
    }
  });
  
  menuHTML += '</ul>';
  return menuHTML;
}

document.getElementById("sidebar").innerHTML = createHorizontalMenu();