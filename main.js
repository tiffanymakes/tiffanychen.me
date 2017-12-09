
const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

function menuToggle() {
	document.getElementById('nav').classList.toggle('open-nav');
    document.getElementById('nav').classList.toggle('close-nav');
}
document.querySelector('#nav-icon').addEventListener('click', menuToggle);



/* References:
** https://codepen.io/geertjanhendriks/pen/yitop
https://codepen.io/bradfrost/pen/sHvaz
https://codepen.io/davidcochran/pen/MYxyvz
https://codepen.io/hanlinC/pen/dJwil
*/