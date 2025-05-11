function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 11.588529068533207, lng: 104.93017511340756 }, 
        zoom: 12,
    });
}

window.onload = initMap;