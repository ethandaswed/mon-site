function direBonjour() {
    alert("Bienvenue sur mon site !");
}
const formulaire = document.getElementById("formulaire");

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