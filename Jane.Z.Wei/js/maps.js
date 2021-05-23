
const makeMap = async (target,center={lat: 37.735078,lng: -122.436844}) => {
   await checkData(()=>window.google);

   let map_el = $(target);

   // map = map_el.data("map");

   if(!map_el.data("map")) map_el.data({
      "map": new google.maps.Map(
         map_el[0],
         {
            center: center,
            zoom: 12,
            disableDefaultUI: true,
            styles:mapStyles
         }
      ),
      "infoWindow": new google.maps.InfoWindow({content:''})
   });

   return map_el;
}

const makeMarkers = (map_el,map_locs) => {
   let map = map_el.data("map");
   let markers = map_el.data("markers");

   if(markers) markers.forEach(o=>o.setMap(null));

   markers = [];

   map_locs.forEach(o=>{
      let m = new google.maps.Marker({
         position: o,
         map: map,
         icon: {
            url: o.icon,
            scaledSize: {
               width:40,
               height:40
            }
         }
      });
      markers.push(m);
   });

   map_el.data("markers",markers);
   setTimeout(()=>{setMapBounds(map_el,map_locs)},150);
}


const setMapBounds = (map_el,map_locs) => {
   let map = map_el.data("map");
   let zoom = 14;

   if(map_locs.length==1) {
      map.setCenter(map_locs[0]);
      map.setZoom(zoom);
   } else if(map_locs.length==0) {
      if(window.location.protocol!=="https:") return;
      else {
         navigator.geolocation.getCurrentPosition(p=>{
            let pos = {
               lat:p.coords.latitude,
               lng:p.coords.lngitude
            };
            map.setCenter(pos);
            map.setZoom(zoom);
         },(...args)=>{
            console.log(args)
         },{
            enableHighAccuracy:false,
            timeout:5000,
            maximumAge:0
         })
      }
   } else {
      let bounds = new google.maps.LatLngBounds(null);
      map_locs.forEach(o=>{
         bounds.extend(o);
      });
      map.fitBounds(bounds);
   }
}






let mapStyles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-43"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-70"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-17"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-66"
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "lightness": "-63"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "43"
            },
            {
                "color": "#419d8c"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-69"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-51"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-54"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#419d8c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-23"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-66"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-62"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-70"
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-60"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-54"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-59"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-61"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-45"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-62"
            }
        ]
    }
];