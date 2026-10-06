// =====================================================
// EXTRAS : avis, avant/après, aperçu dans une pièce, cadeau,
// bouton WhatsApp flottant, partage d'un tableau
// -----------------------------------------------------
// >>> LES 2 CHOSES À REMPLIR PAR VOUS SONT JUSTE EN DESSOUS <<<
// Tant qu'elles sont vides, la section correspondante reste cachée :
// le site n'affiche jamais de faux avis.
// =====================================================

// 1) Les avis de vos clients (avec leur accord). Ajoutez un bloc par avis.
//    photo = photo du tableau chez le client (facultatif, mettez le fichier à côté de index.html).
//    Exemple : { nom: "Sarah", note: 5, texte: "Un portrait magnifique, très ressemblant !", tableau: "Portrait de Max", photo: "sarah.jpg" }
const AVIS = [];

// 2) Des comparaisons « photo envoyée / tableau terminé » (avec l'accord du client).
//    Exemple : { titre: "Portrait de Max", avant: "max-photo.jpg", apres: "max-tableau.jpg" }
const AVANT_APRES = [];

// =====================================================
// Code (pas besoin d'y toucher)
// =====================================================
(() => {
    const byId = (id) => document.getElementById(id);
    const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    const langue = () => (window.EG_LANGUE ? window.EG_LANGUE.lire() : "fr");

    // Petit message en bas de l'écran (même élément que celui du panier)
    function toast(texte) {
        let t = byId("toast");
        if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
        t.textContent = texte; t.classList.add("visible");
        clearTimeout(t._m); t._m = setTimeout(() => t.classList.remove("visible"), 2500);
    }

    // ---------- Avis clients ----------
    const ETOILE = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/></svg>';
    const sectionAvis = byId("avis");
    if (sectionAvis && AVIS.length) {
        sectionAvis.querySelector(".avis-grille").innerHTML = AVIS.map((a) => {
            const n = Math.max(1, Math.min(5, Math.round(a.note || 5)));
            return '<figure class="avis">' +
                (a.photo ? '<img class="avis-photo" loading="lazy" src="./' + esc(a.photo) + '" alt="' + esc(a.tableau || a.nom) + '">' : "") +
                '<span class="etoiles" role="img" aria-label="Note : ' + n + ' sur 5">' + ETOILE.repeat(n) + '<span class="vides">' + ETOILE.repeat(5 - n) + "</span></span>" +
                "<blockquote>" + esc(a.texte) + "</blockquote>" +
                "<figcaption><strong>" + esc(a.nom) + "</strong>" + (a.tableau ? "<small>" + esc(a.tableau) + "</small>" : "") + "</figcaption></figure>";
        }).join("");
        sectionAvis.hidden = false;
    }

    // ---------- Avant / après ----------
    const sectionBA = byId("avant-apres");
    if (sectionBA && AVANT_APRES.length) {
        const g = sectionBA.querySelector(".ba-grille");
        g.innerHTML = AVANT_APRES.map((p) =>
            '<figure class="ba" dir="ltr" style="--p:50"><div class="ba-img">' +
            '<img class="ba-apres" loading="lazy" src="./' + esc(p.apres) + '" alt="Tableau terminé">' +
            '<img class="ba-avant" loading="lazy" src="./' + esc(p.avant) + '" alt="Photo d\'origine">' +
            '<span class="ba-ligne"></span><span class="ba-poignee" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 3 12 9 18"/><polyline points="15 6 21 12 15 18"/></svg></span>' +
            '<span class="ba-tag ba-tag-av">Avant</span><span class="ba-tag ba-tag-ap">Après</span>' +
            '<input type="range" min="0" max="100" value="50" aria-label="Comparer avant et après"></div>' +
            (p.titre ? "<figcaption>" + esc(p.titre) + "</figcaption>" : "") + "</figure>").join("");
        g.addEventListener("input", (e) => { if (e.target.type === "range") e.target.closest(".ba").style.setProperty("--p", e.target.value); });
        sectionBA.hidden = false;
    }

    // ---------- Aperçu dans une pièce ----------
    const PIECE = '<div class="piece-scene" role="img" aria-label="Aperçu du tableau au-dessus d\'un canapé de 2 mètres">' +
        '<div class="piece-mur"></div><div class="piece-sol"></div><div class="piece-plante"></div>' +
        '<div class="piece-canape"><i class="c-dos"></i><i class="c-assise"></i><i class="c-bras g"></i><i class="c-bras d"></i><i class="c-coussin g"></i><i class="c-coussin d"></i></div>' +
        '<figure class="piece-tableau"><img alt=""><span class="piece-vide">Votre photo</span></figure>' +
        '<span class="piece-cote"></span></div>';
    function majPiece(scene, { src, taille, exemple }) {
        const [w, h] = (taille || "50x70").split("x").map(Number);
        scene.style.setProperty("--w", w); scene.style.setProperty("--h", h);
        const img = scene.querySelector("img");
        if (src) { if (img.getAttribute("src") !== src) img.src = src; scene.classList.add("avec-image"); }
        else { img.removeAttribute("src"); scene.classList.remove("avec-image"); }
        const cote = scene.querySelector(".piece-cote"), txt = w + " × " + h + " cm";
        cote.textContent = exemple ? "Exemple : " + txt : txt;
    }
    const formatLibelle = { "30x40": "30 × 40 cm", "50x70": "50 × 70 cm", "70x100": "70 × 100 cm" };

    // Accueil : formats + choix du tableau
    const acc = byId("piece-accueil");
    if (acc) {
        const choix = CREATIONS.filter((c) => c.accueil && c.dispo);
        let i = 0, taille = "50x70";
        acc.innerHTML = "<h3>Voyez la taille chez vous</h3>" +
            '<p class="intro-bloc">Choisissez un format pour voir le tableau au-dessus d\'un canapé de 2 mètres.</p>' +
            '<div class="seg" role="group" aria-label="Format">' + Object.keys(formatLibelle).map((k) => '<button type="button" data-t="' + k + '" aria-pressed="' + (k === taille) + '">' + formatLibelle[k] + "</button>").join("") + "</div>" +
            PIECE + '<p class="piece-legende"><span class="piece-nom"></span> <button type="button" class="lien-fleche piece-autre">Voir un autre tableau</button></p>';
        const scene = acc.querySelector(".piece-scene");
        const maj = () => {
            const c = choix[i % choix.length];
            majPiece(scene, { src: c ? "./" + c.fichier : "", taille });
            acc.querySelector(".piece-nom").textContent = c ? c.titre : "";
            acc.querySelectorAll(".seg button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.t === taille));
        };
        acc.addEventListener("click", (e) => {
            const b = e.target.closest(".seg button");
            if (b) { taille = b.dataset.t; maj(); return; }
            if (e.target.closest(".piece-autre")) { i++; maj(); }
        });
        maj();
        if (!choix.length) acc.querySelector(".piece-autre").hidden = true;
    }

    // Commande : votre photo à l'échelle
    const prixInfo = byId("prix-estime");
    if (prixInfo && byId("taille") && byId("photo-client")) {
        const bloc = document.createElement("div");
        bloc.className = "piece-bloc piece-bloc-cmd";
        bloc.innerHTML = '<strong class="piece-titre">Aperçu dans une pièce</strong>' + PIECE +
            '<small class="piece-note">Aperçu indicatif, canapé de 2 m. Votre photo sert d\'illustration : le tableau sera peint à la main.</small>';
        prixInfo.after(bloc);
        const scene = bloc.querySelector(".piece-scene");
        let url = "";
        const maj = () => majPiece(scene, { src: url, taille: byId("taille").value || "50x70", exemple: !byId("taille").value });
        byId("photo-client").addEventListener("change", (e) => {
            if (url) URL.revokeObjectURL(url);
            const f = e.target.files[0]; url = f ? URL.createObjectURL(f) : "";
            maj();
        });
        byId("taille").addEventListener("change", maj);
        maj();
    }

    // ---------- Option cadeau (page commande) ----------
    const caseCadeau = byId("cadeau");
    if (caseCadeau) {
        const champs = byId("cadeau-champs"), ligne = byId("r-cadeau-li");
        const val = (id) => byId(id).value.trim();
        const maj = () => {
            champs.hidden = !caseCadeau.checked; ligne.hidden = !caseCadeau.checked;
            byId("r-cadeau").textContent = val("cadeau-nom") || "Oui";
        };
        caseCadeau.addEventListener("change", maj);
        ["cadeau-nom", "cadeau-date", "cadeau-mot"].forEach((id) => byId(id).addEventListener("input", maj));
        if (new URLSearchParams(location.search).get("cadeau")) { caseCadeau.checked = true; }
        maj();
        // Texte ajouté au message WhatsApp (court = pour le panier)
        window.EG_CADEAU = (court) => {
            if (!caseCadeau.checked) return "";
            const nom = val("cadeau-nom"), mot = val("cadeau-mot");
            const d = byId("cadeau-date").value ? new Date(byId("cadeau-date").value + "T00:00:00").toLocaleDateString("fr-FR") : "";
            if (court) return " | Cadeau" + (nom ? " pour " + nom : "") + (d ? " avant le " + d : "") + (mot ? " | Mot : " + mot : "");
            return "🎁 CADEAU" + (nom ? " pour " + nom : "") + (d ? " - à recevoir avant le " + d : "") + "\n" + (mot ? "💌 Petit mot : " + mot + "\n" : "") + "\n";
        };
    }

    // ---------- Bouton WhatsApp flottant ----------
    if (!byId("wa-flottant")) {
        const wa = document.createElement("a");
        wa.id = "wa-flottant";
        wa.href = lienWhatsApp("Bonjour, j'ai une question sur vos tableaux.");
        wa.target = "_blank"; wa.rel = "noopener";
        wa.setAttribute("aria-label", "Une question ? Écrivez-moi sur WhatsApp");
        wa.innerHTML = '<span class="wa-label">Une question ? Écrivez-moi</span>';
        document.body.appendChild(wa);
    }

    // ---------- Partage d'un tableau + lien direct ----------
    const fenetre = byId("fenetre-produit");
    if (fenetre) {
        const slug = (c) => encodeURIComponent(c.fichier.replace(/\.[^.]+$/, ""));
        const base = () => location.href.split("#")[0];
        const lien = (c) => base() + "#" + slug(c);
        const MSG = {
            fr: (c, u) => "Regarde ce tableau d'Ethan Gallery : " + c.titre + " " + u,
            en: (c, u) => "Look at this painting from Ethan Gallery: " + c.titre + " " + u,
            he: (c, u) => "תראו את הציור הזה מ-Ethan Gallery: " + c.titre + " " + u
        };
        const bloc = document.createElement("div");
        bloc.className = "partage";
        bloc.innerHTML = '<span class="partage-titre">Partager ce tableau</span><div class="partage-btns">' +
            '<a class="partage-wa" href="https://wa.me/" target="_blank" rel="noopener">WhatsApp</a>' +
            '<button type="button" class="partage-copier">Copier le lien</button>' +
            '<button type="button" class="partage-natif" hidden>Plus d\'options</button></div>';
        byId("produit-sur-mesure").after(bloc);
        const wa = bloc.querySelector(".partage-wa"), natif = bloc.querySelector(".partage-natif");
        if (navigator.share) natif.hidden = false;
        const maj = (c) => { wa.href = "https://wa.me/?text=" + encodeURIComponent(MSG[langue()](c, lien(c))); };
        bloc.querySelector(".partage-copier").addEventListener("click", async () => {
            const u = lien(creationActive);
            try { await navigator.clipboard.writeText(u); toast("Lien copié"); }
            catch { const t = document.createElement("textarea"); t.value = u; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); toast("Lien copié"); } catch { toast(u); } t.remove(); }
        });
        natif.addEventListener("click", () => { const c = creationActive; navigator.share({ title: c.titre + " - Ethan Gallery", text: MSG[langue()](c, ""), url: lien(c) }).catch(() => { }); });
        document.addEventListener("langue-changee", () => { if (creationActive && fenetre.open) maj(creationActive); });

        // La fiche garde un lien direct (#nom-du-tableau)
        const ouvrirBase = ouvrirCreation;
        ouvrirCreation = function (c) { ouvrirBase(c); maj(c); try { history.replaceState(null, "", "#" + slug(c)); } catch { } };
        fenetre.addEventListener("close", () => { try { history.replaceState(null, "", location.pathname + location.search); } catch { } });
        const depuisLien = () => {
            const h = decodeURIComponent(location.hash.slice(1));
            const cible = h && CREATIONS.find((c) => decodeURIComponent(slug(c)) === h);
            if (cible && !(fenetre.open && creationActive === cible)) { if (fenetre.open) fenetre.close(); ouvrirCreation(cible); }
        };
        addEventListener("hashchange", depuisLien);
        depuisLien();
    }
})();
