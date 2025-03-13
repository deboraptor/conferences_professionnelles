function openNav() {
    document.getElementById("myNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".image-box img").forEach(img => {
        img.addEventListener("click", function () {
            openLightbox(this.src);
        });
    });
});