const sections = [
  {
    title: ' ',
    links: ['About Us', 'Guestbook']
  },
  {
    title: 'Game Lab',
    links: ['Pies Frescos', 'UnderConstruction', 'UnderConstruction']
  },
  {
    title: 'Modding',
    links: ['UnderConstruction', 'UnderConstruction']
  },
];

function createSectionHTML(section) {
  let html = `<h3>${section.title}</h3>`;
  section.links.forEach(link => {
    if (link === 'Guestbook') {
      // Use external URL for Guestbook
      html += `<p><a href="http://users3.smartgb.com/g/g.php?a=s&i=g36-37295-9b">Guestbook</a></p>`;
    } else {
      // Use internal links for other sections
      html += `<p><a href="${link}.html">${link}</a></p>`;
    }
  });
  return html;
}

let sidebarContent = `
  <a href="index.html"><h3>Home</h3></a>
`;

sections.forEach(section => {
  sidebarContent += createSectionHTML(section);
});

document.getElementById("sidebar").innerHTML = sidebarContent;