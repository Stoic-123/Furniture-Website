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
