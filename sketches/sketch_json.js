var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var mundial = 0;
   var local = 0;
   for (var a = 0; a < data.features.length; a++) {
      mundial++;
      if (data.features[a].properties.place.includes("Chile")) {
         local++;
      }
   }
   textSize(20);
   text("En todo el mundo, han habido " + mundial + " temblores sobre la magnitud de 4.5 en última semana.", width / 2, 150);
   text("Solamente en Chile, han habido " + local + " temblores sobre la misma magnitud durante el mismo plazo.", width / 2, 200);
   var promedio = round((local * 100) / mundial);
   textSize(30);
   text("Chile ha concentrado el " + promedio + "% de los temblores del mundo.", width / 2, 270);
}

function draw() {
   background(237, 34, 93);
   fill(255);
   textAlign(CENTER);
}
