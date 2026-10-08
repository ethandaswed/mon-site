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

// 3) Vos vidéos « dans l'atelier » (la section reste cachée tant que la liste est vide).
//    Mettez les fichiers vidéo (.mp4) à côté de index.html. Format vertical (téléphone) conseillé.
//    affiche = image de couverture (facultatif). Exemple :
//    { fichier: "atelier1.mp4", titre: "Je peins un portrait", affiche: "atelier1.jpg" }
const VIDEOS = [
    { fichier: "atelier1.mp4", titre: "Kid Buu", affiche: "atelier1.jpg" },
    { fichier: "atelier2.mp4", titre: "Ghost Face : le résultat", affiche: "atelier2.jpg" },
    { fichier: "atelier3.mp4", titre: "Tate Langdon : le début", affiche: "atelier3.jpg" },
    { fichier: "atelier4.mp4", titre: "Ghost Face : étape par étape", affiche: "atelier4.jpg" }
];

// 4) Votre présentation (facultatif).
//    PHOTO_ETHAN : votre photo (ex. "ethan.jpg"), elle remplace l'image dans « À propos ».
//    HISTOIRE : 2-3 phrases en plus (pourquoi vous peignez, ce que vous aimez).
const PHOTO_ETHAN = "";
const HISTOIRE = "";

// 5) Informations légales (facultatif : une ligne vide n'est pas affichée).
//    nomComplet : votre nom complet · adresse : adresse de l'atelier ou de contact
//    hebergeur : nom du service qui héberge le site (ex. "Netlify", "GitHub Pages")
//    goatcounter : nom de votre compte GoatCounter (statistiques de visites sans cookie, gratuit sur goatcounter.com).
//    Exemple : goatcounter: "ethangallery"  (laissez "" pour ne pas mesurer les visites)
const INFOS = { nomComplet: "", adresse: "", hebergeur: "", goatcounter: "" };

// 6) Notifications du site (la cloche, pour les personnes connectées).
//    Ajoutez une ligne à CHAQUE nouveauté : la plus récente en premier. date = AAAA-MM-JJ.
//    lien = page ou tableau à ouvrir (facultatif), par exemple "creations.html#kid-buu".
//    type (facultatif) : "nouveau" (par défaut), "promo" (offre) ou "info" : change l'icône ; image (facultatif) : une petite photo, ex. "kidbuu.jpg".
//    Exemple : { date: "2026-10-12", type: "nouveau", titre: "Nouveau tableau : Itachi", texte: "Une pièce unique, 600 ₪.", lien: "creations.html", image: "" }
//    Les personnes inscrites par e-mail vous arrivent dans votre boîte (Formspree) : écrivez-leur en copie cachée.
const NOTIFICATIONS = [];

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

    // ---------- Vidéos de l'atelier ----------
    const sectionVideos = byId("videos");
    if (sectionVideos && VIDEOS.length) {
        sectionVideos.querySelector(".videos-grille").innerHTML = VIDEOS.map((v) =>
            '<figure class="video-carte"><video controls playsinline preload="metadata"' + (v.affiche ? ' poster="./' + esc(v.affiche) + '"' : "") +
            ' src="./' + esc(v.fichier) + '#t=0.1"></video></figure>').join("");
        // une seule vidéo à la fois
        sectionVideos.addEventListener("play", (e) => { sectionVideos.querySelectorAll("video").forEach((x) => { if (x !== e.target) x.pause(); }); }, true);
        sectionVideos.hidden = false;
    }

    // ---------- À propos : photo et histoire ----------
    const apropos = document.querySelector("#apropos");
    if (apropos) {
        if (PHOTO_ETHAN) { const im = apropos.querySelector(".apropos-img img"); if (im) { im.src = "./" + PHOTO_ETHAN; im.alt = "Ethan, peintre"; } }
        if (HISTOIRE) { const p = document.createElement("p"); p.setAttribute("data-no-trad", ""); p.textContent = HISTOIRE; const t = apropos.querySelector(".apropos-texte h2"); if (t) t.insertAdjacentElement("afterend", p); }
    }

    // ---------- Nombre de créations dans le lien de l'accueil ----------
    const lienToutes = byId("lien-toutes");
    if (lienToutes && typeof CREATIONS !== "undefined") {
        const n = CREATIONS.filter((c) => c.prix).length;
        if (n) lienToutes.textContent = "Voir les " + n + " créations";
    }

    // ---------- Zoom sur l'image d'un tableau ----------
    const imgProduit = byId("produit-image");
    if (imgProduit) {
        const zoom = document.createElement("dialog");
        zoom.id = "zoom-image";
        zoom.setAttribute("aria-label", "Agrandir l'image");
        zoom.innerHTML = '<button type="button" class="zoom-fermer" aria-label="Fermer le zoom">×</button><div class="zoom-scene"><img alt=""></div><p class="zoom-aide">Cliquez pour zoomer</p>';
        document.body.appendChild(zoom);
        const scene = zoom.querySelector(".zoom-scene"), zi = zoom.querySelector("img");
        imgProduit.classList.add("zoomable");
        imgProduit.title = "Agrandir l'image";
        const ouvrir = () => { zi.src = imgProduit.src; zi.alt = imgProduit.alt; zoom.classList.remove("zoome"); scene.scrollTo(0, 0); zoom.showModal(); };
        imgProduit.addEventListener("click", ouvrir);
        zi.addEventListener("click", (e) => {
            const r = zi.getBoundingClientRect(), fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
            const zoome = zoom.classList.toggle("zoome");
            if (zoome) { scene.scrollLeft = fx * scene.scrollWidth - scene.clientWidth / 2; scene.scrollTop = fy * scene.scrollHeight - scene.clientHeight / 2; }
            else scene.scrollTo(0, 0);
            zoom.querySelector(".zoom-aide").hidden = zoome;
        });
        zoom.querySelector(".zoom-fermer").addEventListener("click", () => zoom.close());
        zoom.addEventListener("click", (e) => { if (e.target === zoom || e.target === scene) zoom.close(); });
    }

    // ---------- Page « Informations légales » : lignes facultatives ----------
    if (byId("l-nom")) {
        if (INFOS.nomComplet) byId("l-resp").textContent = "Responsable de la publication : " + INFOS.nomComplet + " (Ethan).";
        if (INFOS.adresse) { const e = byId("l-adresse"); e.textContent = "Adresse : " + INFOS.adresse; e.hidden = false; }
        if (INFOS.hebergeur) { const e = byId("l-heberg"); e.textContent = "Hébergeur du site : " + INFOS.hebergeur + "."; e.hidden = false; }
        if (INFOS.goatcounter) byId("l-stats").hidden = false;
    }

    // ---------- Statistiques de visites (facultatif, sans cookie) ----------
    if (INFOS.goatcounter && location.protocol.startsWith("http")) {
        const sc = document.createElement("script");
        sc.async = true; sc.src = "https://gc.zgo.at/count.js";
        sc.setAttribute("data-goatcounter", "https://" + INFOS.goatcounter + ".goatcounter.com/count");
        document.head.appendChild(sc);
    }

    // ---------- Données structurées (Google) : un produit par tableau ----------
    if (byId("fenetre-produit") && typeof CREATIONS !== "undefined" && document.querySelector(".cartes-projets")) {
        const page = location.href.split("#")[0];
        const ld = {
            "@context": "https://schema.org", "@type": "ItemList", "name": "Créations d'Ethan Gallery",
            "itemListElement": CREATIONS.filter((c) => c.prix).map((c, i) => ({
                "@type": "ListItem", "position": i + 1,
                "item": {
                    "@type": "Product", "name": c.titre, "description": c.description,
                    "image": new URL(c.fichier, location.href).href,
                    "url": page + "#" + encodeURIComponent(c.fichier.replace(/\.[^.]+$/, "")),
                    "brand": { "@type": "Brand", "name": "Ethan Gallery" },
                    "offers": { "@type": "Offer", "priceCurrency": "ILS", "price": String(prixOriginal(c)),
                        "availability": c.dispo ? "https://schema.org/InStock" : "https://schema.org/SoldOut", "itemCondition": "https://schema.org/NewCondition" }
                }
            }))
        };
        const sj = document.createElement("script"); sj.type = "application/ld+json"; sj.textContent = JSON.stringify(ld); document.head.appendChild(sj);
    }

    // ---------- Recherche d'un tableau : panneau qui s'ouvre juste sous la loupe du menu ----------
    const liens = document.querySelector(".liens");
    const premierIcone = liens && liens.querySelector(".icone-nav");
    const normaliser = (t) => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const tabs = () => (typeof CREATIONS !== "undefined" ? CREATIONS.filter((c) => c.prix) : []);
    const slugDe = (c) => encodeURIComponent(c.fichier.replace(/\.[^.]+$/, ""));
    if (liens && !byId("btn-recherche")) {
        const LOUPE = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';
        const bt = document.createElement("button");
        bt.type = "button"; bt.id = "btn-recherche"; bt.className = "icone-nav icone-btn";
        bt.setAttribute("aria-label", "Rechercher un tableau"); bt.setAttribute("aria-haspopup", "dialog"); bt.setAttribute("aria-expanded", "false");
        bt.innerHTML = LOUPE.replace('width="20" height="20"', 'width="22" height="22"');
        liens.insertBefore(bt, premierIcone);

        const pan = document.createElement("div");
        pan.id = "recherche-globale"; pan.hidden = true;
        pan.setAttribute("role", "dialog"); pan.setAttribute("aria-label", "Rechercher un tableau");
        pan.innerHTML = '<div class="rg-champ">' + LOUPE + '<input type="search" id="rg-input" placeholder="Rechercher un tableau…" autocomplete="off" enterkeyhint="search" aria-label="Rechercher un tableau"><button type="button" class="rg-fermer" aria-label="Fermer">×</button></div>' +
            '<div class="rg-corps"><p class="rg-etiquette" aria-live="polite"></p><ul class="rg-grille" id="rg-grille"></ul><ul class="rg-liste" id="rg-liste" role="listbox" hidden></ul>' +
            '<p class="rg-vide" id="rg-vide" hidden>Aucun tableau ne porte ce nom. <a href="commande.html">Je veux un tableau sur mesure</a></p></div>' +
            '<div class="rg-pied"><a href="creations.html">Voir toutes les créations</a></div>';
        document.body.appendChild(pan);
        const input = pan.querySelector("#rg-input"), grille = pan.querySelector("#rg-grille"), liste = pan.querySelector("#rg-liste"), vide = pan.querySelector("#rg-vide"), etiq = pan.querySelector(".rg-etiquette");
        let actif = -1;
        const surligne = (titre, q) => {
            const k = q ? normaliser(titre).indexOf(q) : -1;
            return k < 0 ? esc(titre) : esc(titre.slice(0, k)) + "<mark>" + esc(titre.slice(k, k + q.length)) + "</mark>" + esc(titre.slice(k + q.length));
        };
        const rendre = () => {
            const q = normaliser(input.value.trim());
            const tous = tabs();
            actif = -1;
            if (!q) {
                // à vide : une vitrine de tableaux à découvrir
                const sugg = tous.filter((c) => c.dispo).slice(0, 6);
                etiq.textContent = "À découvrir";
                grille.innerHTML = sugg.map((c) => '<li><a href="creations.html#' + slugDe(c) + '"><span class="rg-vignette"><img src="./' + esc(c.fichier) + '" alt="" loading="lazy"></span><strong>' + esc(c.titre) + '</strong><small>' + esc(c.prix) + '</small></a></li>').join("");
                grille.hidden = false; liste.hidden = true; vide.hidden = true; return;
            }
            const trouves = tous.map((c) => ({ c, t: normaliser(c.titre).includes(q) ? 0 : (c.mots || []).some((m) => normaliser(m).includes(q)) ? 1 : 2 })).filter((x) => x.t < 2).sort((a, b) => a.t - b.t).map((x) => x.c).slice(0, 8);
            etiq.textContent = trouves.length ? (trouves.length === 1 ? "1 tableau" : trouves.length + " tableaux") : "";
            liste.innerHTML = trouves.map((c) => '<li role="option"><a href="creations.html#' + slugDe(c) + '"><img src="./' + esc(c.fichier) + '" alt="" loading="lazy"><span class="rg-txt"><strong>' + surligne(c.titre, q) + '</strong><small>' + esc(c.prix) + (c.dispo ? "" : " · indisponible") + (normaliser(c.titre).includes(q) ? "" : " · #" + esc((c.mots || []).find((m) => normaliser(m).includes(q)) || "")) + '</small></span></a></li>').join("");
            grille.hidden = true; liste.hidden = !trouves.length; vide.hidden = !!trouves.length;
        };
        // le panneau se place juste sous la loupe, avec une petite flèche qui la désigne
        const placer = () => {
            const r = bt.getBoundingClientRect(), vw = document.documentElement.clientWidth;
            const nav = document.querySelector("nav"), haut = nav ? nav.getBoundingClientRect().bottom : r.bottom;
            const l = Math.min(440, vw - 24);
            let gauche = r.left + r.width / 2 - l / 2;
            if (document.documentElement.dir !== "rtl") gauche = Math.min(gauche, vw - l - 12);
            gauche = Math.max(12, Math.min(gauche, vw - l - 12));
            pan.style.width = l + "px"; pan.style.left = gauche + "px"; pan.style.top = Math.round(haut + 8) + "px";
            pan.style.setProperty("--fleche", Math.round(Math.max(24, Math.min(l - 24, r.left + r.width / 2 - gauche))) + "px");
        };
        const fermer = () => { if (pan.hidden) return; pan.hidden = true; bt.setAttribute("aria-expanded", "false"); };
        const ouvrir = () => {
            if (liens.classList.contains("ouvert")) { liens.classList.remove("ouvert"); const mm = byId("menu-mobile"); if (mm) { mm.setAttribute("aria-expanded", "false"); mm.textContent = "☰"; } }
            input.value = ""; rendre(); placer(); pan.hidden = false; bt.setAttribute("aria-expanded", "true");
            setTimeout(() => input.focus({ preventScroll: true }), 30);
        };
        bt.addEventListener("click", (e) => { e.stopPropagation(); pan.hidden ? ouvrir() : fermer(); });
        input.addEventListener("input", rendre);
        pan.querySelector(".rg-fermer").addEventListener("click", () => { fermer(); bt.focus(); });
        pan.addEventListener("click", (e) => { if (e.target.closest("a")) setTimeout(fermer, 0); });
        document.addEventListener("click", (e) => { if (!pan.hidden && !pan.contains(e.target) && !bt.contains(e.target)) fermer(); });
        window.addEventListener("resize", () => { if (!pan.hidden) placer(); });
        input.addEventListener("keydown", (e) => {
            const items = [...(liste.hidden ? grille : liste).querySelectorAll("a")];
            if (e.key === "Escape") { fermer(); bt.focus(); }
            else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); if (!items.length) return; actif = (actif + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach((a, i) => a.classList.toggle("actif", i === actif)); items[actif].scrollIntoView({ block: "nearest" }); }
            else if (e.key === "Enter") { const a = items[actif >= 0 ? actif : 0]; if (a && input.value.trim()) { e.preventDefault(); a.click(); } else if (a && actif >= 0) { e.preventDefault(); a.click(); } }
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || "")) && !document.querySelector("dialog[open]")) { e.preventDefault(); ouvrir(); }
            else if (e.key === "Escape") fermer();
        });
    }

    // ---------- Notifications (cloche) ----------
    if (liens && !byId("btn-notif")) {
        const compte = () => (window.EG_COMPTE ? window.EG_COMPTE.courant() : null);
        const bell = document.createElement("button");
        bell.type = "button"; bell.id = "btn-notif"; bell.className = "icone-nav icone-btn";
        bell.setAttribute("aria-label", "Notifications"); bell.setAttribute("aria-haspopup", "dialog"); bell.setAttribute("aria-expanded", "false");
        bell.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg><span class="badge-notif" id="badge-notif" hidden></span>';
        liens.insertBefore(bell, byId("btn-recherche") ? byId("btn-recherche").nextSibling : premierIcone);
        const pan = document.createElement("div");
        pan.id = "panneau-notif"; pan.hidden = true; pan.setAttribute("role", "dialog"); pan.setAttribute("aria-label", "Notifications");
        document.body.appendChild(pan);
        const badge = byId("badge-notif");
        const L = () => langue();
        const T3 = (fr, en, he) => (L() === "he" ? he : L() === "en" ? en : fr);
        const cle = (n) => String(n.id || (n.date + "|" + n.titre));
        const type = (n) => (n.type === "promo" || n.type === "info" ? n.type : "nouveau");
        const ICONES = {
            nouveau: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4z"/><path d="M19 15l.8 1.9 1.9.8-1.9.8L19 20.4l-.8-1.9-1.9-.8 1.9-.8z"/></svg>',
            promo: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',
            info: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>'
        };
        const NOMS = { nouveau: ["Nouveau tableau", "New painting", "ציור חדש"], promo: ["Offre", "Offer", "הצעה"], info: ["Info", "News", "מידע"] };
        const voulu = (u, n) => !u || !u.notifTypes || u.notifTypes[type(n)] !== false;
        const triees = (u) => NOTIFICATIONS.filter((n) => voulu(u, n)).sort((a, b) => String(b.date).localeCompare(String(a.date)));
        const estLue = (u, n) => (u.notifLues || []).indexOf(cle(n)) > -1 || String(n.date) <= (u.notifVu || "");
        const nonLues = (u) => (u && u.notifSite !== false ? triees(u).filter((n) => !estLue(u, n)) : []);
        let filtre = "tout";
        const maj = () => {
            const n = nonLues(compte()).length;
            badge.textContent = n > 9 ? "9+" : n; badge.hidden = !n;
            bell.classList.toggle("a-du-neuf", n > 0);
            bell.setAttribute("aria-label", n ? "Notifications (" + n + ")" : "Notifications");
        };
        const jours = (d) => { const a = new Date(d + "T00:00:00"), b = new Date(); b.setHours(0, 0, 0, 0); return Math.round((b - a) / 864e5); };
        const dateTxt = (d) => {
            const j = jours(d);
            if (j === 0) return T3("Aujourd'hui", "Today", "היום");
            if (j === 1) return T3("Hier", "Yesterday", "אתמול");
            if (j > 1 && j < 7) return T3("Il y a " + j + " jours", j + " days ago", "לפני " + j + " ימים");
            try { return new Date(d + "T00:00:00").toLocaleDateString(L() === "he" ? "he-IL" : L() === "en" ? "en-GB" : "fr-FR", { day: "numeric", month: "long" }); } catch { return d; }
        };
        const marquer = (u, cles) => {
            const dej = new Set(u.notifLues || []); cles.forEach((k) => dej.add(k));
            window.EG_COMPTE.sauver(u.email, { notifLues: Array.from(dej).slice(-300) });
        };
        const rouage = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>';
        function contenu() {
            const u = compte();
            const tete = (outils) => '<div class="np-tete"><h2>Notifications</h2>' + (outils || "") + '</div>';
            const vide = (ico, titre, texte, actions) => '<div class="np-vide"><span class="np-vide-ico">' + ico + '</span><strong>' + titre + '</strong><p>' + texte + '</p>' + (actions ? '<div class="np-actions">' + actions + '</div>' : "") + '</div>';
            const cloche = '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
            if (!u) return tete() + vide(cloche, "Restez au courant", "Connectez-vous pour être prévenu des nouveaux tableaux, sur le site et par e-mail.", '<a class="bouton" href="compte.html">Me connecter</a>');
            if (u.notifSite === false) return tete() + vide(cloche, "Notifications désactivées", "Les notifications du site sont désactivées.", '<a class="bouton contour" href="compte.html#notifications">Gérer mes notifications</a>');
            const toutes = triees(u), nl = toutes.filter((n) => !estLue(u, n));
            const liste = filtre === "non" ? nl : toutes;
            const outils = '<div class="np-outils">' + (nl.length ? '<button type="button" class="np-btn" id="np-tout">Tout marquer comme lu</button>' : "") + '<a class="np-roue" href="compte.html#notifications" aria-label="Gérer mes notifications" title="Gérer mes notifications">' + rouage + '</a></div>';
            const onglets = '<div class="np-onglets" role="tablist"><button type="button" role="tab" data-f="tout" class="' + (filtre === "tout" ? "actif" : "") + '" aria-selected="' + (filtre === "tout") + '">Toutes</button><button type="button" role="tab" data-f="non" class="' + (filtre === "non" ? "actif" : "") + '" aria-selected="' + (filtre === "non") + '">Non lues' + (nl.length ? ' <b class="np-n">' + nl.length + '</b>' : "") + '</button></div>';
            if (!toutes.length) return tete(outils) + vide(cloche, "Rien de nouveau", "Vous serez prévenu ici dès qu'un nouveau tableau est publié.");
            const corps = liste.length ? '<ul class="np-liste">' + liste.map((n) => {
                const k = cle(n), t = type(n), nonlue = !estLue(u, n);
                const nom = T3(NOMS[t][0], NOMS[t][1], NOMS[t][2]);
                const img = n.image ? '<img class="np-vignette" src="' + esc(n.image) + '" alt="" loading="lazy">' : "";
                const interieur = '<span class="np-ico t-' + t + '" title="' + esc(nom) + '">' + ICONES[t] + '</span><span class="np-corps"><strong data-no-trad>' + esc(n.titre) + '</strong>' + (n.texte ? '<span class="np-p" data-no-trad>' + esc(n.texte) + '</span>' : "") + '<small data-no-trad>' + esc(nom) + ' · ' + esc(dateTxt(n.date)) + '</small></span>' + img + (nonlue ? '<span class="np-point" aria-label="' + T3("Non lue", "Unread", "לא נקרא") + '"></span>' : "");
                return '<li class="' + (nonlue ? "non-lue" : "") + '">' + (n.lien ? '<a class="np-item" href="' + esc(n.lien) + '" data-k="' + esc(k) + '">' + interieur + '</a>' : '<button type="button" class="np-item" data-k="' + esc(k) + '">' + interieur + '</button>') + '</li>';
            }).join("") + '</ul>' : vide(cloche, "Tout est à jour", "Vous n'avez aucune notification non lue.");
            return tete(outils) + onglets + corps + '<div class="np-actions np-pied"><a class="lien-fleche" href="compte.html#notifications">Gérer mes notifications</a></div>';
        }
        const fermer = () => { pan.hidden = true; bell.setAttribute("aria-expanded", "false"); };
        const rendre = () => { pan.innerHTML = contenu(); };
        const ouvrir = () => { const tn = byId("toast-notif"); if (tn) tn.remove(); filtre = "tout"; rendre(); pan.hidden = false; bell.setAttribute("aria-expanded", "true"); const f = pan.querySelector(".np-item, .np-btn, .bouton"); if (f && document.activeElement === bell) { /* le focus reste sur la cloche */ } };
        bell.addEventListener("click", (e) => { e.stopPropagation(); if (!pan.hidden) return fermer(); ouvrir(); });
        pan.addEventListener("click", (e) => {
            const u = compte(); if (!u) return;
            const f = e.target.closest("[data-f]");
            if (f) { filtre = f.dataset.f; rendre(); return; }
            if (e.target.closest("#np-tout")) { marquer(u, triees(u).map(cle)); rendre(); maj(); return; }
            const it = e.target.closest(".np-item");
            if (it) { marquer(u, [it.dataset.k]); maj(); if (it.tagName === "BUTTON") rendre(); }
        });
        document.addEventListener("click", (e) => { if (e.target.isConnected && !pan.hidden && !pan.contains(e.target) && !bell.contains(e.target)) fermer(); });
        document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !pan.hidden) { fermer(); bell.focus(); } });
        window.addEventListener("langue-changee", () => { if (!pan.hidden) rendre(); });
        window.EG_NOTIF = { maj };
        maj();

        // Petit message à l'arrivée (une fois par visite) quand il y a du neuf
        try {
            const u = compte();
            if (u && u.notifSite !== false && u.notifToast !== false && !sessionStorage.getItem("eg_toast_notif")) {
                const n = nonLues(u);
                if (n.length) {
                    sessionStorage.setItem("eg_toast_notif", "1");
                    const t = document.createElement("div");
                    t.id = "toast-notif"; t.setAttribute("role", "status");
                    const un = n.length === 1;
                    t.innerHTML = '<span class="np-ico t-' + type(n[0]) + '">' + ICONES[type(n[0])] + '</span><span class="tn-txt" data-no-trad><strong>' + esc(un ? n[0].titre : T3(n.length + " nouvelles notifications", n.length + " new notifications", n.length + " התראות חדשות")) + '</strong>' + (un && n[0].texte ? '<small>' + esc(n[0].texte) + '</small>' : "") + '</span><button type="button" class="tn-voir" data-no-trad>' + T3("Voir", "View", "לצפייה") + '</button><button type="button" class="tn-x" aria-label="' + T3("Fermer", "Close", "סגירה") + '">✕</button>';
                    document.body.appendChild(t);
                    const retirer = () => { t.classList.remove("visible"); setTimeout(() => t.remove(), 300); };
                    t.querySelector(".tn-voir").addEventListener("click", (ev) => { ev.stopPropagation(); retirer(); if (pan.hidden) ouvrir(); });
                    t.querySelector(".tn-x").addEventListener("click", retirer);
                    setTimeout(() => t.classList.add("visible"), 900);
                    setTimeout(retirer, 9000);
                }
            }
        } catch { }
    }

    // ---------- Aperçu dans une pièce ----------
    const PIECE = '<div class="piece-scene env-salon" role="img" aria-label="Aperçu du tableau dans une pièce">' +
        '<div class="piece-mur"></div><div class="piece-sol"></div><div class="piece-plante"></div>' +
        '<div class="piece-canape"><i class="c-dos"></i><i class="c-assise"></i><i class="c-bras g"></i><i class="c-bras d"></i><i class="c-coussin g"></i><i class="c-coussin d"></i></div>' +
        '<div class="piece-lit"><i class="l-tete"></i><i class="l-pied"></i><i class="l-matelas"></i><i class="l-couette"></i><i class="l-oreiller g"></i><i class="l-oreiller d"></i></div>' +
        '<div class="piece-chevet g"><i></i></div><div class="piece-chevet d"><i class="lampe"></i></div>' +
        '<div class="piece-bureau"><i class="b-laptop"></i><i class="b-lampe"></i><i class="b-livres"></i><i class="b-plateau"></i><i class="b-pied g"></i><i class="b-pied d"></i></div>' +
        '<div class="piece-console"><i class="k-vase"></i><i class="k-livres"></i><i class="k-plateau"></i><i class="k-tiroir"></i><i class="k-pied g"></i><i class="k-pied d"></i></div>' +
        '<figure class="piece-tableau"><img alt=""><span class="piece-vide">Votre photo</span></figure>' +
        '<span class="piece-cote"></span></div>';
    const ENVS = { salon: "Salon", chambre: "Chambre", bureau: "Bureau", entree: "Entrée" };
    const ENV_ALT = { salon: "Aperçu du tableau au-dessus d'un canapé de 2 mètres", chambre: "Aperçu du tableau au-dessus d'un lit de 160 cm", bureau: "Aperçu du tableau au-dessus d'un bureau de 140 cm", entree: "Aperçu du tableau au-dessus d'une console d'entrée de 100 cm" };
    function majEnv(scene, env) {
        Object.keys(ENVS).forEach((k) => scene.classList.toggle("env-" + k, k === env));
        scene.setAttribute("aria-label", ENV_ALT[env] || "");
    }
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

    // Accueil : les formats servent aussi de sélecteur pour l'aperçu
    const acc = byId("piece-accueil");
    if (acc) {
        const choix = CREATIONS.filter((c) => c.accueil && c.dispo);
        let i = 0, taille = "50x70", env = "salon";
        acc.innerHTML = "<h3>Voyez la taille chez vous</h3>" +
            '<p class="intro-bloc">Touchez un format ci-dessus, puis choisissez la pièce.</p>' +
            '<div class="seg seg-env" role="group" aria-label="Pièce">' + Object.keys(ENVS).map((k) => '<button type="button" data-e="' + k + '" aria-pressed="' + (k === env) + '">' + ENVS[k] + "</button>").join("") + "</div>" +
            PIECE + '<p class="piece-legende"><span class="piece-nom"></span> <button type="button" class="lien-fleche piece-autre">Voir un autre tableau</button></p>';
        const scene = acc.querySelector(".piece-scene");
        const cartes = document.querySelectorAll(".format[data-t]");
        const maj = () => {
            const c = choix[i % choix.length];
            majEnv(scene, env);
            majPiece(scene, { src: c ? "./" + c.fichier : "", taille });
            acc.querySelector(".piece-nom").textContent = c ? c.titre : "";
            acc.querySelectorAll(".seg-env button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.e === env));
            cartes.forEach((k) => k.setAttribute("aria-pressed", k.dataset.t === taille));
        };
        const choisir = (k) => { taille = k.dataset.t; maj(); };
        cartes.forEach((k) => {
            k.addEventListener("click", () => choisir(k));
            k.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); choisir(k); } });
        });
        acc.addEventListener("click", (ev) => {
            const b = ev.target.closest(".seg-env button");
            if (b) { env = b.dataset.e; maj(); return; }
            if (ev.target.closest(".piece-autre")) { i++; maj(); }
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
        wa.href = "https://wa.me/" + NUMERO_WHATSAPP;
        wa.target = "_blank"; wa.rel = "noopener";
        wa.setAttribute("aria-label", "Une question ? Écrivez-moi sur WhatsApp");
        wa.innerHTML = '<span class="wa-label">Une question ? Écrivez-moi</span>';
        document.body.appendChild(wa);
    }

    // ---------- Bouton Instagram flottant ----------
    if (!byId("ig-flottant")) {
        const ig = document.createElement("a");
        ig.id = "ig-flottant";
        ig.href = "https://instagram.com/Ethan_bitan";
        ig.target = "_blank"; ig.rel = "noopener";
        ig.setAttribute("aria-label", "Voir mon Instagram");
        ig.innerHTML = '<span class="wa-label">Mon Instagram</span>';
        document.body.appendChild(ig);
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
// Panneaux recherche / notifications : sur mobile, la page derrière ne défile plus
(() => {
    const racine = document.documentElement;
    const panneaux = () => ["recherche-globale", "panneau-notif"].map((i) => document.getElementById(i)).filter(Boolean);
    const maj = () => racine.classList.toggle("verrou", panneaux().some((p) => !p.hidden));
    panneaux().forEach((p) => new MutationObserver(maj).observe(p, { attributes: true, attributeFilter: ["hidden"] }));
    document.addEventListener("touchmove", (e) => {
        if (!racine.classList.contains("verrou") || window.innerWidth > 800) return;
        if (!e.target.closest(".rg-corps, #panneau-notif")) e.preventDefault();
    }, { passive: false });
})();
// Bandeau de promotion (accueil et créations)
(() => {
    if (typeof promoActive !== "function" || !promoActive()) return;
    if (!document.querySelector(".heros") && !document.querySelector(".cartes-projets")) return;
    const mini = Math.min(...PROMO.paliers.map((p) => p[1])), maxi = Math.max(...PROMO.paliers.map((p) => p[1]));
    const d = document.createElement("div");
    d.className = "bandeau-promo";
    d.textContent = "Offre en cours : de -" + mini + "% à -" + maxi + "% sur une sélection de tableaux et de posters" + (PROMO.fin ? " jusqu'au " + new Date(PROMO.fin + "T12:00:00").toLocaleDateString("fr-FR") : "");
    const cible = document.querySelector("main") || document.querySelector(".heros") || document.querySelector(".zone");
    if (cible) cible.parentNode.insertBefore(d, cible);
})();
window.EG_EXTRAS_FAIT = true;
if (window.EG_MENU_PRET) window.EG_MENU_PRET("extras");
