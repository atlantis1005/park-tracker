mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmRyZWE5OCIsImEiOiJjbTkxejExNXIwNnZ3Mm5tdjZtNzBjbWt2In0.EuYSzdMKHrh1jKmD2fWyXA';

const mapOptions = {
    container: 'map-container', // container ID
    center: [-73.99432, 40.71103], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10.92, // starting zoom
    // bearing: 29,
    // style: 'mapbox://styles/mapbox/outdoors-v12'
    // hash: true
}

const parkTracker = new mapboxgl.Map(mapOptions);


const markerOptions = {
    color: '#57068C',
}