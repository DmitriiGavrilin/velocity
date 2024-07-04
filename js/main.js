// Tabs

const tabButtons = document.querySelectorAll(".tabs__button");
const tabs = document.querySelectorAll(".tabs__item");

function hideTab() {
    tabs.forEach(tab => tab.classList.add("hide"));
    tabButtons.forEach(button => button.classList.remove("active"));
}
hideTab();

function showTab(index) {
    tabs[index].classList.remove("hide");
    tabButtons[index].classList.add("active");
}
showTab(0);

tabButtons.forEach((button, index) => button.addEventListener("click", () => {
    hideTab();
    showTab(index);
}));


// Smooth Scroll

const links = document.querySelectorAll(".nav-link a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = link.getAttribute("href");
        const element = document.querySelector(id);
        window.scroll({
            top: element.offsetTop,
            behavior: "smooth"
        });
    });
});