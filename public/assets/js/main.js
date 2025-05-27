window.onload = () => {
    const searchContent = document.getElementById("search-header");
    const icon = document.getElementById("search-icon-head");
    const cancelIcon = document.querySelector(".cancel_icon_header");
    const body = document.body;
    searchContent.style.marginTop = "-200px";
    body.style.overflowY = "auto";
    cancelIcon.addEventListener("click", () => {
        searchContent.style.marginTop = "-200px";
        searchContent.style.transition = "0.3s"
        body.style.overflowY = "auto";
    });
    icon.addEventListener("click", () => {
        searchContent.style.marginTop = "0px";
        searchContent.style.transition = "0.3s"
        body.style.overflowY = "hidden";

    });
};