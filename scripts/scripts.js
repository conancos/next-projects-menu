const images = document.querySelectorAll("img");
/* console.log(images) */
images.forEach(image => {
    image.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
});

// Desactivo contextmenu en .cards-container logic y DOM
const cards_con = document.querySelectorAll('.cards-container').forEach(element => {
    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })
})