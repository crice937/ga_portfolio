
L.mapbox.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

var map = L.mapbox.map('mapHeader', 'mapbox.streets', {
  zoomControl: false
}).setView([41.0252, 28.9950], 11);

map.scrollWheelZoom.disable();
