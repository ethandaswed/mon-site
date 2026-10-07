// =====================================================
// RÉGLAGES (à modifier ici, une seule fois)
// =====================================================
const NUMERO_WHATSAPP = "972559955591";
const PRIX_TAILLES = { "30x40": 400, "50x70": 650, "70x100": 900 };

// Poster imprimé : le prix va de 150 à 200 ₪ selon le prix du tableau original
// (tableau à 400 ₪ ou moins = 150 ₪, tableau à 1000 ₪ ou plus = 200 ₪).
// SUPPLEMENT_CADRE : supplément facturé quand le poster est livré avec cadre (en ₪).
const POSTER = { min: 150, max: 200, baseMin: 400, baseMax: 1000, SUPPLEMENT_CADRE: 70 };
function prixPoster(c, avecCadre) {
    const base = Number((String(c.prix).match(/\d+/) || [0])[0]);
    const t = Math.min(1, Math.max(0, (base - POSTER.baseMin) / (POSTER.baseMax - POSTER.baseMin)));
    return Math.round((POSTER.min + t * (POSTER.max - POSTER.min)) / 10) * 10 + (avecCadre ? POSTER.SUPPLEMENT_CADRE : 0);
}
function articlePoster(c, avecCadre) {
    return { id: "poster:" + c.fichier + ":" + (avecCadre ? "cadre" : "nu"), titre: "Poster " + c.titre, prix: prixPoster(c, avecCadre),
        image: c.fichier, type: "Poster imprimé", detail: avecCadre ? "Avec cadre" : "Sans cadre" };
}

// Version choisie pour chaque création : « original fait main » ou « poster imprimé ».
// Partagé entre les cartes de la page Créations et la fenêtre d'un tableau.
const CHOIX = {};
const choixDe = (c) => CHOIX[c.fichier] || (CHOIX[c.fichier] = { v: c.dispo ? "original" : "poster", cadre: false });
const prixOriginal = (c) => Number((String(c.prix).match(/\d+/) || [0])[0]);

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
    ["kid buu.jpeg", "Kid Buu", "Une création très colorée inspirée de Kid Buu et de Dragon Ball, aux nuances de rose et aux couleurs intenses.", "600 ₪", true, true],
    ["dessin joker.jpg.jpeg", "Joker", "Un portrait du Joker principalement au crayon, avec une attention particulière portée au visage, au regard et aux ombres.", "400 ₪", true, true]
].map(([fichier, titre, description, prix, dispo, accueil]) => ({ fichier, titre, description, prix, dispo, accueil }));

// Mots-clés de chaque œuvre : affichés sur la fiche et utilisés par la recherche (modifiez-les librement).
const MOTS_CLES = {
    "Michael Jackson": ["musique", "chanteur", "roi de la pop", "portrait", "pop", "star"],
    "Street Fighter": ["jeu vidéo", "combat", "arcade", "capcom", "ryu", "ken", "gaming"],
    "Dark Angel": ["ange", "sombre", "gothique", "fantasy", "noir", "toile"],
    "Tate Langdon": ["american horror story", "ahs", "série", "horreur", "squelette", "crayon", "dessin"],
    "Sukuna": ["jujutsu kaisen", "manga", "anime", "démon", "malédiction", "roi des fléaux"],
    "Deadpool in Love": ["deadpool", "marvel", "super-héros", "comics", "amour", "rouge"],
    "Pain": ["naruto", "shippuden", "manga", "anime", "akatsuki", "ninja"],
    "Moon Knight": ["marvel", "super-héros", "comics", "série", "blanc", "lune"],
    "Spider Team": ["spider-man", "araignée", "marvel", "super-héros", "comics", "spider-verse"],
    "Ken Kaneki": ["tokyo ghoul", "manga", "anime", "ghoul", "masque", "noir et blanc"],
    "Eijiro Kirishima": ["my hero academia", "mha", "manga", "anime", "durcissement", "noir et blanc"],
    "Eddie": ["stranger things", "série", "netflix", "guitare", "metal", "eddie munson"],
    "Ichigo": ["bleach", "manga", "anime", "shinigami", "bleu", "épée"],
    "Gohan": ["dragon ball", "dbz", "manga", "anime", "saiyan", "énergie", "jaune"],
    "Batman qui rit": ["batman", "dc comics", "joker", "super-héros", "sombre", "crayon", "dessin"],
    "Black Goku": ["dragon ball", "dragon ball super", "goku", "manga", "anime", "rose", "violet"],
    "Deadpool": ["marvel", "super-héros", "comics", "wade wilson", "rouge", "anti-héros"],
    "Ghost Face": ["scream", "horreur", "film", "masque", "slasher", "noir et blanc"],
    "Gohan Beast": ["dragon ball", "dragon ball super", "super hero", "manga", "anime", "puissance"],
    "It": ["ça", "pennywise", "stephen king", "clown", "horreur", "film", "crayon", "dessin"],
    "Kid Buu": ["dragon ball", "dbz", "manga", "anime", "majin buu", "rose", "méchant"],
    "Joker": ["batman", "dc comics", "clown", "super-vilain", "comics", "crayon", "dessin"]
};
// Mots-clés communs ajoutés automatiquement : style, technique, couleurs citées dans la description
const TAGS_CRAYON = ["tate langdon.jpeg", "batman qui rit.jpeg", "it.jpeg", "dessin joker.jpg.jpeg"];
const COULEURS = ["rouge", "bleu", "noir", "blanc", "rose", "violet", "jaune", "vert", "orange", "gris", "doré"];
CREATIONS.forEach((c) => {
    const crayon = TAGS_CRAYON.includes(c.fichier), d = c.description.toLowerCase();
    const plus = ["réaliste", "fait main", "pièce unique", crayon ? "crayon" : "peinture", ...COULEURS.filter((k) => d.includes(k))];
    c.mots = [...new Set([...(MOTS_CLES[c.titre] || []), ...plus])];
});

const $ = (id) => document.getElementById(id);
const tr = (fr) => (window.trad ? window.trad(fr) : fr); // traduction (voir langues.js)
// Commander demande un compte : sinon on envoie la personne le créer, puis on la ramène là où elle était
const compteConnecte = () => { try { const e = JSON.parse(localStorage.getItem("eg_session")), u = JSON.parse(localStorage.getItem("eg_users") || "{}"); return !!(e && u[e]); } catch { return false; } };
const exigerCompte = () => {
    if (compteConnecte()) return false;
    try { sessionStorage.setItem("eg_retour", location.pathname.split("/").pop() + location.search); } catch { }
    location.href = "compte.html?commande=1#inscription";
    return true;
};
const lienWhatsApp = (texte) => "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texte);

// =====================================================
// MENU MOBILE
// =====================================================
const menu = $("menu-mobile");
const liens = document.querySelector(".liens");
if (menu && liens) {
    // Icône dessinée (SVG) : sur iPhone le caractère ☰ s'affichait en bleu
    const svgMenu = (d) => '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="' + d + '"/></svg>';
    const basculer = (ouvert) => {
        liens.classList.toggle("ouvert", ouvert);
        menu.setAttribute("aria-expanded", ouvert);
        menu.innerHTML = svgMenu(ouvert ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16");
    };
    menu.innerHTML = svgMenu("M4 7h16M4 12h16M4 17h16");
    menu.addEventListener("click", () => basculer(!liens.classList.contains("ouvert")));
    liens.addEventListener("click", (e) => { if (e.target.closest("a")) basculer(false); });

    // Barre horizontale tant qu'elle tient ; menu ☰ seulement si elle déborde (petit écran, texte agrandi, autre langue)
    const racine = document.documentElement;
    const navEl = document.querySelector("nav");
    // Dans le menu ☰ il n'y a que les onglets : loupe, cloche, compte et panier restent dans la barre du haut
    const ranger = (burger) => {
        const rech = $("btn-recherche"), notif = $("btn-notif"), cmd = liens.querySelector(".bouton-nav-commander");
        const param = navEl.querySelector('a.icone-nav[href="parametres.html"]');
        const cpt = navEl.querySelector('a.icone-nav[href="compte.html"]'), pan = navEl.querySelector('a.icone-nav[href="panier.html"]');
        let b = navEl.querySelector(".barre-icones");
        if (burger) {
            if (!b) { b = document.createElement("div"); b.className = "barre-icones"; navEl.insertBefore(b, menu); }
            [rech, notif, param, cpt, pan].forEach((e) => e && b.appendChild(e));
        } else if (b) {
            [param, cpt, pan].forEach((e) => e && cmd && liens.insertBefore(e, cmd));
            [rech, notif].forEach((e) => e && param && liens.insertBefore(e, param));
            b.remove();
        }
    };
    let extrasOk = !!window.EG_EXTRAS_FAIT, policesOk = !(document.fonts && document.fonts.ready);
    window.EG_MENU_PRET = (k) => {
        if (k === "extras") extrasOk = true;
        if (k === "polices") policesOk = true;
        window.EG_AJUSTER_MENU();
        if (extrasOk && policesOk) racine.classList.add("menu-pret"); // la barre n'apparaît qu'une fois en place : plus de saut au rechargement
    };
    window.addEventListener("load", () => { if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => window.EG_MENU_PRET("polices")); else window.EG_MENU_PRET("polices"); });
    setTimeout(() => { extrasOk = policesOk = true; window.EG_MENU_PRET(); }, 1200);
    window.EG_AJUSTER_MENU = function () {
        const etait = racine.classList.contains("menu-burger");
        racine.classList.remove("menu-burger");
        ranger(false);
        let burger = window.innerWidth <= 800;
        if (!burger) {
            const rtl = racine.dir === "rtl";
            const dernier = liens.lastElementChild.getBoundingClientRect();
            const logo = navEl.querySelector(".logo").getBoundingClientRect();
            const place = navEl.getBoundingClientRect();
            const premier = liens.firstElementChild.getBoundingClientRect();
            burger = rtl
                ? dernier.left < place.left + 8 || premier.left > logo.left - 8
                : dernier.right > place.right - 8 || premier.left < logo.right + 8;
            if (!burger && navEl.scrollWidth > navEl.clientWidth + 1) burger = true;
        }
        racine.classList.toggle("menu-burger", burger);
        if (burger) ranger(true);
        // Écran large : les 4 onglets pile au centre de la page
        const a0 = liens.querySelector(":scope > a"), a3 = liens.querySelectorAll(":scope > a")[3];
        if (a0 && a3) {
            a0.style.marginInlineStart = "";
            if (!burger && window.innerWidth >= 1300 && racine.dir !== "rtl") {
                const g = a0.getBoundingClientRect(), d = a3.getBoundingClientRect(), lg = liens.querySelector(".langue");
                const voulu = (window.innerWidth - (d.right - g.left)) / 2 - g.left;
                const libre = lg ? lg.getBoundingClientRect().left - d.right - 24 : 0;
                a0.style.marginInlineStart = voulu > 0 && voulu <= libre ? voulu + "px" : "auto";
            }
        }
        if (!burger || burger !== etait) basculer(false);
    };
    window.addEventListener("resize", window.EG_AJUSTER_MENU);
    window.addEventListener("langue-changee", () => setTimeout(window.EG_AJUSTER_MENU, 50));
    window.addEventListener("load", window.EG_AJUSTER_MENU);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(window.EG_AJUSTER_MENU);
    window.EG_AJUSTER_MENU();
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
    let mots = $("produit-mots");
    if (!mots) { mots = document.createElement("p"); mots.id = "produit-mots"; mots.className = "mots-cles"; $("produit-description").after(mots); }
    mots.innerHTML = c.mots.map((m) => '<span data-no-trad>#' + m.replace(/[&<>"]/g, "") + '</span>').join("");
    mots.hidden = !c.mots.length;
    $("produit-sur-mesure").hidden = c.dispo && !!c.prix;
    if (window.majBoutonPanier) majBoutonPanier(c);
    fenetre.showModal();
}

if (fenetre) {
    $("produit-commander").addEventListener("click", () => {
        if (exigerCompte()) return;
        const c = creationActive, ch = choixDe(c);
        const texte = ch.v === "poster"
            ? "Bonjour, je suis intéressé par le poster imprimé du tableau " + c.titre + " (" + (ch.cadre ? "avec cadre" : "sans cadre") + ", " + prixPoster(c, ch.cadre) + " ₪). Est-il disponible ?"
            : "Bonjour, je suis intéressé par le tableau original " + c.titre + " (" + prixOriginal(c) + " ₪). Est-il toujours disponible ?";
        window.open(lienWhatsApp(texte), "_blank", "noopener");
    });
    fenetre.querySelector(".popup-fermer").addEventListener("click", () => fenetre.close());
    // Clic sur le fond sombre = fermer
    fenetre.addEventListener("click", (e) => { if (e.target === fenetre) fenetre.close(); });
}

// Galerie de l'accueil : créations disponibles, avec titre et prix
const grille = document.querySelector(".grille-dessins");
if (grille) {
    CREATIONS.filter((c) => c.accueil && c.dispo).slice(0, 8).forEach((c) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Voir " + c.titre);
        b.innerHTML = '<span class="vignette"><img loading="lazy" alt=""></span><span class="legende"><strong></strong><span></span></span>';
        const img = b.querySelector("img");
        img.src = "./" + c.fichier; img.alt = c.titre;
        b.querySelector("strong").textContent = c.titre;
        b.querySelector(".legende > span").textContent = c.prix;
        b.addEventListener("click", () => ouvrirCreation(c));
        grille.appendChild(b);
    });
}
// Œuvres de l'en-tête de l'accueil : un clic ouvre la fiche du tableau
document.querySelectorAll("[data-oeuvre]").forEach((el) => {
    el.addEventListener("click", () => {
        const c = CREATIONS.find((x) => x.fichier === el.dataset.oeuvre);
        if (c) ouvrirCreation(c);
    });
});

// =====================================================
// PRIX (une seule source : PRIX_TAILLES)
// =====================================================
document.querySelectorAll("[data-prix]").forEach((el) => { el.textContent = PRIX_TAILLES[el.dataset.prix] + " ₪"; });
const VALEURS_POSTER = { min: POSTER.min, max: POSTER.max + 0, cadre: POSTER.SUPPLEMENT_CADRE };
document.querySelectorAll("[data-poster]").forEach((el) => { el.textContent = VALEURS_POSTER[el.dataset.poster] + " ₪"; });

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
        const dt = document.getElementById("depot-texte");
        if (dt) dt.textContent = f.name;
    });
    taille.addEventListener("change", () => {
        prix.textContent = PRIX_TAILLES[taille.value] ? "Prix estimé : " + PRIX_TAILLES[taille.value] + " ₪" : "";
    });

    const montrer = (el, texte, type) => {
        el.textContent = texte;
        el.className = "message-etat visible " + type;
    };

    if (!compteConnecte()) {
        const grille = document.querySelector(".commande-grille");
        if (grille) {
            grille.hidden = true; if ($("progres")) $("progres").hidden = true;
            const g = document.createElement("section");
            g.className = "porte-compte";
            g.innerHTML = '<h2>Un compte est nécessaire pour commander</h2><p>Créez votre compte gratuit en 30 secondes : vos informations seront enregistrées et vous retrouverez votre historique de commandes.</p><div class="porte-actions"><a class="bouton" href="compte.html?commande=1#inscription" id="porte-creer">Créer un compte</a><a class="bouton contour" href="compte.html?commande=1" id="porte-connexion">J\'ai déjà un compte</a></div>';
            grille.parentNode.insertBefore(g, grille);
            const retour = () => { try { sessionStorage.setItem("eg_retour", "commande.html"); } catch { } };
            g.addEventListener("click", (e) => { if (e.target.closest("a")) retour(); });
        }
    }
    bouton.addEventListener("click", () => {
        if (exigerCompte()) return;
        const f = photo.files[0], style = $("style").value, idee = $("message-commande").value.trim();
        const manque = !f ? "Ajoutez une photo." : !taille.value ? "Choisissez une taille." : !style ? "Choisissez un style." : !idee ? "Décrivez votre idée." : "";
        if (manque) return montrer(erreur, manque, "erreur");
        erreur.className = "message-etat";

        // WhatsApp ne permet pas de joindre une photo automatiquement : le client l'envoie juste après.
        const message =
            "🎨 NOUVELLE DEMANDE - ETHAN GALLERY\n\n" +
            "📐 Taille : " + taille.value + " cm\n" +
            "🎨 Style : " + style + "\n" +
            "💰 Prix estimé : " + PRIX_TAILLES[taille.value] + " ₪\n\n" +
            (window.EG_CADEAU ? window.EG_CADEAU() : "") +
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
            montrerEtat(etat, "Mail envoyé ! Je vous répondrai dès que possible.", "ok");
        } catch {
            montrerEtat(etat, "Le mail n'a pas pu être envoyé. Écrivez-moi directement sur WhatsApp : +972 55 995 5591.", "erreur");
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

// =====================================================
// CARROUSEL DE L'ACCUEIL
// =====================================================
const carrousel = document.querySelector(".carrousel");
if (carrousel) {
    const diapos = [...carrousel.querySelectorAll(".diapo")];
    const zonePoints = carrousel.querySelector(".carrousel-points");
    const DELAI = 4500; // millisecondes entre deux images
    const peutDefiler = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    let courant = 0, minuteur = null;

    const compteur = document.createElement("span");
    compteur.className = "carrousel-compteur"; compteur.setAttribute("aria-hidden", "true");
    carrousel.appendChild(compteur);
    const points = diapos.map((d, i) => {
        const p = document.createElement("button");
        p.type = "button";
        p.setAttribute("aria-label", "Voir l'image " + (i + 1));
        p.addEventListener("click", () => { aller(i); relancer(); });
        zonePoints.appendChild(p);
        return p;
    });

    function aller(i) {
        courant = (i + diapos.length) % diapos.length; // revient à la première après la dernière
        diapos.forEach((d, n) => d.classList.toggle("actif", n === courant));
        points.forEach((p, n) => p.setAttribute("aria-current", n === courant));
        compteur.textContent = (courant + 1) + " / " + diapos.length;
    }
    function arreter() { clearInterval(minuteur); minuteur = null; }
    function relancer() {
        arreter();
        if (peutDefiler && !document.hidden) minuteur = setInterval(() => aller(courant + 1), DELAI);
    }

    carrousel.querySelector(".precedent").addEventListener("click", () => { aller(courant - 1); relancer(); });
    carrousel.querySelector(".suivant").addEventListener("click", () => { aller(courant + 1); relancer(); });

    // Pause quand on survole ou qu'on navigue au clavier dans le carrousel
    carrousel.addEventListener("mouseenter", arreter);
    carrousel.addEventListener("mouseleave", relancer);
    carrousel.addEventListener("focusin", arreter);
    carrousel.addEventListener("focusout", relancer);
    document.addEventListener("visibilitychange", relancer);

    // Glisser le doigt sur téléphone
    let departX = null;
    carrousel.addEventListener("touchstart", (e) => { departX = e.touches[0].clientX; }, { passive: true });
    carrousel.addEventListener("touchend", (e) => {
        if (departX === null) return;
        const ecart = e.changedTouches[0].clientX - departX;
        if (Math.abs(ecart) > 40) { aller(courant + (ecart < 0 ? 1 : -1)); relancer(); }
        departX = null;
    });

    aller(0);
    relancer();
}

// =====================================================
// BOUTIQUE : COMPTE, PARAMÈTRES, PANIER (tout est stocké dans le navigateur)
// =====================================================
(() => {
    const K = { panier: "eg_panier", users: "eg_users", session: "eg_session", theme: "eg_theme", prefs: "eg_prefs", favoris: "eg_favoris" };
    const lire = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
    const ecrire = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } };
    const prixNum = (p) => Number((String(p).match(/\d+/) || [0])[0]);
    const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    const getPanier = () => lire(K.panier, []);
    const setPanier = (p) => { ecrire(K.panier, p); majBadge(); };
    const etat = (el, texte, type) => { el.textContent = texte; el.className = "message-etat visible " + type; };

    // Thème (réglage)
    const PREFS0 = { theme: "clair", texte: "normal", anim: true, transitions: true, contraste: false, police: "normal", liens: false, flottants: true };
    const getPrefs = () => { const p = { ...PREFS0, ...lire(K.prefs, {}) }; if (p.theme === "terminal") p.theme = "clair"; return p; };
    function appliquerPrefs() {
        const p = getPrefs();
        const sombre = p.theme === "sombre" || (p.theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
        document.body.classList.toggle("sombre", sombre);
        document.documentElement.classList.toggle("sombre", sombre);
        document.documentElement.classList.toggle("grand", p.texte === "grand");
        document.documentElement.classList.toggle("tres-grand", p.texte === "tres-grand");
        document.documentElement.classList.toggle("contraste", !!p.contraste);
        document.documentElement.classList.toggle("police-lisible", p.police === "lisible");
        document.documentElement.classList.toggle("liens-soulignes", !!p.liens);
        document.documentElement.classList.toggle("sans-flottants", p.flottants === false);
        document.body.classList.toggle("sans-anim", !p.anim);
        document.documentElement.classList.toggle("sans-transition", !p.transitions || !p.anim);
        if (window.EG_AJUSTER_MENU) window.EG_AJUSTER_MENU();
    }
    const setPrefs = (n) => { ecrire(K.prefs, { ...getPrefs(), ...n }); appliquerPrefs(); };
    appliquerPrefs();

    // Petit message de confirmation
    function toast(texte) {
        let t = document.getElementById("toast");
        if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
        t.textContent = texte; t.classList.add("visible");
        clearTimeout(t._m); t._m = setTimeout(() => t.classList.remove("visible"), 2500);
    }

    // Icônes compte + panier dans la navigation
    function majBadge() {
        const b = document.getElementById("badge-panier");
        if (!b) return;
        const n = getPanier().length;
        b.textContent = n; b.hidden = !n;
        b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
    }
    const nav = document.querySelector(".liens");
    if (nav) {
        const cmd = nav.querySelector(".bouton-nav-commander");
        const page = location.pathname.split("/").pop();
        [["parametres.html", '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', "Paramètres"], ["compte.html", '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', "Mon compte"], ["panier.html", '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><span class="badge-panier" id="badge-panier" hidden></span>', "Mon panier"]].forEach(([href, html, label]) => {
            const a = document.createElement("a");
            a.href = href; a.className = "icone-nav"; a.innerHTML = html; a.setAttribute("aria-label", label);
            if (page === href) a.setAttribute("aria-current", "page");
            nav.insertBefore(a, cmd);
        });
    }
    majBadge();
    // Retire du panier les tableaux désormais indisponibles
    const gardes = getPanier().filter((i) => { const c = CREATIONS.find((x) => "creation:" + x.fichier === i.id); return !c || c.dispo; });
    if (gardes.length !== getPanier().length) setPanier(gardes);

    function ajouter(item) {
        if (item.indispo) { toast("Ce tableau est indisponible"); return false; }
        const p = getPanier();
        if (p.some((x) => x.id === item.id)) { toast("Déjà dans votre panier"); return false; }
        p.push(item); setPanier(p); toast("✓ Ajouté au panier");
        return true;
    }

    // Favoris
    const getFavoris = () => lire(K.favoris, []);
    function basculerFavori(f) {
        const l = getFavoris(), i = l.indexOf(f);
        if (i >= 0) l.splice(i, 1); else l.push(f);
        ecrire(K.favoris, l);
        toast(i >= 0 ? "Retiré des favoris" : "♥ Ajouté aux favoris");
    }
    function articleDe(c) {
        const vendu = !c.dispo;
        return { indispo: !c.dispo, id: "creation:" + c.fichier, titre: c.titre, prix: prixNum(c.prix), image: c.fichier,
            type: vendu ? "Sur commande (pièce déjà vendue, refaite à la main)" : "Pièce unique",
            detail: vendu ? "Prix confirmé sur WhatsApp" : (/partir/i.test(c.prix) ? "Prix de départ, confirmé sur WhatsApp" : "") };
    }

    const articleChoix = (c, ch) => ch.v === "poster" ? articlePoster(c, ch.cadre) : articleDe(c);

    // Fenêtre produit : choix original / poster (avec ou sans cadre), panier, favoris
    function initFenetre() {
        if (document.getElementById("produit-version")) return;
        const bloc = document.createElement("div");
        bloc.id = "produit-version"; bloc.className = "bloc-version";
        bloc.innerHTML = '<p class="option-titre">Choisissez votre version</p>' +
            '<div class="choix-version" role="radiogroup" aria-label="Version du tableau">' +
            '<label><input type="radio" name="version-produit" value="original"><span><strong>Original fait main</strong><small id="v-prix-original"></small></span></label>' +
            '<label><input type="radio" name="version-produit" value="poster"><span><strong>Poster imprimé</strong><small id="v-prix-poster"></small></span></label></div>' +
            '<div class="choix-cadre" id="v-cadre" role="radiogroup" aria-label="Cadre du poster">' +
            '<label><input type="radio" name="cadre-produit" value="sans"> Sans cadre</label><label><input type="radio" name="cadre-produit" value="avec"> Avec cadre (+' + POSTER.SUPPLEMENT_CADRE + ' ₪)</label></div>' +
            '<small id="v-note"></small>';
        document.getElementById("produit-description").after(bloc);
        bloc.addEventListener("change", (e) => {
            const ch = choixDe(creationActive);
            if (e.target.name === "version-produit") ch.v = e.target.value;
            if (e.target.name === "cadre-produit") ch.cadre = e.target.value === "avec";
            window.majBoutonPanier(creationActive);
        });

        const b = document.createElement("button");
        b.type = "button"; b.id = "produit-panier"; b.className = "bouton contour";
        document.getElementById("produit-commander").after(b);
        const f = document.createElement("button");
        f.type = "button"; f.id = "produit-favori"; f.className = "bouton-favori";
        b.after(f);
        b.addEventListener("click", () => {
            const c = creationActive, ch = choixDe(c);
            if (!c || (ch.v === "original" && !c.dispo)) return;
            ajouter(articleChoix(c, ch)); window.majBoutonPanier(c);
        });
        f.addEventListener("click", () => { basculerFavori(creationActive.fichier); window.majBoutonPanier(creationActive); });
    }

    window.majBoutonPanier = (c) => {
        initFenetre();
        const $i = (id) => document.getElementById(id);
        const ch = choixDe(c), poster = ch.v === "poster", art = articleChoix(c, ch), ok = poster || c.dispo;
        const dedans = getPanier().some((x) => x.id === art.id), fav = getFavoris().includes(c.fichier);

        $i("produit-version").hidden = !c.prix;
        const radio = (nom, val) => document.querySelector('input[name="' + nom + '"][value="' + val + '"]');
        radio("version-produit", "original").checked = !poster;
        radio("version-produit", "original").disabled = !c.dispo;
        radio("version-produit", "poster").checked = poster;
        radio("cadre-produit", "sans").checked = !ch.cadre;
        radio("cadre-produit", "avec").checked = ch.cadre;
        $i("v-cadre").hidden = !poster;
        $i("v-prix-original").textContent = c.dispo ? c.prix : "Indisponible";
        $i("v-prix-poster").textContent = prixPoster(c, ch.cadre) + " ₪";
        $i("v-note").textContent = poster
            ? "Reproduction imprimée de ce tableau. Format confirmé avec vous sur WhatsApp."
            : "Pièce unique, peinte ou dessinée à la main.";

        $i("produit-prix").textContent = art.prix + " ₪";
        $i("produit-prix").hidden = !c.prix;
        const stock = document.querySelector(".produit-stock");
        stock.hidden = !c.prix;
        stock.className = "produit-stock " + (ok ? "ok" : "rupture");
        stock.textContent = poster ? "● Poster imprimé disponible" : c.dispo ? "● Pièce unique, disponible" : "● Indisponible";

        const cmd = $i("produit-commander");
        cmd.hidden = !c.prix;
        cmd.disabled = !ok;
        cmd.textContent = ok ? "Commander sur WhatsApp" : "Indisponible";

        const b = $i("produit-panier"), f = $i("produit-favori");
        b.hidden = !c.prix;
        b.disabled = dedans || !ok;
        b.textContent = dedans ? "✓ Dans le panier" : ok ? "Ajouter au panier · " + art.prix + " ₪" : "Indisponible";
        f.hidden = !c.prix;
        f.textContent = fav ? "♥ Dans mes favoris" : "♡ Ajouter aux favoris";
        f.setAttribute("aria-pressed", fav);
    };

    window.EG = { ajouter, articleDe, articlePoster, basculerFavori, estFavori: (f) => getFavoris().includes(f), dansPanier: (f) => getPanier().some((x) => x.id === "creation:" + f), aDansPanier: (id) => getPanier().some((x) => x.id === id), articleChoix };

    // Bouton retour en haut
    const haut = document.createElement("button");
    haut.type = "button"; haut.id = "haut"; haut.setAttribute("aria-label", "Retour en haut"); haut.textContent = "↑";
    haut.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(haut);
    const majHaut = () => {
        const enBas = innerHeight + scrollY >= document.documentElement.scrollHeight - 140; // tout en bas : la flèche se cache
        haut.classList.toggle("visible", scrollY > 500 && !enBas);
    };
    addEventListener("scroll", majHaut, { passive: true });
    addEventListener("resize", majHaut);
    majHaut();

    // Page commande sur mesure : ajout au panier
    const bc = document.getElementById("bouton-commande");
    if (bc) {
        const b = document.createElement("button");
        b.type = "button"; b.className = "bouton contour"; b.textContent = "Ajouter au panier";
        bc.before(b);
        b.addEventListener("click", () => {
            const f = document.getElementById("photo-client").files[0], taille = document.getElementById("taille").value;
            const style = document.getElementById("style").value, idee = document.getElementById("message-commande").value.trim();
            const err = document.getElementById("erreur-commande");
            const manque = !f ? "Ajoutez une photo." : !taille ? "Choisissez une taille." : !style ? "Choisissez un style." : !idee ? "Décrivez votre idée." : "";
            if (manque) return etat(err, manque, "erreur");
            err.className = "message-etat";
            ajouter({ id: "sur-mesure:" + Date.now(), titre: "Tableau sur mesure " + taille + " cm", prix: PRIX_TAILLES[taille], type: "Sur mesure", detail: "Style : " + style + " | Idée : " + idee + (window.EG_CADEAU ? window.EG_CADEAU(true) : ""), photo: f.name });
            toast("✓ Ajouté au panier. Retrouvez-le dans votre panier.");
        });
    }

    // Comptes
    const getUsers = () => lire(K.users, {});
    const userCourant = () => { const e = lire(K.session, null), u = e && getUsers()[e]; return u ? { email: e, ...u } : null; };
    async function hacher(mdp, email) {
        const t = email + ":" + mdp;
        if (window.crypto && crypto.subtle) {
            const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t));
            return [...new Uint8Array(h)].map((x) => x.toString(16).padStart(2, "0")).join("");
        }
        return btoa(unescape(encodeURIComponent(t)));
    }
    const sauverUser = (email, donnees) => { const u = getUsers(); u[email] = { ...u[email], ...donnees }; ecrire(K.users, u); };
    window.EG_COMPTE = { courant: userCourant, sauver: sauverUser };

    // Inscription / désinscription aux nouveautés par e-mail (reçue dans votre boîte via Formspree)
    async function inscriptionMail(email, nom, actif) {
        try {
            const r = await fetch("https://formspree.io/f/xeaeoegv", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ email, nom, _subject: (actif ? "Inscription" : "Désinscription") + " aux nouveautés - Ethan Gallery", message: (actif ? "Cette personne souhaite recevoir les nouveautés par e-mail : " : "Cette personne ne souhaite plus recevoir les nouveautés par e-mail : ") + email }) });
            return r.ok;
        } catch { return false; }
    }

    // Page panier
    const zp = document.getElementById("contenu-panier");
    function rendrePanier() {
        const p = getPanier(), u = userCourant();
        if (!p.length) {
            zp.innerHTML = '<div class="panier-vide"><span class="panier-vide-ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21.5 8H6"/></svg></span><p>Votre panier est vide.</p><a class="bouton" href="creations.html">Voir les créations</a></div>';
            return;
        }
        const total = p.reduce((s, i) => s + i.prix, 0);
        zp.innerHTML = '<ul class="lignes-panier">' + p.map((i, n) =>
            '<li>' + (i.image ? '<img src="./' + esc(i.image) + '" alt="">' : '<span class="pastille" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg></span>') +
            '<div><strong>' + esc(i.titre) + '</strong><small>' + esc(i.type) + (i.detail ? " · " + esc(i.detail) : "") + '</small></div>' +
            '<span class="ligne-prix">' + i.prix + ' ₪</span>' +
            '<button type="button" class="retirer" data-n="' + n + '" aria-label="Retirer ' + esc(i.titre) + '">✕</button></li>').join("") +
            '</ul><p class="total-panier">Total : <strong>' + total + ' ₪</strong></p>' +
            '<div class="formulaire"><div class="champ"><label for="c-nom">Votre nom</label><input id="c-nom" type="text" autocomplete="name" value="' + esc(u ? u.nom : "") + '"></div>' +
            '<div class="champ"><label for="c-tel">Téléphone (facultatif)</label><input id="c-tel" type="tel" autocomplete="tel" value="' + esc(u ? u.tel || "" : "") + '"></div>' +
            '<div class="champ"><label for="c-note">Message (facultatif)</label><textarea id="c-note" placeholder="Livraison, remise en main propre, questions..."></textarea></div>' +
            '<p id="c-erreur" class="message-etat" role="alert"></p>' +
            (u ? '<button type="button" class="bouton whatsapp" id="envoyer-commande">Commander sur WhatsApp</button>' : '<div class="porte-compte petite"><strong>Un compte est nécessaire pour commander</strong><p>Créez-le en 30 secondes : votre panier est conservé.</p><div class="porte-actions"><a class="bouton" href="compte.html?commande=1#inscription" data-retour="panier.html">Créer un compte</a><a class="bouton contour" href="compte.html?commande=1" data-retour="panier.html">J\'ai déjà un compte</a></div></div>') +
            '<button type="button" class="bouton contour" id="vider-panier">Vider le panier</button></div>';
    }
    if (zp) {
        rendrePanier();
        zp.addEventListener("click", (e) => {
            const r = e.target.closest(".retirer");
            if (r) { const p = getPanier(); p.splice(Number(r.dataset.n), 1); setPanier(p); rendrePanier(); return; }
            if (e.target.id === "vider-panier") { setPanier([]); rendrePanier(); return; }
            const lc = e.target.closest("[data-retour]"); if (lc) { try { sessionStorage.setItem("eg_retour", lc.dataset.retour); } catch { } return; }
            if (e.target.id === "envoyer-commande" && exigerCompte()) return;
            if (e.target.id !== "envoyer-commande") return;
            const nom = document.getElementById("c-nom").value.trim(), tel = document.getElementById("c-tel").value.trim(), note = document.getElementById("c-note").value.trim();
            if (!nom) return etat(document.getElementById("c-erreur"), "Indiquez votre nom pour la commande.", "erreur");
            const p = getPanier(), total = p.reduce((s, i) => s + i.prix, 0), u = userCourant();
            const photos = p.filter((i) => i.photo).map((i) => i.photo);
            const msg = "🛒 NOUVELLE COMMANDE - ETHAN GALLERY\n\n" +
                "👤 Nom : " + nom + "\n" + (tel ? "📞 Téléphone : " + tel + "\n" : "") + (u ? "📧 Compte : " + u.email + "\n🗣️ Contact préféré : " + (u.contact || "WhatsApp") + "\n📦 Réception : " + (u.reception || "À convenir") + "\n" + (u.adresse ? "📍 Adresse : " + u.adresse + (u.ville ? ", " + u.ville : "") + "\n" : "") : "") +
                "\n🧾 ARTICLES (" + p.length + ")\n" +
                p.map((i, n) => (n + 1) + ". " + i.titre + "\n   • Type : " + i.type + (i.detail ? "\n   • " + i.detail : "") + "\n   • Prix : " + i.prix + " ₪").join("\n") +
                "\n\n💰 TOTAL : " + total + " ₪\n" + (note ? "\n📝 Message : " + note + "\n" : "") +
                (photos.length ? "\n📸 Photos à envoyer juste après ce message : " + photos.join(", ") + "\n" : "") +
                "\nMerci de me confirmer la disponibilité et le prix final.";
            window.open(lienWhatsApp(msg), "_blank", "noopener");
            if (u) sauverUser(u.email, { commandes: [{ date: new Date().toLocaleDateString("fr-FR"), total, articles: p.map((i) => i.titre) }, ...(u.commandes || [])].slice(0, 20) });
            setPanier([]);
            zp.innerHTML = '<p class="message-etat visible ok">WhatsApp vient de s\'ouvrir avec votre commande. Envoyez le message' + (photos.length ? ", puis vos photos" : "") + ' dans la conversation.</p><a class="bouton" href="creations.html">Continuer mes achats</a>';
        });
    }

    // Page compte
    const zc = document.getElementById("zone-compte");
    function rendreCompte(mode = "connexion") {
        const u = userCourant();
        if (!u) {
            const ins = mode === "inscription";
            const pourCommander = /[?&]commande=1/.test(location.search);
            zc.innerHTML = (pourCommander ? '<p class="message-etat visible info-commande">Pour passer commande, connectez-vous ou créez un compte gratuit. Vous reviendrez ensuite directement à votre commande.</p>' : "") + '<div class="onglets"><button type="button" data-m="connexion"' + (ins ? "" : ' class="actif"') + '>Connexion</button><button type="button" data-m="inscription"' + (ins ? ' class="actif"' : "") + '>Créer un compte</button></div>' +
                '<div class="formulaire">' + (ins ? '<div class="champ"><label for="a-nom">Nom</label><input id="a-nom" type="text" autocomplete="name"></div>' : "") +
                '<div class="champ"><label for="a-email">E-mail</label><input id="a-email" type="email" autocomplete="email"></div>' +
                '<div class="champ"><label for="a-mdp">Mot de passe' + (ins ? " (6 caractères minimum)" : "") + '</label><input id="a-mdp" type="password" autocomplete="' + (ins ? "new-password" : "current-password") + '"></div>' +
                '<p id="a-msg" class="message-etat" role="alert"></p><button type="button" class="bouton" id="a-valider">' + (ins ? "Créer mon compte" : "Me connecter") + '</button></div>';
            zc.querySelectorAll(".onglets button").forEach((b) => b.addEventListener("click", () => rendreCompte(b.dataset.m)));
            document.getElementById("a-valider").addEventListener("click", async () => {
                const msg = document.getElementById("a-msg"), email = document.getElementById("a-email").value.trim().toLowerCase(), mdp = document.getElementById("a-mdp").value;
                const users = getUsers();
                if (!/^\S+@\S+\.\S+$/.test(email)) return etat(msg, "Entrez une adresse e-mail valide.", "erreur");
                if (ins) {
                    const nom = document.getElementById("a-nom").value.trim();
                    if (!nom) return etat(msg, "Indiquez votre nom.", "erreur");
                    if (mdp.length < 6) return etat(msg, "Le mot de passe doit contenir au moins 6 caractères.", "erreur");
                    if (users[email]) return etat(msg, "Un compte existe déjà avec cet e-mail. Connectez-vous.", "erreur");
                    sauverUser(email, { nom, tel: "", adresse: "", hash: await hacher(mdp, email), commandes: [] });
                } else if (!users[email] || users[email].hash !== await hacher(mdp, email)) {
                    return etat(msg, "E-mail ou mot de passe incorrect.", "erreur");
                }
                ecrire(K.session, email);
                let retour = null; try { retour = sessionStorage.getItem("eg_retour"); sessionStorage.removeItem("eg_retour"); } catch { }
                if (retour && /^[a-z0-9_-]+\.html(\?[^#]*)?$/i.test(retour)) { location.href = retour; return; }
                rendreCompte();
            });
            return;
        }
        const cmds = u.commandes || [], favs = getFavoris().map((f) => CREATIONS.find((c) => c.fichier === f)).filter(Boolean);
        const opt = (liste, val) => liste.map((o) => '<option value="' + o + '"' + (o === val ? " selected" : "") + '>' + o + '</option>').join("");
        const champ = (id, lib, val, type, ac) => '<div class="champ"><label for="' + id + '">' + lib + '</label><input id="' + id + '" type="' + (type || "text") + '" value="' + esc(val || "") + '"' + (ac ? ' autocomplete="' + ac + '"' : "") + '></div>';
        const carte = (titre, corps, large) => '<section class="carte-compte' + (large ? " large" : "") + '"><h2>' + titre + '</h2>' + corps + '</section>';
        const msg = (id) => '<p id="' + id + '" class="message-etat" role="status"></p>';
        zc.innerHTML = '<div class="profil-tete"><span class="avatar">' + esc(u.nom.trim().charAt(0).toUpperCase() || "?") + '</span><div><strong>' + esc(u.nom) + '</strong><small>' + esc(u.email) + '</small></div><button type="button" class="bouton contour" id="p-deco">Me déconnecter</button></div>' +
            '<div class="grille-compte">' +
            carte("Mes informations", champ("p-nom", "Nom", u.nom, "text", "name") + champ("p-tel", "Téléphone", u.tel, "tel", "tel") + champ("p-ville", "Ville", u.ville, "text", "address-level2") +
                '<div class="champ"><label for="p-adr">Adresse de livraison</label><textarea id="p-adr">' + esc(u.adresse || "") + '</textarea></div>' +
                '<div class="champ"><label for="p-contact">Contact préféré</label><select id="p-contact">' + opt(["WhatsApp", "Appel", "E-mail", "Instagram"], u.contact || "WhatsApp") + '</select></div>' +
                '<div class="champ"><label for="p-recep">Mode de réception</label><select id="p-recep">' + opt(["À convenir", "Remise en main propre", "Livraison"], u.reception || "À convenir") + '</select></div>' +
                msg("p-msg") + '<button type="button" class="bouton" id="p-sauver">Enregistrer</button>') +
            carte("Mes favoris (" + favs.length + ")", favs.length ? '<ul class="lignes-panier compact">' + favs.map((c) => '<li><img src="./' + esc(c.fichier) + '" alt=""><div><strong>' + esc(c.titre) + '</strong><small>' + esc(c.prix || "") + (c.dispo ? "" : " · indisponible") + '</small></div>' +
                (c.prix && c.dispo ? '<button type="button" class="mini" data-add="' + esc(c.fichier) + '">Ajouter</button>' : "") + '<button type="button" class="retirer" data-rm="' + esc(c.fichier) + '" aria-label="Retirer ' + esc(c.titre) + ' des favoris">✕</button></li>').join("") + '</ul>' : '<p>Aucun favori. Ouvrez un tableau et cliquez sur ♡.</p>') +
            carte("Sécurité", champ("s-ancien", "Mot de passe actuel", "", "password", "current-password") + champ("s-nouveau", "Nouveau mot de passe (6 caractères minimum)", "", "password", "new-password") + msg("s-msg") + '<button type="button" class="bouton contour" id="s-change">Changer le mot de passe</button>') +
            carte("Mes commandes", cmds.length ? '<ul class="lignes-panier compact">' + cmds.map((c) => '<li><div><strong>' + esc(c.date) + '</strong><small>' + c.articles.map(esc).join(", ") + '</small></div><span class="ligne-prix">' + c.total + ' ₪</span></li>').join("") + '</ul><button type="button" class="lien-danger" id="d-histo">Vider l\'historique</button>' : "<p>Aucune commande envoyée pour le moment.</p>") +
            '<div id="notifications">' + carte("Mes notifications",
                '<label class="reglage" for="n-site"><span class="reglage-txt"><strong>Notifications sur le site</strong><small>Une cloche vous prévient des nouveaux tableaux quand vous êtes connecté.</small></span><input type="checkbox" role="switch" class="interrupteur" id="n-site"' + (u.notifSite !== false ? " checked" : "") + '></label>' +
                '<label class="reglage" for="n-mail"><span class="reglage-txt"><strong>Nouveautés par e-mail</strong><small>Un e-mail à l\'adresse de votre compte quand un nouveau tableau est publié.</small></span><input type="checkbox" role="switch" class="interrupteur" id="n-mail"' + (u.notifMail ? " checked" : "") + '></label>' +
                '<h3 class="n-sous">Ce que je veux recevoir</h3>' +
                [["nouveau", "Nouveaux tableaux", "Dès qu'une création est ajoutée."], ["promo", "Offres", "Réductions et occasions à ne pas manquer."], ["info", "Infos du site", "Nouveautés pratiques, annonces."]].map((o) => '<label class="reglage" for="nt-' + o[0] + '"><span class="reglage-txt"><strong>' + o[1] + '</strong><small>' + o[2] + '</small></span><input type="checkbox" role="switch" class="interrupteur n-opt" data-type="' + o[0] + '" id="nt-' + o[0] + '"' + (!u.notifTypes || u.notifTypes[o[0]] !== false ? " checked" : "") + '></label>').join("") +
                '<label class="reglage" for="n-toast"><span class="reglage-txt"><strong>Message à ma connexion</strong><small>Un petit message vous signale les notifications non lues quand vous arrivez sur le site.</small></span><input type="checkbox" role="switch" class="interrupteur" id="n-toast"' + (u.notifToast !== false ? " checked" : "") + '></label>' + msg("n-msg")) + '</div>' +
            carte("Mes données", '<p>Téléchargez une copie de vos informations ou supprimez votre compte.</p><button type="button" class="bouton contour" id="d-export">Télécharger mes données</button><button type="button" class="lien-danger" id="p-suppr">Supprimer mon compte</button>') +
            '</div>';
        const $$ = (id) => document.getElementById(id);
        if (location.hash === "#notifications") setTimeout(() => { const n = $$("notifications"); if (n) n.scrollIntoView({ block: "start" }); }, 60);
        $$("p-sauver").addEventListener("click", () => {
            const nom = $$("p-nom").value.trim();
            if (!nom) return etat($$("p-msg"), "Le nom ne peut pas être vide.", "erreur");
            sauverUser(u.email, { nom, tel: $$("p-tel").value.trim(), ville: $$("p-ville").value.trim(), adresse: $$("p-adr").value.trim(), contact: $$("p-contact").value, reception: $$("p-recep").value });
            etat($$("p-msg"), "Informations enregistrées.", "ok");
        });
        $$("n-site").addEventListener("change", (e) => {
            sauverUser(u.email, { notifSite: e.target.checked });
            etat($$("n-msg"), e.target.checked ? "Notifications du site activées." : "Notifications du site désactivées.", "ok");
            if (window.EG_NOTIF) window.EG_NOTIF.maj();
        });
        document.querySelectorAll(".n-opt").forEach((box) => box.addEventListener("change", () => {
            const types = { ...((userCourant() || {}).notifTypes || {}) }; types[box.dataset.type] = box.checked;
            sauverUser(u.email, { notifTypes: types });
            etat($$("n-msg"), "Préférences enregistrées.", "ok");
            if (window.EG_NOTIF) window.EG_NOTIF.maj();
        }));
        $$("n-toast").addEventListener("change", (e) => { sauverUser(u.email, { notifToast: e.target.checked }); etat($$("n-msg"), "Préférences enregistrées.", "ok"); });
        $$("n-mail").addEventListener("change", async (e) => {
            const box = e.target, voulu = box.checked;
            box.disabled = true; etat($$("n-msg"), "Enregistrement…", "ok");
            const ok = await inscriptionMail(u.email, u.nom, voulu);
            box.disabled = false;
            if (ok) { sauverUser(u.email, { notifMail: voulu }); etat($$("n-msg"), voulu ? "C'est noté : vous recevrez les nouveautés par e-mail." : "Vous ne recevrez plus les nouveautés par e-mail.", "ok"); }
            else { box.checked = !voulu; etat($$("n-msg"), "Impossible d'enregistrer pour le moment. Vérifiez votre connexion et réessayez.", "erreur"); }
        });
        $$("s-change").addEventListener("click", async () => {
            const m = $$("s-msg"), nouveau = $$("s-nouveau").value;
            if (u.hash !== await hacher($$("s-ancien").value, u.email)) return etat(m, "Le mot de passe actuel est incorrect.", "erreur");
            if (nouveau.length < 6) return etat(m, "Le nouveau mot de passe doit contenir au moins 6 caractères.", "erreur");
            sauverUser(u.email, { hash: await hacher(nouveau, u.email) });
            $$("s-ancien").value = ""; $$("s-nouveau").value = "";
            etat(m, "Mot de passe modifié.", "ok");
        });
        zc.querySelectorAll("[data-add]").forEach((b) => b.addEventListener("click", () => { ajouter(articleDe(CREATIONS.find((c) => c.fichier === b.dataset.add))); }));
        zc.querySelectorAll("[data-rm]").forEach((b) => b.addEventListener("click", () => { basculerFavori(b.dataset.rm); rendreCompte(); }));
        if ($$("d-histo")) $$("d-histo").addEventListener("click", () => { if (confirm(tr("Vider l'historique de vos commandes ?"))) { sauverUser(u.email, { commandes: [] }); rendreCompte(); } });
        $$("d-export").addEventListener("click", () => {
            const { hash, ...donnees } = u;
            const a = document.createElement("a");
            a.href = URL.createObjectURL(new Blob([JSON.stringify(donnees, null, 2)], { type: "application/json" }));
            a.download = "mes-donnees-ethan-gallery.json"; a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        });
        $$("p-deco").addEventListener("click", () => { localStorage.removeItem(K.session); rendreCompte(); });
        $$("p-suppr").addEventListener("click", () => {
            if (!confirm(tr("Supprimer définitivement votre compte et votre historique ?"))) return;
            const users = getUsers(); delete users[u.email]; ecrire(K.users, users); localStorage.removeItem(K.session); rendreCompte();
        });
    }
    if (zc) rendreCompte(location.hash === "#inscription" ? "inscription" : "connexion");

    // Page Paramètres (sans compte : tout est gardé sur l'appareil)
    const zr = document.getElementById("zone-parametres");
    function rendreParametres() {
        const pr = getPrefs(), lg = window.EG_LANGUE ? window.EG_LANGUE.lire() : "fr";
        const seg = (nom, liste, val) => '<div class="seg" role="group" data-pref="' + nom + '">' + liste.map(([v, lib, ico]) =>
            '<button type="button" data-val="' + v + '" aria-pressed="' + (String(val) === v) + '">' + (ico || "") + '<span>' + lib + '</span></button>').join("") + '</div>';
        const ligne = (titre, aide, ctrl) => '<div class="reglage"><div class="reglage-txt"><strong>' + titre + '</strong>' + (aide ? '<small>' + aide + '</small>' : "") + '</div>' + ctrl + '</div>';
        const inter = (id, titre, aide, on) => '<label class="reglage" for="' + id + '"><span class="reglage-txt"><strong>' + titre + '</strong><small>' + aide + '</small></span><input type="checkbox" role="switch" class="interrupteur" id="' + id + '"' + (on ? " checked" : "") + '></label>';
        zr.innerHTML =
            '<section class="carte-reglages"><h2>Apparence</h2>' +
            ligne("Thème", "Automatique suit le réglage de votre téléphone ou de votre ordinateur.", seg("theme", [["clair", "Clair", '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'], ["sombre", "Sombre", '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'], ["auto", "Automatique", '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>']], pr.theme)) +
            ligne("Taille du texte", "", seg("texte", [["normal", "Normale"], ["grand", "Grande"], ["tres-grand", "Très grande"]], pr.texte)) + '</section>' +
            '<section class="carte-reglages"><h2>Mouvement</h2>' +
            inter("r-anim", "Animations activées", "Effets d\'apparition et survols animés.", pr.anim) +
            inter("r-trans", "Transition entre les pages", "Fondu rapide quand vous changez de page.", pr.transitions) + '</section>' +
            '<section class="carte-reglages"><h2>Accessibilité</h2>' +
            inter("r-contraste", "Contraste renforcé", "Textes plus foncés (ou plus clairs en mode sombre) et bordures plus visibles.", pr.contraste) +
            inter("r-police", "Police facile à lire", "Une police plus large et plus espacée, pour lire sans effort.", pr.police === "lisible") +
            inter("r-liens", "Souligner les liens", "Les liens sont toujours soulignés pour mieux les repérer.", pr.liens) + '</section>' +
            '<section class="carte-reglages"><h2>Affichage</h2>' +
            inter("r-flottants", "Boutons WhatsApp et Instagram flottants", "Les deux boutons ronds en bas de l\'écran. Désactivez-les si vous les trouvez gênants.", pr.flottants !== false) + '</section>' +
            '<section class="carte-reglages"><h2>Langue</h2>' +
            ligne("Langue du site", "", '<div class="seg" role="group" data-langue data-no-trad>' + [["fr", "Français"], ["en", "English"], ["he", "עברית"]].map(([v, n]) =>
                '<button type="button" data-val="' + v + '" lang="' + v + '" aria-pressed="' + (lg === v) + '"><span>' + n + '</span></button>').join("") + '</div>') + '</section>' +
            '<section class="carte-reglages"><h2>Notifications</h2>' + (userCourant()
                ? ligne("Nouveautés et e-mails", "Choisissez comment être prévenu des nouveaux tableaux.", '<a class="mini-bouton" href="compte.html#notifications">Gérer</a>')
                : ligne("Être prévenu des nouveaux tableaux", "Connectez-vous pour recevoir des notifications sur le site et par e-mail.", '<a class="mini-bouton" href="compte.html">Me connecter</a>')) + '</section>' +
            '<section class="carte-reglages"><h2>Mes données</h2>' +
            '<p class="note-donnees">Tout reste sur cet appareil : le site ne vous suit pas. <a href="legal.html#confidentialite">En savoir plus</a></p>' +
            ligne("Télécharger mes données", "Favoris, panier, compte et réglages dans un fichier.", '<button type="button" class="mini-bouton" id="r-export">Télécharger</button>') +
            ligne("Vider mes favoris", "", '<button type="button" class="mini-bouton" id="r-fav" data-danger>Vider</button>') +
            ligne("Vider mon panier", "", '<button type="button" class="mini-bouton" id="r-panier" data-danger>Vider</button>') +
            ligne("Tout supprimer", "Compte, favoris, panier et réglages de cet appareil.", '<button type="button" class="mini-bouton danger" id="r-tout" data-danger>Tout supprimer</button>') + '</section>' +
            '<p class="reglages-bas"><button type="button" class="lien-danger" id="r-reset">Réinitialiser les réglages</button></p>';
    }
    if (zr) {
        rendreParametres();
        zr.addEventListener("click", (e) => {
            const b = e.target.closest(".seg button");
            if (b) {
                const g = b.parentElement;
                if (g.hasAttribute("data-langue")) { if (window.EG_LANGUE) window.EG_LANGUE.definir(b.dataset.val); }
                else setPrefs({ [g.dataset.pref]: b.dataset.val });
                g.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
                return;
            }
            if (e.target.id === "r-reset") { ecrire(K.prefs, PREFS0); appliquerPrefs(); rendreParametres(); return; }
            const bt = e.target.closest(".mini-bouton");
            if (!bt) return;
            // les actions qui effacent demandent une seconde confirmation (4 secondes)
            if (bt.hasAttribute("data-danger") && !bt.dataset.conf) {
                bt.dataset.conf = "1"; bt.dataset.txt = bt.textContent; bt.textContent = "Cliquer pour confirmer"; bt.classList.add("danger");
                setTimeout(() => { if (bt.isConnected && bt.dataset.conf) { bt.textContent = bt.dataset.txt; delete bt.dataset.conf; if (bt.id !== "r-tout") bt.classList.remove("danger"); } }, 4000);
                return;
            }
            if (bt.id === "r-export") {
                const out = {};
                try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith("eg_")) out[k] = lire(k, null); } } catch { }
                const a = document.createElement("a");
                a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 2)], { type: "application/json" }));
                a.download = "mes-donnees-ethan-gallery.json"; document.body.appendChild(a); a.click(); a.remove();
                toast("Fichier téléchargé");
            } else if (bt.id === "r-fav") { ecrire(K.favoris, []); toast("Favoris vidés"); }
            else if (bt.id === "r-panier") { setPanier([]); toast("Panier vidé"); }
            else if (bt.id === "r-tout") {
                try { Object.keys(localStorage).filter((k) => k.startsWith("eg_")).forEach((k) => localStorage.removeItem(k)); } catch { }
                location.reload();
            }
            if (bt.dataset.conf) { bt.textContent = bt.dataset.txt; delete bt.dataset.conf; if (bt.id !== "r-tout") bt.classList.remove("danger"); }
        });
        zr.addEventListener("change", (e) => {
            if (e.target.id === "r-anim") setPrefs({ anim: e.target.checked });
            if (e.target.id === "r-trans") setPrefs({ transitions: e.target.checked });
            if (e.target.id === "r-contraste") setPrefs({ contraste: e.target.checked });
            if (e.target.id === "r-police") setPrefs({ police: e.target.checked ? "lisible" : "normal" });
            if (e.target.id === "r-liens") setPrefs({ liens: e.target.checked });
            if (e.target.id === "r-flottants") setPrefs({ flottants: e.target.checked });
        });
        // si la langue change ailleurs, on garde les boutons à jour
        document.addEventListener("langue-changee", (ev) => zr.querySelectorAll("[data-langue] button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.val === ev.detail)));
    }
})();

// =====================================================
// PAGE CRÉATIONS (façon boutique : recherche, filtres, tri, panier)
// =====================================================
(() => {
    const zone = document.querySelector(".cartes-projets");
    if (!zone) return;
    const CRAYON = ["tate langdon.jpeg", "batman qui rit.jpeg", "it.jpeg", "dessin joker.jpg.jpeg"];
    const UNIVERS = {
        "Manga et anime": ["sukuna.jpeg", "pain naruto shippuden.jpeg", "ken kaneki.jpeg", "eijiro kirishima.jpeg", "ichigo.jpeg", "gohan.jpeg", "black goku.jpeg", "gohan beast.jpeg", "kid buu.jpeg"],
        "Super-héros et comics": ["deadpool in love.jpeg", "moon knight.jpeg", "spider team.jpeg", "batman qui rit.jpeg", "deadpool.jpeg", "dessin joker.jpg.jpeg"],
        "Horreur et séries": ["tate langdon.jpeg", "eddie stranger things.jpeg", "ghost face.jpeg", "it.jpeg"]
    };
    const liste = CREATIONS.filter((c) => c.prix).map((c) => ({ ...c,
        univers: Object.keys(UNIVERS).find((k) => UNIVERS[k].includes(c.fichier)) || "Musique, jeux et art",
        tech: CRAYON.includes(c.fichier) ? "Crayon" : "Couleur", p: Number((c.prix.match(/\d+/) || [0])[0]) }));
    const f = { q: "", univers: "", tech: "" };
    const TRIS = { prix_asc: (a, b) => a.p - b.p, prix_desc: (a, b) => b.p - a.p, nom: (a, b) => a.titre.localeCompare(b.titre, "fr"), dispo: (a, b) => b.dispo - a.dispo };
    const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    function facette(id, cle, valeurs) {
        const z = $(id); z.replaceChildren();
        ["", ...valeurs].forEach((v) => {
            const b = document.createElement("button");
            b.type = "button"; b.setAttribute("aria-pressed", f[cle] === v);
            b.textContent = (v || "Tout") + " (" + liste.filter((c) => !v || c[cle] === v).length + ")";
            b.addEventListener("click", () => { f[cle] = v; afficher(); });
            z.appendChild(b);
        });
    }
    function carte(c) {
        const fav = window.EG && EG.estFavori(c.fichier);
        const el = document.createElement("article");
        el.className = "projet" + (c.dispo ? "" : " rupture");
        el.innerHTML = `<button type="button" class="projet-visuel" aria-label="Voir ${c.titre}"><img loading="lazy" src="./${c.fichier}" alt="Tableau ${c.titre}">${c.dispo ? "" : '<span class="badge-rupture">Original vendu</span>'}</button>` +
            `<button type="button" class="coeur" aria-pressed="${!!fav}" aria-label="Favori : ${c.titre}">${fav ? "♥" : "♡"}</button>` +
            `<div class="projet-corps"><small>${c.univers}, ${c.tech.toLowerCase()}</small><h3>${c.titre}</h3><p class="prix"></p><p class="stock"></p>` +
            `<select class="version" aria-label="Version de ${c.titre}"><option value="original"${c.dispo ? "" : " disabled"}>Original · ${c.dispo ? c.prix : "vendu"}</option><option value="poster"></option></select>` +
            `<select class="cadre-poster" aria-label="Cadre du poster ${c.titre}"><option value="sans">Sans cadre</option><option value="avec">Avec cadre (+${POSTER.SUPPLEMENT_CADRE} ₪)</option></select>` +
            `<button type="button" class="bouton ajout"></button></div>`;
        const vSel = el.querySelector(".version"), cSel = el.querySelector(".cadre-poster"), btn = el.querySelector(".ajout");
        const prix = el.querySelector(".prix"), stock = el.querySelector(".stock");
        const maj = () => {
            const ch = choixDe(c), poster = ch.v === "poster", art = EG.articleChoix(c, ch), ok = poster || c.dispo, dedans = EG.aDansPanier(art.id);
            vSel.value = ch.v; cSel.value = ch.cadre ? "avec" : "sans"; cSel.hidden = !poster;
            vSel.options[1].textContent = "Poster · " + prixPoster(c, ch.cadre) + " ₪";
            prix.textContent = art.prix + " ₪";
            stock.className = "stock " + (ok ? "ok" : "non");
            stock.textContent = poster ? "● Poster disponible" : c.dispo ? "● Original disponible" : "● Indisponible";
            btn.disabled = !ok || dedans;
            btn.textContent = !ok ? "Indisponible" : dedans ? "✓ Dans le panier" : "Ajouter au panier";
        };
        el.querySelector(".projet-visuel").addEventListener("click", () => ouvrirCreation(c));
        el.querySelector("h3").addEventListener("click", () => ouvrirCreation(c));
        el.querySelector(".coeur").addEventListener("click", () => { EG.basculerFavori(c.fichier); afficher(); });
        vSel.addEventListener("change", () => { choixDe(c).v = vSel.value; maj(); });
        cSel.addEventListener("change", () => { choixDe(c).cadre = cSel.value === "avec"; maj(); });
        btn.addEventListener("click", () => { if (btn.disabled) return; EG.ajouter(EG.articleChoix(c, choixDe(c))); afficher(); });
        maj();
        return el;
    }
    function afficher() {
        facette("f-univers", "univers", Object.keys(UNIVERS).concat("Musique, jeux et art"));
        facette("f-tech", "tech", ["Couleur", "Crayon"]);
        const [lo, hi] = ($("filtre-prix").value || "0-99999").split("-").map(Number);
        const r = liste.filter((c) => (!f.q || norm(c.titre + " " + c.mots.join(" ")).includes(norm(f.q))) && (!f.univers || c.univers === f.univers) && (!f.tech || c.tech === f.tech) &&
            (!$("filtre-dispo").checked || c.dispo) && c.p >= lo && c.p <= hi);
        if (TRIS[$("tri").value]) r.sort(TRIS[$("tri").value]);
        $("nb-resultats").textContent = r.length + (r.length > 1 ? " tableaux" : " tableau");
        zone.replaceChildren(...r.map(carte));
        if (!r.length) zone.innerHTML = '<p class="vide">Aucun tableau ne correspond à ces filtres. Utilisez « Réinitialiser les filtres » pour tout revoir.</p>';
    }
    $("recherche").addEventListener("input", (e) => { f.q = e.target.value.trim(); afficher(); });
    ["tri", "filtre-prix", "filtre-dispo"].forEach((id) => $(id).addEventListener("change", afficher));
    $("reinitialiser").addEventListener("click", () => { Object.assign(f, { q: "", univers: "", tech: "" }); $("recherche").value = ""; $("filtre-prix").value = ""; $("filtre-dispo").checked = false; $("tri").value = "pertinence"; afficher(); });
    if ($("fenetre-produit")) $("fenetre-produit").addEventListener("close", afficher);
    afficher();
})();

// =====================================================
// PAGE COMMANDE : tuiles de choix + récapitulatif
// =====================================================
(() => {
    if (!$("bouton-commande")) return;
    const champs = { taille: $("taille"), style: $("style") }, photo = $("photo-client"), idee = $("message-commande");
    document.querySelectorAll(".tuiles").forEach((g) => g.addEventListener("click", (e) => {
        const t = e.target.closest("[data-val]");
        if (!t) return;
        const sel = champs[g.dataset.cible];
        sel.value = t.dataset.val;
        sel.dispatchEvent(new Event("change", { bubbles: true }));
        g.querySelectorAll("[data-val]").forEach((x) => x.setAttribute("aria-checked", x === t));
    }));
    const maj = () => {
        const lib = (s) => s.value ? s.selectedOptions[0].textContent : "À choisir";
        [["r-photo", photo.files[0] ? photo.files[0].name : "À ajouter", !!photo.files[0]], ["r-taille", lib(champs.taille), !!champs.taille.value],
         ["r-style", lib(champs.style), !!champs.style.value], ["r-idee", idee.value.trim() ? "Renseignée" : "À décrire", !!idee.value.trim()]]
            .forEach(([id, t, ok]) => { $(id).textContent = t; $(id).closest("li").classList.toggle("ok", ok); });
        $("r-prix").textContent = PRIX_TAILLES[champs.taille.value] ? PRIX_TAILLES[champs.taille.value] + " ₪" : "—";
    };
    ["change", "input"].forEach((ev) => document.addEventListener(ev, (e) => { if (e.target.closest && e.target.closest(".formulaire")) maj(); }));
    maj();

    // ---- Étapes : validation claire + passage automatique à la suivante ----
    const etapes = [...document.querySelectorAll(".etape-commande")];
    const pastilles = [...document.querySelectorAll("#progres button")];
    const suite = $("etape-suite");
    const faits = () => [!!photo.files[0], !!champs.taille.value, !!champs.style.value, !!idee.value.trim()];
    etapes.forEach((e) => { const ok = document.createElement("span"); ok.className = "etape-ok"; ok.textContent = "✓ Validé"; e.querySelector(":scope > div").prepend(ok); });
    function colorer() {
        const f = faits(), cur = f.indexOf(false);
        etapes.forEach((e, i) => { e.classList.toggle("fait", f[i]); e.classList.toggle("actuelle", i === cur); });
        pastilles.forEach((b, i) => {
            b.parentElement.classList.toggle("fait", f[i]); b.parentElement.classList.toggle("actuelle", i === cur);
            b.querySelector("b").textContent = f[i] ? "✓" : String(i + 1);
            if (i === cur) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
        });
        if (suite) suite.hidden = !f[3];
    }
    const doux = () => (document.body.classList.contains("sans-anim") || matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");
    function aller(i, delai) {
        const e = etapes[i];
        if (!e) return;
        setTimeout(() => {
            e.scrollIntoView({ behavior: doux(), block: "start" });
            const champ = e.querySelector("textarea");
            if (champ) setTimeout(() => champ.focus({ preventScroll: true }), 350);
        }, delai);
    }
    function versRecap() {
        const r = document.querySelector(".recap");
        if (r && matchMedia("(max-width: 900px)").matches) r.scrollIntoView({ behavior: doux(), block: "start" });
        $("bouton-commande").focus({ preventScroll: true });
        r && r.classList.add("pulse"); setTimeout(() => r && r.classList.remove("pulse"), 1200);
    }
    function suivante(i) {
        const f = faits(), n = f.findIndex((v, k) => k > i && !v);
        if (n >= 0) aller(n, 450); else if (f.every(Boolean)) setTimeout(versRecap, 450);
    }
    photo.addEventListener("change", () => { if (photo.files[0]) suivante(0); });
    document.querySelectorAll(".tuiles").forEach((g) => g.addEventListener("click", (e) => { if (e.target.closest("[data-val]")) suivante(g.dataset.cible === "taille" ? 1 : 2); }));
    if (suite) suite.addEventListener("click", versRecap);
    pastilles.forEach((b) => b.addEventListener("click", () => aller(Number(b.dataset.etape), 0)));
    $("bouton-commande").addEventListener("click", () => { const i = faits().indexOf(false); if (i >= 0) { aller(i, 0); etapes[i].classList.add("manque"); setTimeout(() => etapes[i].classList.remove("manque"), 1400); } });
    ["change", "input"].forEach((ev) => document.addEventListener(ev, (e) => { if (e.target.closest && e.target.closest(".formulaire")) colorer(); }));
    document.addEventListener("langue-changee", colorer);
    colorer();
})();
