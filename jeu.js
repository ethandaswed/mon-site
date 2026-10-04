let nombreSecret = Math.floor(Math.random() * 100) + 1;
function verifierNombre() {
    let valeur = document.getElementById("proposition").value;

    if (valeur === "") {
        document.getElementById("indice").textContent = "Entre d'abord un nombre !";
        return;
    }

    let proposition = Number(valeur);

    if (proposition < nombreSecret) {
        document.getElementById("indice").textContent = "Trop petit 📉";
    } else if (proposition > nombreSecret) {
        document.getElementById("indice").textContent = "Trop grand 📈";
    } else {
        document.getElementById("indice").textContent = "Bravo, tu as gagné ! 🎉";
    }
}
 