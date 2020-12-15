const btn = document.getElementById('button');
const rainnbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainnbow[Math.floor(7 * Math.random())];
}

btn.addEventListener('click', change)