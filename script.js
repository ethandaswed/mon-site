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


