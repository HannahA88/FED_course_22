// .addEventListener

function border(element){
  element.style.border ='3px solid'; 
  element.style.borderColor = '#f70687';
  }
  function unborder(element){
    element.style.border ='none'; 
    }

// Slider

$(document).ready(function(){
$('.slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
});

//   MAP
function initMap() {
    const uluru = {  lat: 50.06492166757213, lng: 14.410009097909938 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  window.initMap = initMap;

