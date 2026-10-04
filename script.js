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