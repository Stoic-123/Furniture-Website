const searchContent = document.getElementById("search-header");
const icon = document.getElementById("search-icon-head");
const icon2 = document.getElementById("search-icon-bottom");
const cancelIcon = document.querySelector(".cancel_icon_header");
const body = document.body;
searchContent.style.marginTop = "-300px";
body.style.overflowY = "auto";
cancelIcon.addEventListener("click", () => {
    searchContent.style.marginTop = "-300px";
    searchContent.style.transition = "0.3s"
    body.style.overflowY = "auto";
});
icon.addEventListener("click", () => {
    searchContent.style.marginTop = "-45px";
    searchContent.style.transition = "0.3s"
    body.style.overflowY = "hidden";

});
icon2.addEventListener("click", () => {
    searchContent.style.marginTop = "-45px";
    searchContent.style.transition = "0.3s"
    body.style.overflowY = "hidden";

});
// Initialize the map
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 40.7128, lng: -74.006 }, // NYC coordinates as example
    });

    // Define store locations
    var locations = [
        {
            position: { lat: 40.7128, lng: -74.006 },
            title: "Downtown Showroom",
            info: "123 Main Street, Downtown, City 10001",
        },
        {
            position: { lat: 40.7328, lng: -74.036 },
            title: "Westside Gallery",
            info: "456 West Avenue, Westside, City 10002",
        },
        {
            position: { lat: 40.6928, lng: -73.986 },
            title: "Eastside Outlet",
            info: "789 East Boulevard, Eastside, City 10003",
        },
    ];

    // Add markers for each location
    locations.forEach((location) => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
        });

        // Info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<div><h5>៛{location.title}</h5><p>៛{location.info}</p></div>`,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

// Call the initMap function when the page loads
window.onload = initMap;
