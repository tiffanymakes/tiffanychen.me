// Footer copyright with current year
const year = new Date().getFullYear();
document.querySelector('#copyright').innerHTML = `&copy; ${year} Tiffany Chen. All rights reserved.`;

// showMenu() shows menu when page is scrolled 20px from top
window.addEventListener('scroll', showMenu);
function showMenu() {
	document.querySelector('menu').style.display =
	document.documentElement.scrollTop > 20 ? 'block' : 'none';
}

// showNav() shows nav with translucent overlay underneath
document.querySelector('#nav-button').addEventListener('click', showNav);
function showNav() {
	document.querySelector('nav').classList.toggle('open-nav');
	document.querySelector('nav').classList.toggle('close-nav');
	document.querySelector('.overlay').style.display = 
	document.querySelector('nav').classList.contains('open-nav') ? 'block' : 'none';
	document.querySelector('#nav-button').classList = 
	document.querySelector('nav').classList.contains('open-nav') ? 'fa fa-times' : 'fa fa-bars';
}

// closeNav() closes nav and removes overlay when overlay is clicked
document.querySelector('.overlay').addEventListener('click', closeNav);
function closeNav() {
	document.querySelector('nav.open-nav').classList.remove('open-nav');
	document.querySelector('.overlay').style.display = 'none';
	document.querySelector('#nav-button').classList = 'fa fa-bars';
}

// closeAtTop() closes all nav and overlay when scrolled to the top
window.addEventListener('scroll', closeAtTop);
function closeAtTop() {
	if (document.documentElement.scrollTop < 20 && document.querySelector('nav').classList.contains('open-nav')) {
		closeNav();
	}
}

// toTop() scrolls page to top and closes nav when user clicks on scroll button
document.querySelector('#scroll-button').addEventListener('click', toTop);
document.querySelector('#scroll-button').addEventListener('click', closeNav);
function toTop() {
  window.scroll(0,0);
}

