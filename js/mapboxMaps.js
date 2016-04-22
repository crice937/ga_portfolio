
L.mapbox.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

function randMap () {

	var genRand = Math.random();

	if (genRand <= .1) {
		$(".jumbotronBg").css("background-color", "#90A4AE");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.streets';
	}
	if (genRand <= .2 && genRand > .1) {
		$(".jumbotronBg").css("background-color", "#90A4AE");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.pencil';
	}
	if (genRand <= .3 && genRand > .2) {
		return 'mapbox.dark';
	}
	if (genRand <= .4 && genRand > .3) {
		$(".jumbotronBg").css("background-color", "#90A4AE");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.emerald';
	}
	if (genRand <= .5 && genRand > .4) {
		$(".jumbotronBg").css("background-color", "#90A4AE");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.light';
	}
	if (genRand <= .6 && genRand > .5) {
		return 'mapbox.pirates';
	}
	if (genRand <= .7 && genRand > .6) {
		$(".jumbotronBg").css("background-color", "#90A4AE");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.wheatpaste';
	}
	if (genRand <= .8 && genRand > .7) {
		$(".jumbotronBg").css("background-color", "#90A4AE");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.comic';
	}
	else
		return 'mapbox.satellite';
}

var headMap = L.mapbox.map('mapHeader', randMap(), {
	zoomControl: false
}).setView([41.0252, 28.9950], 11);

	//disable scroll wheel
	headMap.scrollWheelZoom.disable();