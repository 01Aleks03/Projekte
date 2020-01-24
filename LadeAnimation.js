'use strict';
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#interaktiv').addEventListener('click', animiere);

	function animiere() {
		var ladebalken = document.getElementById('ladebalken');
		ladebalken.animate(
      [
		{
					width: '1em',
					background: 'red'
		}, 
		{
					width: '115em',
					background: 'yellow'
		},
		{
					width: '60em',
					background: 'orange'
		},
		{
					width: '120em',
					background: 'pink'
		}
      ], {
				duration: 4000,
				iterations: 1,
				fill: 'forwards'
			});
	}
});