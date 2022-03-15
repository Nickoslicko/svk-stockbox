<body>

<h1>Google Maps integration</h1>

<div id="googleMap" style="width:100%;height:400px;"></div>

<script>
let map;
const chicago = { lat: 51.508742, lng: -0.120850 };
function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Center Map";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter(chicago);
    map.setZoom(-2);
  });
}
function myMap() {
const myCenter = { lat: 51.508742, lng: -0.120850 }
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  const centerControlDiv = document.createElement("div");
  

  CenterControl(centerControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
// Listen for clicks and add the location of the click to firebase.
map.addListener('click', function(e) {
  var marker = new google.maps.Marker({
    position:{ lat: e.latLng.lat(), lng: e.latLng.lng() },
    //animation:google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
    content:"Doesn't Tip!"
  });
  marker.addListener("click", () => {
  map.setZoom(9);
  map.setCenter(marker.getPosition());  
  infowindow.open({
      anchor: marker,
      map,
    });
});
});




var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapOptions1);
var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapOptions2);
var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapOptions3);
var map4 = new google.maps.Map(document.getElementById("googleMap4"), mapOptions4);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtsk3SrstZczQe279P1c0693SRlHAuLR8&callback=myMap"></script>

</body>