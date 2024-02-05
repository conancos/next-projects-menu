document.querySelector("#btn-darkMode").onclick = darkMode;

const body = document.querySelector("body");
const nav = document.getElementById("nav-header");
const ghost = document.querySelector(".bx");
const firma = document.querySelector(".firma");
const titol = document.querySelector("h1");
const subTitol = document.querySelectorAll("h3");

const card = document.querySelectorAll(".card");

const buttons = document.querySelectorAll("button");



function darkMode() {

    
    if (body.classList.contains("moon")) {
        
        body.classList.replace("moon", "sun");
        nav.style.backgroundColor = "var(--lightModeColor)";
        ghost.classList.replace("bx-ghost", "bxs-ghost") && ghost.classList.replace("ghostSun", "ghostMoon");
        titol.classList.replace("titolMoon", "titolSun");
        firma.classList.toggle("shadow");
        
        card.forEach(element => {
            element.style.backgroundColor.remove = "var(--darkModeColor2)"
            element.style.backgroundColor = "var(--lightModeColor2)"
        });

        subTitol.forEach(element => {
            element.classList.replace("titolSun", "titolMoon2")
        });

        document.documentElement.style.setProperty('--darkPulsar', '#07f');
        
        buttons.forEach(button => {
            button.classList.replace('pulsar-dark', 'pulsar-light')
        })

    } else {
        
        body.classList.replace("sun", "moon");
        nav.style.backgroundColor = "var(--darkModeColor)";
        ghost.classList.replace("bxs-ghost", "bx-ghost");
        ghost.classList.replace("ghostMoon", "ghostSun");
        titol.classList.replace("titolSun", "titolMoon");
        firma.classList.toggle("shadow");
        
        card.forEach(element => {
            element.style.backgroundColor.remove = "var(--lightModeColor2)"
            element.style.backgroundColor = "var(--darkModeColor2)"
        });
        
        subTitol.forEach(element => {
            element.classList.replace("titolMoon2", "titolSun")
        });

        document.documentElement.style.setProperty('--darkPulsar', '#f50');
        buttons.forEach(button => {
            button.classList.replace('pulsar-light', 'pulsar-dark')
        });
    }
}

