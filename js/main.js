window.onload = function(){
		tumblerActivityByScroll("topbutton", "active");
}

	function tumblerActivityByScroll(toggledIdName, toggledClassName) {
		window.onscroll = function () {
			if ( window.pageYOffset > 0 ) {
				document.getElementById(toggledIdName).classList.add(toggledClassName);
			}
			else {
				document.getElementById(toggledIdName).classList.remove(toggledClassName);
			}
		}
	}
