
// Footer year
const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

// Menu toggle in mobile
document.querySelector('#nav-icon').addEventListener('click', menuToggle);
function menuToggle() {
	document.getElementById('nav').classList.toggle('open-nav');
    document.getElementById('nav').classList.toggle('close-nav');
}

