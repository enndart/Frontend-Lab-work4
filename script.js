document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================
    // Завдання 1: Зміна кольорів при кліку
    // (92 mod 10) + 1 = 3-й елемент
    // ==========================================================

    const targetElement = document.getElementById("target-element");
    let clickCount1 = 0;

    if (targetElement) {
        targetElement.addEventListener("click", () => {
            clickCount1++;
            if (clickCount1 % 2 === 1) {
                targetElement.classList.add("active-style-1");
                targetElement.classList.remove("alt-style-1");
            } else {
                targetElement.classList.remove("active-style-1");
                targetElement.classList.add("alt-style-1");
            }
        });
    }

    const nextTarget = document.querySelector(".next-target");
    let clickCount2 = 0;

    if (nextTarget) {
        nextTarget.addEventListener("click", () => {
            clickCount2++;
            if (clickCount2 % 2 === 1) {
                nextTarget.classList.add("active-style-2");
                nextTarget.classList.remove("alt-style-2");
            } else {
                nextTarget.classList.remove("active-style-2");
                nextTarget.classList.add("alt-style-2");
            }
        });
    }

    // ==========================================================
    // Завдання 2: Керування зображенням
    // ==========================================================

    const imgContainer = document.getElementById("image-container");
    const btnAdd = document.getElementById("btn-add");
    const btnZoomIn = document.getElementById("btn-zoom-in");
    const btnZoomOut = document.getElementById("btn-zoom-out");
    const btnRemove = document.getElementById("btn-remove");

    const STEP = 50;
    const MIN_WIDTH = 150;
    const MAX_WIDTH = 1200;

    btnAdd.addEventListener("click", () => {
        let img = document.getElementById("city-img");
        if (!img) {
            const link = document.createElement("a");
            link.href = "https://uk.wikipedia.org/wiki/%D0%AF%D0%B2%D0%BE%D1%80%D1%96%D0%B2";
            link.target = "_blank";
            link.id = "img-link";

            img = document.createElement("img");
            img.id = "city-img";
            img.src = "yavoriv1.jpg";
            img.alt = "Ратуша міста Яворова";
            img.width = 600;

            link.appendChild(img);
            imgContainer.appendChild(link);
        }
    });

    btnZoomIn.addEventListener("click", () => {
        const img = document.getElementById("city-img");
        if (img) {
            let currentWidth = img.width;
            if (currentWidth + STEP <= MAX_WIDTH) {
                img.width = currentWidth + STEP;
            } else {
                img.width = MAX_WIDTH;
            }
        }
    });

    btnZoomOut.addEventListener("click", () => {
        const img = document.getElementById("city-img");
        if (img) {
            let currentWidth = img.width;
            if (currentWidth - STEP >= MIN_WIDTH) {
                img.width = currentWidth - STEP;
            } else {
                img.width = MIN_WIDTH;
            }
        }
    });

    btnRemove.addEventListener("click", () => {
        const link = document.getElementById("img-link");
        if (link) {
            link.remove();
        } else {
            const img = document.getElementById("city-img");
            if (img) img.remove();
        }
    });
});