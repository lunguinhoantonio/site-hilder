document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light");
    }

    updateImages();
});

function switchTheme() {
    const body = document.body;
    const isLight = body.classList.toggle("light");

    updateImages();

    localStorage.setItem("theme", isLight ? "light" : "dark");
}

function updateImages() {
    const isLight = document.body.classList.contains("light");

    const images = {
        ".top-image img": isLight
            ? "./assets/pfp-hilder-matos-light.png"
            : "./assets/pfp-hilder-matos.png",
        ".meia-lua-studio-img": isLight
            ? "./assets/meia-lua-studios-light.png"
            : "./assets/meia-lua-studios.png",
        ".matos-entertainment-img": isLight
            ? "./assets/matos-entertainment-light.png"
            : "./assets/matos-entertainment.png"
    };

    for (const selector in images) {
        const element = document.querySelector(selector);
        if (element) element.setAttribute("src", images[selector]);
    }
}



function backTop() {
    button.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    });
}
