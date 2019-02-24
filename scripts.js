window.onload = function () {

    var mymap = L.map('mapid').setView([25.032, 121.565], 13);
    var radius = 100;
    var radiusSelected = 150;

    
    

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg'
    }).addTo(mymap);

    L.control().setPosition(topright);

    // L.tileLayer('https://api.mapbox.com/styles/v1/donatuswolf/cjshijl1c13o41empmevvh85j.html?fresh=true&title=true&access_token=pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg#11.8/25.032714/121.562531/0').addTo(mymap);

    // mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg';
    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/donatuswolf/cjshijl1c13o41empmevvh85j',
    //     center: [121.562531, 25.032714],
    //     zoom: 11.8
    // });

    var birds = L.circle([25.032, 121.565], {
        color: 'red',
        // fillColor: '#f03',
        fillOpacity: 1,
        radius: radius
    }).addTo(mymap);

    birds.on('mouseover', function(){
        // this.setStyle({ color: 'blue' });
        playSound(birds,'birds', 0.5);
        this.setRadius(radiusSelected)
    });

    

 function playSound(name, fileName, volume) {
    var audio = new Audio('assets/sounds/' + fileName + '.mp3');
    audio.volume = volume;
    audio.loop = true;
    audio.play();

    name.on('mouseout', function(){
        audio.pause();
        name.setRadius(radius)
    });
  }


}