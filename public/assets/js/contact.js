
window.onload = initMap;
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

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 11.588529068533207, lng: 104.93017511340756 },
        zoom: 12,
    });
}
