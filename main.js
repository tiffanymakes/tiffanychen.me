// Footer year
const year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year;

// Menu toggle in mobile
document.querySelector('#nav-button').addEventListener('click', navButton);
function navButton() {
	document.querySelector('#nav').classList.toggle('open-nav');
	document.querySelector('#nav').classList.toggle('close-nav');
}

// Show scroll button when page is scrolled 20px from top
window.addEventListener('scroll', scrollButton);
function scrollButton() {
	document.querySelector('#scroll-button').style.display =
	document.documentElement.scrollTop > 20 ? 'block' : 'none';
}

// Scroll to top when user clicks on scroll button
document.querySelector('#scroll-button').addEventListener('click', toTop);
function toTop() {
  window.scroll(0,0);
}