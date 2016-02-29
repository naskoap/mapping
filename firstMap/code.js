var map = L.map('canvas').setView([35.72422, -86.60522], 5);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 16,
    id: 'naskoap.p9081107',
    accessToken: 'pk.eyJ1IjoibmFza29hcCIsImEiOiJjaWw0aXdwcXkwNHhldTdseW44YjV0eGl5In0.vijDAZDiTmtYHaE_t_ft7w'
}).addTo(map);
            /*var marker = L.marker([35.20509308, -85.92068195]).addTo(map);
            var circle = L.circle([35.20677623, -85.91647625], 100, {
               color: 'red',
               fillColor: '#f03',
               fillOpacity: 0.5
            }).addTo(map);
            var polygon = L.polygon([
                [35.20916062, -85.92196941],
                [35.20916062, -85.91948032],
                [35.20923088, -85.92042446]
            ]).addTo(map);
            marker.bindPopup("Welcome to <b>The University of the South</b>!").openPopup();               
            circle.bindPopup("This is <i>a circle</i>"); 
            polygon.bindPopup("This is a <u>poly</u>");
            var popup = L.popup();*/
            L.Routing.control({
                waypoints: [
                    L.latLng(35.20748, -85.90897),
                    L.latLng(36.14896, -86.78375)
                ]
            }).addTo(map);
            
            var mrkr = L.marker();
            
            function onMapClick(e) {
                mrkr
                    .setLatLng(e.latlng)
                    .bindPopup("You clicked at " + e.latlng.toString())
                    .addTo(map)
                    .openPopup();
            }
            
            map.on('click', onMapClick);