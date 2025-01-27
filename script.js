// rahim/myapp/static/js/script.js
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn-primary");
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });

    // تغییر رنگ پس‌زمینه
    const changeColorButton = document.createElement("button");
    changeColorButton.textContent = "تغییر رنگ پس‌زمینه";
    changeColorButton.classList.add("btn", "btn-secondary", "mt-3", "btn-block");
    document.querySelector(".jumbotron").appendChild(changeColorButton);

    changeColorButton.addEventListener("click", function() {
        document.body.style.backgroundColor = "#e1f5fe";
    });
});
