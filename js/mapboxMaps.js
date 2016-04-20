
L.mapbox.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

function randMap () {

	var genRand = Math.random();

	if (genRand <= .2) {
		$(".jumbotronBg").css("background-color", "#DCEDC8");
		$(".info").css("color", "#263238");
		$(".shadow").css("textShadow", "0px 0px 1px #FFF");
		return 'mapbox.streets';
	}
	if (genRand <= .4 && genRand > .2) {
		return 'mapbox.light';
	}
	if (genRand <= .6 && genRand > .4) {
		return 'mapbox.dark';
	}
	if (genRand <= .8 && genRand > .6) {
		return 'mapbox.emerald';
	}
	else
		return 'mapbox.satellite';
}

var headMap = L.mapbox.map('mapHeader', randMap(), {
	zoomControl: false
}).setView([41.0252, 28.9950], 11);

	//disable scroll wheel
	headMap.scrollWheelZoom.disable();