// innerText = 눈에 보이는, textContext = display:none해도 보임

const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}