// =====================================================
// RÉGLAGES (à modifier ici, une seule fois)
// =====================================================
const NUMERO_WHATSAPP = "972559955591";
const PRIX_TAILLES = { "30x40": 400, "50x70": 650, "70x100": 900 };

// Pour ajouter une création : ajoutez UNE ligne dans cette liste.
// [fichier image, titre, description, prix affiché, disponible ?, afficher sur l'accueil ?]
// Prix vide ("") = œuvre non vendue (visible seulement sur l'accueil).
const CREATIONS = [
    ["michael-jackson.jpeg", "Michael Jackson", "Portrait de Michael Jackson peint entièrement à la main. Une œuvre unique, idéale pour les passionnés de musique et de portraits artistiques.", "1000 ₪", true, false],
    ["street-fighter.jpeg", "Street Fighter", "Une création colorée inspirée de l'univers de Street Fighter, qui met en avant l'énergie et l'intensité du combat.", "600 ₪", true, true],
    ["dark-angel.jpeg", "Dark Angel", "Une création artistique réalisée à la main sur toile. Une œuvre sombre et originale, pensée pour apporter une vraie présence à votre intérieur.", "400 ₪", true, false],
    ["tate langdon.jpeg", "Tate Langdon", "Portrait au crayon avec un travail détaillé sur le visage, les ombres et l'effet squelette. Une création sombre entièrement dessinée à la main.", "400 ₪", true, false],
    ["sukuna.jpeg", "Sukuna", "Création inspirée de Sukuna, aux couleurs intenses et aux forts contrastes. Le noir, le rouge et le rose donnent beaucoup de puissance au personnage.", "500 ₪", true, true],
    ["deadpool in love.jpeg", "Deadpool in Love", "Deadpool dans une ambiance plus légère. Les tons rouges, roses et violets donnent au dessin un style très reconnaissable.", "500 ₪", true, false],
    ["pain naruto shippuden.jpeg", "Pain", "Création inspirée de Pain (Naruto Shippuden), dominée par le noir, le blanc et le rouge. Un dessin très contrasté.", "600 ₪", true, false],
    ["moon knight.jpeg", "Moon Knight", "Une composition mêlant plusieurs personnages de Moon Knight. Le contraste entre les costumes clairs et le fond violet apporte de la profondeur.", "600 ₪", true, false],
    ["spider team.jpeg", "Spider Team", "Une grande composition réunissant plusieurs héros araignées dans une scène dynamique, pleine de couleurs et de détails.", "400 ₪", true, false],
    ["ken kaneki.jpeg", "Ken Kaneki", "Portrait inspiré de Ken Kaneki, avec un travail sur le contraste entre le noir et le blanc et quelques touches de couleur.", "500 ₪", true, false],
    ["eijiro kirishima.jpeg", "Eijiro Kirishima", "Une illustration très contrastée autour du noir, du blanc et du rouge. Les traits marqués donnent une impression de puissance et de mouvement.", "500 ₪", true, false],
    ["eddie stranger things.jpeg", "Eddie", "Un guitariste dans une ambiance électrique. Les tons bleus, violets et rouges donnent à la scène une atmosphère intense.", "500 ₪", true, false],
    ["ichigo.jpeg", "Ichigo", "Création inspirée d'Ichigo, dominée par le bleu, le noir et le blanc. Le mouvement de la scène donne beaucoup d'énergie au personnage.", "600 ₪", true, false],
    ["gohan.jpeg", "Gohan", "Gohan entouré d'effets d'énergie, avec des couleurs puissantes. Les tons jaunes et bleus renforcent le dynamisme de la scène.", "600 ₪", true, false],
    ["batman qui rit.jpeg", "Batman qui rit", "Un portrait sombre entièrement réalisé au crayon, avec un important travail sur les ombres, les contrastes et les détails. Une ambiance inquiétante.", "500 ₪", true, true],
    ["black goku.jpeg", "Black Goku", "Une création très colorée, en nuances de rose, violet et rouge, qui met en avant la puissance du personnage avec beaucoup de mouvement.", "600 ₪", false, true],
    ["deadpool.jpeg", "Deadpool", "Une création dynamique et très colorée. Les couleurs vives et les nombreux détails représentent le côté explosif du personnage.", "700 ₪", true, true],
    ["ghost face.jpeg", "Ghost Face", "Une ambiance volontairement sombre. Le mélange du noir, du blanc et du rouge crée un contraste puissant.", "500 ₪", true, true],
    ["gohan beast.jpeg", "Gohan Beast", "Une création qui cherche à représenter toute la puissance de Gohan Beast : couleurs intenses, contrastes et détails.", "600 ₪", false, true],
    ["it.jpeg", "It", "Un portrait au crayon avec un travail particulier sur le visage, les ombres et les détails. Une atmosphère sombre et précise.", "400 ₪", true, true],
    ["joker.jpeg", "Joker", "Une interprétation artistique et colorée du Joker, qui garde l'ambiance sombre et reconnaissable du personnage.", "500 ₪", true, false],
    ["kid buu.jpeg", "Kid Buu", "Une création très colorée inspirée de Kid Buu et de Dragon Ball, aux nuances de rose et aux couleurs intenses.", "600 ₪", true, true],
    ["dessin joker.jpg.jpeg", "Joker - Crayon", "Un portrait du Joker principalement au crayon, avec une attention particulière portée au visage, au regard et aux ombres.", "", true, true]
].map(([fichier, titre, description, prix, dispo, accueil]) => ({ fichier, titre, description, prix, dispo, accueil }));

const $ = (id) => document.getElementById(id);
const lienWhatsApp = (texte) => "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texte);

// =====================================================
// MENU MOBILE
// =====================================================
const menu = $("menu-mobile");
const liens = document.querySelector(".liens");
if (menu && liens) {
    const basculer = (ouvert) => {
        liens.classList.toggle("ouvert", ouvert);
        menu.setAttribute("aria-expanded", ouvert);
        menu.textContent = ouvert ? "✕" : "☰";
    };
    menu.addEventListener("click", () => basculer(!liens.classList.contains("ouvert")));
    liens.addEventListener("click", (e) => { if (e.target.closest("a")) basculer(false); });
}

// =====================================================
// FENÊTRE PRODUIT (accueil + créations)
// =====================================================
const fenetre = $("fenetre-produit");
let creationActive = null;

function ouvrirCreation(c) {
    creationActive = c;
    $("produit-image").src = "./" + c.fichier;
    $("produit-image").alt = c.titre;
    $("produit-titre").textContent = c.titre;
    $("produit-description").textContent = c.description;
    $("produit-prix").textContent = c.prix;
    $("produit-prix").hidden = !c.prix;

    const stock = document.querySelector(".produit-stock");
    const bouton = $("produit-commander");
    const vendable = c.prix && c.dispo;
    stock.hidden = !c.prix;
    stock.className = "produit-stock " + (c.dispo ? "ok" : "rupture");
    stock.textContent = c.dispo ? "● Pièce unique, disponible" : "● Rupture de stock";
    bouton.disabled = !vendable;
    bouton.textContent = vendable ? "Commander sur WhatsApp" : (c.prix ? "Indisponible" : "Ce tableau n'est pas à vendre");
    bouton.hidden = !c.prix;
    $("produit-sur-mesure").hidden = c.dispo && !!c.prix;
    fenetre.showModal();
}

if (fenetre) {
    $("produit-commander").addEventListener("click", () => {
        window.open(lienWhatsApp("Bonjour, je suis intéressé par le tableau " + creationActive.titre + ". Est-il toujours disponible ?"), "_blank", "noopener");
    });
    fenetre.querySelector(".popup-fermer").addEventListener("click", () => fenetre.close());
    // Clic sur le fond sombre = fermer
    fenetre.addEventListener("click", (e) => { if (e.target === fenetre) fenetre.close(); });
}

// Galerie de l'accueil
const grille = document.querySelector(".grille-dessins");
if (grille) {
    CREATIONS.filter((c) => c.accueil).forEach((c) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Voir " + c.titre);
        b.innerHTML = '<img loading="lazy" alt="">';
        b.firstChild.src = "./" + c.fichier;
        b.firstChild.alt = c.titre;
        b.addEventListener("click", () => ouvrirCreation(c));
        grille.appendChild(b);
    });
}

// Page Créations
const cartes = document.querySelector(".cartes-projets");
const filtre = $("filtre-dispo");
function afficherCartes() {
    cartes.replaceChildren();
    CREATIONS.filter((c) => c.prix && (!filtre.checked || c.dispo)).forEach((c) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "projet" + (c.dispo ? "" : " rupture");
        b.innerHTML = '<img loading="lazy" alt=""><h3></h3><p class="prix"></p>' + (c.dispo ? "" : '<span class="badge-rupture">Rupture de stock</span>');
        b.querySelector("img").src = "./" + c.fichier;
        b.querySelector("img").alt = "Tableau " + c.titre;
        b.querySelector("h3").textContent = c.titre;
        b.querySelector(".prix").textContent = c.prix;
        b.addEventListener("click", () => ouvrirCreation(c));
        cartes.appendChild(b);
    });
}
if (cartes && filtre) {
    filtre.addEventListener("change", afficherCartes);
    afficherCartes();
}

// =====================================================
// PRIX (une seule source : PRIX_TAILLES)
// =====================================================
document.querySelectorAll("[data-prix]").forEach((el) => { el.textContent = PRIX_TAILLES[el.dataset.prix] + " ₪"; });

// =====================================================
// PAGE COMMANDE
// =====================================================
const bouton = $("bouton-commande");
if (bouton) {
    const photo = $("photo-client"), apercu = $("apercu-photo"), taille = $("taille"), prix = $("prix-estime");
    const erreur = $("erreur-commande");

    photo.addEventListener("change", () => {
        const f = photo.files[0];
        if (!f) return;
        if (apercu.src.startsWith("blob:")) URL.revokeObjectURL(apercu.src);
        apercu.src = URL.createObjectURL(f);
        apercu.style.display = "block";
    });
    taille.addEventListener("change", () => {
        prix.textContent = PRIX_TAILLES[taille.value] ? "Prix estimé : " + PRIX_TAILLES[taille.value] + " ₪" : "";
    });

    const montrer = (el, texte, type) => {
        el.textContent = texte;
        el.className = "message-etat visible " + type;
    };

    bouton.addEventListener("click", () => {
        const f = photo.files[0], style = $("style").value, idee = $("message-commande").value.trim();
        const manque = !f ? "Ajoutez une photo." : !taille.value ? "Choisissez une taille." : !style ? "Choisissez un style." : !idee ? "Décrivez votre idée." : "";
        if (manque) return montrer(erreur, manque, "erreur");
        erreur.className = "message-etat";

        // WhatsApp ne permet pas de joindre une photo automatiquement : le client l'envoie juste après.
        const message =
            "🎨 NOUVELLE DEMANDE - ETHAN GALLERY\n\n" +
            "📐 Taille : " + taille.value + " cm\n" +
            "🎨 Style : " + style + "\n" +
            "💰 " + prix.textContent + "\n\n" +
            "✍️ Idée du tableau :\n" + idee + "\n\n" +
            "📸 Ma photo : " + f.name + "\nJe vous l'envoie juste après ce message dans cette conversation.";
        window.open(lienWhatsApp(message), "_blank", "noopener");
        montrer($("info-whatsapp"), "Dernière étape : WhatsApp vient de s'ouvrir avec votre demande. Envoyez le message, puis envoyez aussi votre photo dans la conversation pour que je puisse commencer.", "info-whatsapp");
    });
}

// =====================================================
// PAGE CONTACT (envoi sans quitter le site)
// =====================================================
const form = $("formulaire");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const etat = $("confirmation"), b = form.querySelector("button[type=submit]"), texte = b.textContent;
        b.disabled = true;
        b.textContent = "Envoi en cours...";
        try {
            const r = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
            if (!r.ok) throw new Error();
            form.reset();
            montrerEtat(etat, "✅ Message envoyé ! Je vous répondrai dès que possible.", "ok");
        } catch {
            montrerEtat(etat, "❌ Le message n'a pas pu être envoyé. Écrivez-moi directement sur WhatsApp : +972 55 995 5591.", "erreur");
        } finally {
            b.disabled = false;
            b.textContent = texte;
        }
    });
}
function montrerEtat(el, texte, type) {
    el.textContent = texte;
    el.className = "message-etat visible " + type;
}
