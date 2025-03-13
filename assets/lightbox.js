// Ouvre la lightbox avec l'image sélectionnée
function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc; // Change l'image affichée
    document.getElementById("lightbox").style.display = "flex"; // Affiche la lightbox
}

// Ferme la lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none"; // Cache la lightbox
}

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne toutes les images dans le site (quelles que soient leurs classes)
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", function () {
            openLightbox(this.src); // Ouvre la lightbox avec l'image cliquée
        });
    });
});
