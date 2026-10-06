function direBonjour() {
    alert("Bienvenue sur mon site !");
}
const formulaire = document.getElementById("formulaire");

if (formulaire) {
    formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        document.getElementById("confirmation").textContent =
    "Bonjour " + nom + ", merci pour votre message !";
    }
});
}




const boutonTheme = document.getElementById("theme-bouton");
if (localStorage.getItem("theme") === "sombre") {
    document.body.classList.add("mode-sombre");
    boutonTheme.textContent = "☀️";
}

boutonTheme.addEventListener("click", function() {
    document.body.classList.toggle("mode-sombre");

    if (document.body.classList.contains("mode-sombre")) {
    boutonTheme.textContent = "☀️";
    localStorage.setItem("theme", "sombre");
} else {
    boutonTheme.textContent = "🌙";
    localStorage.setItem("theme", "clair");
}
});
const photoClient = document.getElementById("photo-client");
const apercuPhoto = document.getElementById("apercu-photo");

if (photoClient && apercuPhoto) {
    photoClient.addEventListener("change", function () {

        const fichier = this.files[0];

        if (fichier) {
            apercuPhoto.src = URL.createObjectURL(fichier);
            apercuPhoto.style.display = "block";
        }

    });
}
const choixTaille = document.getElementById("taille");
const prixEstime = document.getElementById("prix-estime");

if (choixTaille && prixEstime) {
    choixTaille.addEventListener("change", function () {

        if (choixTaille.value === "30x40") {
            prixEstime.textContent = "Prix estimé : 400 ₪";
        } else if (choixTaille.value === "50x70") {
            prixEstime.textContent = "Prix estimé : 650 ₪";
        } else if (choixTaille.value === "70x100") {
            prixEstime.textContent = "Prix estimé : 900 ₪";
        } else {
            prixEstime.textContent = "";
        }

    });
}

const boutonCommande = document.getElementById("bouton-commande");

if (boutonCommande) {
    boutonCommande.addEventListener("click", function () {

        const taille = document.getElementById("taille").value;
        const style = document.getElementById("style").value;
        const idee = document.getElementById("message-commande").value;
        const photo = document.getElementById("photo-client").files[0];
        const prix = document.getElementById("prix-estime").textContent;

        if (!photo) {
            alert("Ajoutez une photo.");
            return;
        }

        if (taille === "") {
            alert("Choisissez une taille.");
            return;
        }

        if (style === "") {
            alert("Choisissez un style.");
            return;
        }

        if (idee.trim() === "") {
            alert("Décrivez votre idée.");
            return;
        }

        const message =
            "🎨 NOUVELLE DEMANDE - ETHAN GALLERY\n\n" +
            "📐 Taille : " + taille + "\n" +
            "🎨 Style : " + style + "\n" +
            "💰 " + prix + "\n\n" +
            "✍️ Idée du tableau :\n" + idee + "\n\n" +
            "📸 J'ai sélectionné la photo : " + photo.name + "\n" +
            "Je joins la photo à ce message.";

        const numero = "972559955591";

        window.open(
            "https://wa.me/" + numero + "?text=" + encodeURIComponent(message),
            "_blank"
        );
    });
}


const menuMobile = document.getElementById("menu-mobile");
const liensMenu = document.querySelector(".liens");

if (menuMobile && liensMenu) {
    menuMobile.addEventListener("click", function () {
        liensMenu.classList.toggle("ouvert");
    });
}

// ===== POPUP CREATIONS =====

function ouvrirImage(src, titre, description) {
    const popup = document.getElementById("popup-creation");
    const image = document.getElementById("popup-image");
    const titrePopup = document.getElementById("popup-titre");
    const descriptionPopup = document.getElementById("popup-description");

    image.src = src;
    titrePopup.textContent = titre;
    descriptionPopup.textContent = description;

    popup.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fermerImage() {
    const popup = document.getElementById("popup-creation");

    popup.classList.remove("active");
    document.body.style.overflow = "";
}

// Fermer en cliquant sur le fond noir
document.getElementById("popup-creation")?.addEventListener("click", function(event) {
    if (event.target === this) {
        fermerImage();
    }
});
// ===== FENÊTRE PRODUIT - CRÉATIONS =====

let produitActuel = "";

function ouvrirProduit(image, titre, description, prix) {
    produitActuel = titre;

    document.getElementById("produit-image").src = image;
    document.getElementById("produit-titre").textContent = titre;
    document.getElementById("produit-description").textContent = description;
    document.getElementById("produit-prix").textContent = prix;

    document.getElementById("popup-produit").classList.add("active");

    document.body.style.overflow = "hidden";
}

function fermerProduit() {
    document.getElementById("popup-produit").classList.remove("active");

    document.body.style.overflow = "";
}

function commanderProduit() {
    const message = encodeURIComponent(
        "Bonjour, je suis intéressé par le tableau " + produitActuel + ". Est-il toujours disponible ?"
    );

    window.open(
        "https://wa.me/972559955591?text=" + message,
        "_blank"
    );
}

