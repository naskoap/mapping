var map = L.map('canvas').setView([35.2011, -85.9214], 15);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 16,
    id: 'naskoap.p9081107',
    accessToken: 'pk.eyJ1IjoibmFza29hcCIsImEiOiJjaWw0aXdwcXkwNHhldTdseW44YjV0eGl5In0.vijDAZDiTmtYHaE_t_ft7w'
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