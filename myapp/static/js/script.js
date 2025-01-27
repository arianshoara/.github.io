// rahim/myapp/static/js/script.js

document.addEventListener("DOMContentLoaded", function() {
    // تغییر متن با کلیک روی دکمه
    const button = document.querySelector(".btn-primary");
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });

    // تغییر رنگ پس زمینه با کلیک روی دکمه
    const changeColorButton = document.createElement("button");
    changeColorButton.textContent = "Change Background Color";
    changeColorButton.classList.add("btn", "btn-secondary", "mt-3");
    document.querySelector(".jumbotron").appendChild(changeColorButton);

    changeColorButton.addEventListener("click", function() {
        document.body.style.backgroundColor = "lightblue";
    });
});