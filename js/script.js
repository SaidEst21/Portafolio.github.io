const proyectsContainer = document.querySelector(".proyects-container");
const htmlButtons = document.querySelectorAll(".html");
const cssButtons = document.querySelectorAll(".css");
const jsButtons = document.querySelectorAll(".js");
const techInfo = document.querySelector(".tech-info");
const techTitle = document.querySelector(".tech-title");
const techDescription = document.querySelector(".tech-description");

let bottom = 0;

for (const htmlButton of htmlButtons) {

    htmlButton.addEventListener("click", () => {

        techTitle.innerHTML = "HTML";
        techDescription.innerHTML = "HTML o HyperText Markup Language por sus siglas en inglés es el lenguaje que se encarga de estructurar una página web.";
        techInfo.style = "--display: block;";
    })
} 

for (const cssButton of cssButtons) {

    cssButton.addEventListener("click", () => {

        techTitle.innerHTML = "CSS";
        techDescription.innerHTML = "CSS o Cascading Style Sheets por sus siglas en inglés es el lenguaje que se encarga del diseño de una página web.";
        techInfo.style = "--display: block;";
    })
}

for (const jsButton of jsButtons) {

    jsButton.addEventListener("click", () => {

        techTitle.innerHTML = "JS";
        techDescription.innerHTML = "JS o JavaScript es un lenguaje de programación utilizado en el desarrollo de páginas web, encargándose de la lógica y comunicación de la web con el servidor.";
        techInfo.style = "--display: block;";
    })
}

techInfo.firstElementChild.addEventListener("click", () => {

    techInfo.style = "--display: none;";
})

document.getElementById("squigly").addEventListener("click", () => {

    window.open("https://saidest21.github.io/Squigly-skullgirls-wiki.github.io/");
});

document.getElementById("tic-tac-toe").addEventListener("click", () => {

    window.open("https://saidest21.github.io/Tic-tac-toe.github.io/");
});

document.getElementById("formulary").addEventListener("click", () => {

    window.open("https://saidest21.github.io/Formulary.github.io/");
});

document.querySelector(".fa-arrow-left").addEventListener("click", e => {

    if (bottom != 0) {

        bottom -= 413;
    } else {

        bottom = 826;
    }

    proyectsContainer.style = `--bottom: ${bottom}px;`;
});

document.querySelector(".fa-arrow-right").addEventListener("click", e => {

    if (bottom != 826) {

        bottom += 413;
    } else {

        bottom = 0;
    }

    proyectsContainer.style = `--bottom: ${bottom}px;`;
});

document.querySelector(".nav-display").addEventListener("click", () => {

    const nav = document.querySelector(".nav-ul");

    if (nav.style.cssText == "--top: -150px;") {

        nav.style = "--top: 60px;";
    } else {

        nav.style = "--top: -150px;";
    }
})