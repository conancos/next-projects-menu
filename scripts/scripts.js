const images = document.querySelectorAll("img");
/* console.log(images) */


images.forEach(image => {
    image.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
});
