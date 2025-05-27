const listSelect = document.querySelectorAll(".item-select-main");
const childListWrapper = document.querySelectorAll(".small-selct-pro-wrapper");
const iconSelect = document.querySelectorAll(".select-icon-faq")

listSelect.forEach((list, index) => {
    list.addEventListener("click", () => {
        const wrapper = childListWrapper[index];
        wrapper.classList.toggle("active");
        const iconSelectChange = iconSelect[index];
        iconSelectChange.classList.toggle("active")
    });
});

function showTabShopList(tabId, event) {
    document.querySelectorAll('.tab-shop-content').forEach(el => {
        el.classList.remove('active');
    });

    document.querySelectorAll('.tab-shop-button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    event.currentTarget.classList.add('active');
}
window.onload = () => {
    const searchContent = document.getElementById("search-header");
    const icon = document.getElementById("search-icon-head");
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
};