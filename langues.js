// =====================================================
// LANGUES : français (par défaut), anglais, hébreu
// -----------------------------------------------------
// Le site est écrit en français. Ce fichier traduit les textes à l'affichage :
//  - DICO : [français, anglais, hébreu]. Pour traduire une nouvelle phrase, ajoutez une ligne.
//  - MOTIFS : phrases avec un nombre ou un nom qui change (prix, nombre de tableaux...).
// Les messages envoyés sur WhatsApp restent TOUJOURS en français (c'est vous qui les lisez).
// =====================================================
(() => {
    const LANGUES = {
        fr: { court: "FR", nom: "Français", dir: "ltr" },
        en: { court: "EN", nom: "English", dir: "ltr" },
        he: { court: "עב", nom: "עברית", dir: "rtl" }
    };
    const CLE = "eg_lang";

    // ---------- Traductions : [français, anglais, hébreu] ----------
    const DICO = [
        ["Touchez un format ci-dessus, puis choisissez la pièce.", "Tap a size above, then choose the room.", "לחצו על גודל למעלה ואז בחרו את החדר."],
        ["Voir chez moi ↓", "See it at home ↓", "ראו אצלי בבית ↓"],
        ["Salon", "Living room", "סלון"],
        ["Chambre", "Bedroom", "חדר שינה"],
        ["Bureau", "Office", "משרד"],
        ["Entrée", "Entryway", "כניסה"],
        ["Pièce", "Room", "חדר"],
        ["Aperçu du tableau au-dessus d'un lit de 160 cm", "Preview of the painting above a 160 cm bed", "תצוגת הציור מעל מיטה ברוחב 160 ס״מ"],
        ["Aperçu du tableau au-dessus d'un bureau de 140 cm", "Preview of the painting above a 140 cm desk", "תצוגת הציור מעל שולחן עבודה ברוחב 140 ס״מ"],
        ["Aperçu du tableau au-dessus d'une console d'entrée de 100 cm", "Preview of the painting above a 100 cm entryway console", "תצוגת הציור מעל קונסולת כניסה ברוחב 100 ס״מ"],
        ["Aperçu du tableau au-dessus d'un canapé de 2 mètres", "Preview of the painting above a 2-metre sofa", "תצוגת הציור מעל ספה באורך 2 מטרים"],
        ["Aperçu du tableau dans une pièce", "Preview of the painting in a room", "תצוגת הציור בחדר"],
        ["Votre panier est vide", "Your cart is empty", "העגלה שלכם ריקה"],
        ["Chaque tableau est peint à la main, une pièce unique pour votre intérieur.", "Every painting is hand-painted, a unique piece for your home.", "כל ציור מצויר ביד, יצירה ייחודית לבית שלכם."],
        ["Commande sur mesure", "Custom order", "הזמנה בהתאמה אישית"],
        ["Peint à la main", "Hand-painted", "מצויר ביד"],
        ["Plusieurs tailles et cadres", "Several sizes and frames", "מגוון גדלים ומסגרות"],
        ["Commande simple sur WhatsApp", "Easy ordering on WhatsApp", "הזמנה פשוטה בוואטסאפ"],
        ["Vous pourriez aimer", "You might like", "אולי יאהבו גם"],
        ["Grandes cartes", "Large cards", "כרטיסים גדולים"],
        ["Grille", "Grid", "רשת"],
        ["Compact", "Compact", "קומפקטי"],
        ["Liste", "List", "רשימה"],
        ["Éditeur du site", "Site publisher", "מפרסם האתר"],
        ["Ethan Gallery, atelier de tableaux et de portraits peints et dessinés à la main.", "Ethan Gallery, a studio of hand-painted and hand-drawn paintings and portraits.", "Ethan Gallery, סטודיו לציורים ופורטרטים מצוירים ביד."],
        ["Contact :", "Contact:", "יצירת קשר:"],
        ["WhatsApp :", "WhatsApp:", "וואטסאפ:"],
        ["Instagram :", "Instagram:", "אינסטגרם:"],
        ["Propriété intellectuelle", "Intellectual property", "קניין רוחני"],
        ["Les tableaux, dessins, photographies, vidéos, textes et le logo présents sur ce site sont la propriété de leur auteur. Toute reproduction, copie ou utilisation, même partielle, sans autorisation écrite préalable est interdite. Les posters imprimés sont des reproductions des œuvres de l'auteur, vendues pour un usage personnel.", "The paintings, drawings, photographs, videos, texts and logo on this site are the property of their author. Any reproduction, copying or use, even partial, without prior written permission is prohibited. The printed posters are reproductions of the author's works, sold for personal use.", "הציורים, הרישומים, הצילומים, הסרטונים, הטקסטים והלוגו המופיעים באתר זה הם רכושו של יוצרם. אסור לשכפל, להעתיק או להשתמש בהם, אפילו באופן חלקי, ללא אישור בכתב מראש. הפוסטרים המודפסים הם הדפסים של יצירות היוצר, והם נמכרים לשימוש אישי בלבד."],
        ["Les personnages et univers représentés (mangas, films, séries, jeux) appartiennent à leurs ayants droit respectifs. Les tableaux sont des créations artistiques inspirées de ces univers.", "The characters and universes depicted (manga, films, series, games) belong to their respective rights holders. The paintings are artistic creations inspired by these universes.", "הדמויות והעולמות המוצגים (מנגה, סרטים, סדרות, משחקים) שייכים לבעלי הזכויות בהם. הציורים הם יצירות אמנותיות בהשראת עולמות אלה."],
        ["Responsabilité", "Liability", "אחריות"],
        ["Le soin apporté aux photos permet de bien présenter chaque tableau, mais les couleurs peuvent légèrement varier selon votre écran. Les liens vers des sites externes (WhatsApp, Instagram) ne sont pas sous le contrôle de l'éditeur.", "Care is taken with the photos to present each painting well, but colors may vary slightly depending on your screen. Links to external sites (WhatsApp, Instagram) are not under the publisher's control.", "הושקעה תשומת לב בצילומים כדי להציג כל ציור בצורה טובה, אך הצבעים עשויים להיראות מעט שונים בהתאם למסך שלכם. הקישורים לאתרים חיצוניים (וואטסאפ, אינסטגרם) אינם בשליטת המפרסם."],
        ["Politique de confidentialité", "Privacy policy", "מדיניות פרטיות"],
        ["En bref : ce site ne vous suit pas. Il n'utilise ni publicité, ni cookies de suivi, ni outil d'analyse de comportement.", "In short: this site does not track you. It uses no advertising, no tracking cookies and no behavior-analysis tools.", "בקצרה: האתר אינו עוקב אחריכם. אין בו פרסומות, עוגיות מעקב או כלי ניתוח התנהגות."],
        ["Ce qui est enregistré sur votre appareil", "What is stored on your device", "מה נשמר במכשיר שלכם"],
        ["Pour fonctionner, le site garde dans votre navigateur (« stockage local ») : votre panier, vos favoris, vos réglages (thème, taille du texte, langue…) et, si vous en créez un, votre compte. Ces informations restent sur votre appareil : elles ne sont pas envoyées à un serveur. Vous pouvez tout télécharger ou tout effacer à tout moment dans les paramètres du site.", "To work, the site keeps in your browser (“local storage”): your cart, your favorites, your settings (theme, text size, language…) and, if you create one, your account. This information stays on your device: it is not sent to a server. You can download or erase everything at any time in the site settings.", "כדי לפעול, האתר שומר בדפדפן שלכם (״אחסון מקומי״): את העגלה, את המועדפים, את ההגדרות (ערכת נושא, גודל טקסט, שפה…) ואם פתחתם חשבון, גם אותו. המידע הזה נשאר במכשיר שלכם ואינו נשלח לשרת. אפשר להוריד או למחוק הכול בכל עת בהגדרות האתר."],
        ["Ouvrir les paramètres", "Open settings", "פתיחת ההגדרות"],
        ["Ce que vous m'envoyez", "What you send me", "מה שאתם שולחים לי"],
        ["Commande :", "Order:", "הזמנה:"],
        ["le message est préparé sur le site puis envoyé par vous sur WhatsApp. Il contient les informations de votre commande (tableau, format, option cadre, message). Les photos que vous envoyez servent uniquement à réaliser votre tableau.", "the message is prepared on the site and then sent by you on WhatsApp. It contains your order information (painting, format, frame option, message). The photos you send are used only to make your painting.", "ההודעה מוכנה באתר ואתם שולחים אותה בוואטסאפ. היא כוללת את פרטי ההזמנה (ציור, גודל, אפשרות מסגרת, הודעה). התמונות שאתם שולחים משמשות אך ורק ליצירת הציור שלכם."],
        ["Formulaire de contact :", "Contact form:", "טופס יצירת קשר:"],
        ["votre nom, votre e-mail et votre message sont transmis à l'éditeur via le service Formspree, uniquement pour vous répondre.", "your name, email and message are sent to the publisher through the Formspree service, only to reply to you.", "השם, כתובת האימייל וההודעה שלכם מועברים למפרסם באמצעות שירות Formspree, אך ורק כדי להשיב לכם."],
        ["Services extérieurs", "External services", "שירותים חיצוניים"],
        ["Polices Google Fonts :", "Google Fonts:", "גופני Google Fonts:"],
        ["le chargement des polices de caractères transmet votre adresse IP à Google.", "loading the fonts sends your IP address to Google.", "טעינת הגופנים מעבירה את כתובת ה-IP שלכם ל-Google."],
        ["WhatsApp et Instagram :", "WhatsApp and Instagram:", "וואטסאפ ואינסטגרם:"],
        ["si vous cliquez sur ces liens, vous quittez le site ; leurs propres règles de confidentialité s'appliquent.", "if you click on these links, you leave the site; their own privacy rules apply.", "אם תלחצו על הקישורים האלה, תעזבו את האתר; חלים עליהם כללי הפרטיות שלהם."],
        ["Statistiques de visite :", "Visit statistics:", "סטטיסטיקת ביקורים:"],
        ["le site mesure le nombre de visites avec un outil respectueux de la vie privée, sans cookie et sans profil individuel.", "the site counts visits with a privacy-friendly tool, with no cookies and no individual profile.", "האתר סופר ביקורים בכלי ששומר על הפרטיות, ללא עוגיות וללא פרופיל אישי."],
        ["Conservation et vos droits", "Retention and your rights", "שמירת מידע וזכויותיכם"],
        ["Les messages de commande et de contact sont conservés le temps nécessaire à la réalisation et au suivi de votre commande. Vous pouvez demander à tout moment l'accès à vos données, leur correction ou leur suppression en me contactant (voir les mentions légales).", "Order and contact messages are kept for as long as needed to carry out and follow up on your order. You can ask at any time for access to your data, or for its correction or deletion, by contacting me (see the legal notice).", "הודעות ההזמנה ויצירת הקשר נשמרות למשך הזמן הנדרש לביצוע ההזמנה ולמעקב אחריה. אפשר לבקש בכל עת גישה למידע שלכם, תיקון שלו או מחיקתו, באמצעות יצירת קשר איתי (ראו את ההצהרה המשפטית)."],
        ["Les produits", "Products", "המוצרים"],
        ["Tableaux originaux :", "Original paintings:", "ציורי מקור:"],
        ["chaque original est une pièce unique, faite à la main. Une fois vendu, il n'est plus disponible.", "each original is a unique, handmade piece. Once sold, it is no longer available.", "כל ציור מקור הוא יצירה ייחודית שנעשתה ביד. לאחר שנמכר, הוא כבר אינו זמין."],
        ["Posters imprimés :", "Printed posters:", "פוסטרים מודפסים:"],
        ["reproduction d'un tableau de la galerie, avec ou sans cadre.", "a reproduction of a painting from the gallery, with or without a frame.", "הדפס של ציור מהגלריה, עם מסגרת או בלעדיה."],
        ["Tableaux sur commande :", "Custom paintings:", "ציורים בהזמנה אישית:"],
        ["réalisés d'après votre photo et votre idée, dans le format de votre choix.", "made from your photo and your idea, in the size of your choice.", "נעשים לפי התמונה והרעיון שלכם, בגודל לבחירתכם."],
        ["Les prix sont indiqués en shekels (₪). Pour un tableau sur commande, le prix affiché est une estimation selon la taille et le style : le prix final vous est confirmé sur WhatsApp avant que je commence.", "Prices are shown in shekels (₪). For a custom painting, the displayed price is an estimate based on size and style: the final price is confirmed to you on WhatsApp before I start.", "המחירים מוצגים בשקלים (₪). בציור בהזמנה אישית המחיר המוצג הוא הערכה לפי הגודל והסגנון: המחיר הסופי יאושר לכם בוואטסאפ לפני שאתחיל."],
        ["Une commande est prise en compte après confirmation, par WhatsApp, de la disponibilité et du prix. L'ajout au panier ou l'envoi du message ne vaut pas encore commande ferme.", "An order is taken into account after availability and price are confirmed on WhatsApp. Adding to the cart or sending the message is not yet a firm order.", "הזמנה נחשבת לאחר שהזמינות והמחיר אושרו בוואטסאפ. הוספה לעגלה או שליחת ההודעה אינן מהוות עדיין הזמנה סופית."],
        ["Paiement et livraison", "Payment and delivery", "תשלום ומשלוח"],
        ["Le mode de paiement et la livraison (ou le retrait) sont convenus ensemble sur WhatsApp avant l'envoi.", "The payment method and delivery (or pickup) are agreed together on WhatsApp before dispatch.", "אמצעי התשלום והמשלוח (או האיסוף) מתואמים יחד בוואטסאפ לפני השליחה."],
        ["Tableaux faits main", "Handmade paintings", "ציורים בעבודת יד"],
        ["Chaque tableau étant réalisé à la main, de légères différences avec les photos ou avec l'aperçu sont normales. Pour un tableau sur commande, je vous tiens au courant de l'avancement et vous pouvez me faire part de vos remarques avant la finition.", "As each painting is made by hand, slight differences from the photos or the preview are normal. For a custom painting, I keep you updated on progress and you can share your comments before the finishing touches.", "מכיוון שכל ציור נעשה ביד, הבדלים קלים מהתמונות או מהתצוגה המקדימה הם דבר רגיל. בציור בהזמנה אישית אעדכן אתכם בהתקדמות, ותוכלו להעיר לפני הגימור."],
        ["Annulation et retours", "Cancellation and returns", "ביטול והחזרות"],
        ["Un tableau sur commande est réalisé sur mesure : une fois commencé, il ne peut en principe ni être annulé, ni repris, ni échangé. Pour les autres produits, ou en cas de problème avec votre commande, contactez-moi rapidement : nous trouverons une solution ensemble.", "A custom painting is made to measure: once started, it can in principle be neither cancelled, taken back nor exchanged. For other products, or if there is a problem with your order, contact me quickly: we will find a solution together.", "ציור בהזמנה אישית נעשה במידה: לאחר שהתחלתי לעבוד עליו, ככלל אי אפשר לבטל אותו, להחזיר אותו או להחליף אותו. במוצרים האחרים, או אם יש בעיה עם ההזמנה, פנו אליי במהירות ונמצא פתרון ביחד."],
        ["Dernière mise à jour : 7 octobre 2026.", "Last updated: 7 October 2026.", "עודכן לאחרונה: 7 באוקטובר 2026."],
        ["Un compte est nécessaire pour commander", "An account is required to order", "נדרש חשבון כדי להזמין"],
        ["Créez votre compte gratuit en 30 secondes : vos informations seront enregistrées et vous retrouverez votre historique de commandes.", "Create your free account in 30 seconds: your details will be saved and you'll find your order history.", "פתחו חשבון חינם תוך 30 שניות: הפרטים שלכם יישמרו ותמצאו את היסטוריית ההזמנות."],
        ["J'ai déjà un compte", "I already have an account", "יש לי כבר חשבון"],
        ["Créez-le en 30 secondes : votre panier est conservé.", "Create it in 30 seconds: your cart is kept.", "פתחו אותו תוך 30 שניות: העגלה שלכם נשמרת."],
        ["Pour passer commande, connectez-vous ou créez un compte gratuit. Vous reviendrez ensuite directement à votre commande.", "To place an order, log in or create a free account. You'll then come straight back to your order.", "כדי להזמין, התחברו או פתחו חשבון חינם. לאחר מכן תחזרו ישר להזמנה."],
        ["Toutes", "All", "הכול"],
        ["Non lues", "Unread", "שלא נקראו"],
        ["Tout marquer comme lu", "Mark all as read", "סימון הכול כנקרא"],
        ["Restez au courant", "Stay in the loop", "הישארו מעודכנים"],
        ["Rien de nouveau", "Nothing new", "אין חדש"],
        ["Vous serez prévenu ici dès qu'un nouveau tableau est publié.", "You'll be notified here as soon as a new painting is published.", "תקבלו כאן עדכון ברגע שיפורסם ציור חדש."],
        ["Notifications désactivées", "Notifications turned off", "התראות כבויות"],
        ["Tout est à jour", "You're all caught up", "הכול מעודכן"],
        ["Vous n'avez aucune notification non lue.", "You have no unread notifications.", "אין לכם התראות שלא נקראו."],
        ["Ce que je veux recevoir", "What I want to receive", "מה אני רוצה לקבל"],
        ["Nouveaux tableaux", "New paintings", "ציורים חדשים"],
        ["Dès qu'une création est ajoutée.", "As soon as a creation is added.", "ברגע שנוספת יצירה."],
        ["Offres", "Offers", "הצעות"],
        ["Réductions et occasions à ne pas manquer.", "Discounts and deals you won't want to miss.", "הנחות והזדמנויות שלא כדאי לפספס."],
        ["Infos du site", "Site news", "חדשות האתר"],
        ["Nouveautés pratiques, annonces.", "Practical updates and announcements.", "עדכונים מעשיים והודעות."],
        ["Message à ma connexion", "Message when I arrive", "הודעה בעת הכניסה"],
        ["Un petit message vous signale les notifications non lues quand vous arrivez sur le site.", "A small message tells you about unread notifications when you arrive on the site.", "הודעה קטנה תיידע אתכם על התראות שלא נקראו כשתגיעו לאתר."],
        ["Préférences enregistrées.", "Preferences saved.", "ההעדפות נשמרו."],
        ["À découvrir", "To discover", "לגלות"],
        ["● Poster disponible", "● Poster available", "● פוסטר זמין"],
        ["● Original disponible", "● Original available", "● המקור זמין"],
        ["Suggestions", "Suggestions", "הצעות"],
        ["1 tableau", "1 painting", "ציור אחד"],
        ["pour fermer", "to close", "לסגירה"],
        ["Échap", "Esc", "Esc"],
        ["Rechercher un tableau…", "Search for a painting…", "חיפוש ציור…"],
        ["Rechercher un tableau", "Search for a painting", "חיפוש ציור"],
        ["Rechercher un tableau par son nom…", "Search for a painting by name…", "חיפוש ציור לפי שם…"],
        ["Aucun tableau ne porte ce nom.", "No painting has that name.", "אין ציור בשם הזה."],
        ["Je veux un tableau sur mesure", "I want a custom painting", "אני רוצה ציור בהתאמה אישית"],
        ["Notifications", "Notifications", "התראות"],
        ["Connectez-vous pour être prévenu des nouveaux tableaux, sur le site et par e-mail.", "Log in to be notified of new paintings, on the site and by email.", "התחברו כדי לקבל עדכון על ציורים חדשים, באתר ובאימייל."],
        ["Les notifications du site sont désactivées.", "Site notifications are turned off.", "התראות האתר כבויות."],
        ["Gérer mes notifications", "Manage my notifications", "ניהול ההתראות שלי"],
        ["Rien de nouveau pour l'instant. Vous serez prévenu ici dès qu'un nouveau tableau est publié.", "Nothing new for now. You'll be notified here as soon as a new painting is published.", "אין חדש כרגע. תקבלו כאן עדכון ברגע שיפורסם ציור חדש."],
        ["Voir", "View", "צפייה"],
        ["Mes notifications", "My notifications", "ההתראות שלי"],
        ["Notifications sur le site", "Notifications on the site", "התראות באתר"],
        ["Une cloche vous prévient des nouveaux tableaux quand vous êtes connecté.", "A bell tells you about new paintings when you're logged in.", "פעמון מעדכן אתכם על ציורים חדשים כשאתם מחוברים."],
        ["Nouveautés par e-mail", "New paintings by email", "חידושים באימייל"],
        ["Un e-mail à l'adresse de votre compte quand un nouveau tableau est publié.", "An email to your account address when a new painting is published.", "אימייל לכתובת החשבון שלכם כשמתפרסם ציור חדש."],
        ["Notifications du site activées.", "Site notifications turned on.", "התראות האתר הופעלו."],
        ["Notifications du site désactivées.", "Site notifications turned off.", "התראות האתר כובו."],
        ["Enregistrement…", "Saving…", "שומר…"],
        ["C'est noté : vous recevrez les nouveautés par e-mail.", "Noted: you'll receive new paintings by email.", "נרשם: תקבלו חידושים באימייל."],
        ["Vous ne recevrez plus les nouveautés par e-mail.", "You will no longer receive new paintings by email.", "לא תקבלו יותר חידושים באימייל."],
        ["Impossible d'enregistrer pour le moment. Vérifiez votre connexion et réessayez.", "Unable to save right now. Check your connection and try again.", "לא ניתן לשמור כרגע. בדקו את החיבור ונסו שוב."],
        ["Nouveautés et e-mails", "News and emails", "חידושים ואימיילים"],
        ["Choisissez comment être prévenu des nouveaux tableaux.", "Choose how to be notified of new paintings.", "בחרו איך לקבל עדכון על ציורים חדשים."],
        ["Gérer", "Manage", "ניהול"],
        ["Être prévenu des nouveaux tableaux", "Be notified of new paintings", "קבלת עדכון על ציורים חדשים"],
        ["Connectez-vous pour recevoir des notifications sur le site et par e-mail.", "Log in to receive notifications on the site and by email.", "התחברו כדי לקבל התראות באתר ובאימייל."],
        ["Informations légales", "Legal information", "מידע משפטי"],
        ["Cette page est disponible en français uniquement.", "This page is available in French only.", "עמוד זה זמין בצרפתית בלבד."],
        ["Mentions légales", "Legal notice", "הודעה משפטית"],
        ["Confidentialité", "Privacy", "פרטיות"],
        ["Conditions de vente", "Terms of sale", "תנאי מכירה"],
        ["Sections", "Sections", "חלקים"],
        ["Aller au contenu", "Skip to content", "דלג לתוכן"],
        ["Cette page n'existe pas", "This page doesn't exist", "העמוד הזה לא קיים"],
        ["Le lien est peut-être ancien ou mal écrit. Retrouvez mes créations ou écrivez-moi directement.", "The link may be old or mistyped. Browse my creations or write to me directly.", "ייתכן שהקישור ישן או שגוי. עיינו ביצירות שלי או כתבו לי ישירות."],
        ["Retour à l'accueil", "Back to home", "חזרה לעמוד הבית"],
        ["Page introuvable - Ethan Gallery", "Page not found - Ethan Gallery", "העמוד לא נמצא - Ethan Gallery"],
        ["Informations légales - Ethan Gallery", "Legal information - Ethan Gallery", "מידע משפטי - Ethan Gallery"],
        ["Accessibilité", "Accessibility", "נגישות"],
        ["Contraste renforcé", "Increased contrast", "ניגודיות מוגברת"],
        ["Textes plus foncés (ou plus clairs en mode sombre) et bordures plus visibles.", "Darker text (or lighter in dark mode) and more visible borders.", "טקסט כהה יותר (או בהיר יותר במצב כהה) וגבולות בולטים יותר."],
        ["Police facile à lire", "Easy-to-read font", "גופן קל לקריאה"],
        ["Une police plus large et plus espacée, pour lire sans effort.", "A wider, more spaced font, for effortless reading.", "גופן רחב ומרווח יותר, לקריאה נוחה."],
        ["Souligner les liens", "Underline links", "קו תחתון לקישורים"],
        ["Les liens sont toujours soulignés pour mieux les repérer.", "Links are always underlined so they're easier to spot.", "קישורים מסומנים תמיד בקו תחתון כדי שיהיה קל לזהות אותם."],
        ["Boutons WhatsApp et Instagram flottants", "Floating WhatsApp and Instagram buttons", "כפתורי וואטסאפ ואינסטגרם צפים"],
        ["Les deux boutons ronds en bas de l'écran. Désactivez-les si vous les trouvez gênants.", "The two round buttons at the bottom of the screen. Turn them off if they bother you.", "שני הכפתורים העגולים בתחתית המסך. אפשר לכבות אותם אם הם מפריעים."],
        ["Très grande", "Extra large", "גדולה מאוד"],
        ["Tout reste sur cet appareil : le site ne vous suit pas.", "Everything stays on this device: the site doesn't track you.", "הכול נשאר במכשיר הזה: האתר לא עוקב אחריכם."],
        ["En savoir plus", "Learn more", "למידע נוסף"],
        ["Favoris, panier, compte et réglages dans un fichier.", "Favourites, cart, account and settings in one file.", "מועדפים, עגלה, חשבון והגדרות בקובץ אחד."],
        ["Télécharger", "Download", "הורדה"],
        ["Vider mes favoris", "Clear my favourites", "ריקון המועדפים"],
        ["Vider mon panier", "Empty my cart", "ריקון העגלה"],
        ["Vider", "Clear", "ריקון"],
        ["Tout supprimer", "Delete everything", "מחיקת הכול"],
        ["Compte, favoris, panier et réglages de cet appareil.", "Account, favourites, cart and settings on this device.", "חשבון, מועדפים, עגלה והגדרות במכשיר הזה."],
        ["Cliquer pour confirmer", "Click to confirm", "לחצו לאישור"],
        ["Fichier téléchargé", "File downloaded", "הקובץ הורד"],
        ["Favoris vidés", "Favourites cleared", "המועדפים רוקנו"],
        ["Panier vidé", "Cart emptied", "העגלה רוקנה"],
        ["Puis-je annuler ou retourner ma commande ?", "Can I cancel or return my order?", "האם אפשר לבטל או להחזיר הזמנה?"],
        ["Un tableau sur commande est réalisé sur mesure : une fois commencé, il ne peut en principe ni être annulé ni échangé. En cas de souci avec une commande, écrivez-moi vite et nous trouverons une solution. Tous les détails sont dans les conditions de vente.", "A custom painting is made to order: once started, it can in principle be neither cancelled nor exchanged. If there is a problem with an order, write to me quickly and we will find a solution. All the details are in the terms of sale.", "ציור בהזמנה אישית נעשה במיוחד בשבילכם: לאחר שהתחלתי, ככלל אי אפשר לבטל או להחליף אותו. אם יש בעיה עם הזמנה, כתבו לי מהר ונמצא פתרון. כל הפרטים בתנאי המכירה."],
        ["Mes données sont-elles protégées ?", "Is my data protected?", "האם המידע שלי מוגן?"],
        ["Oui. Le site n'utilise ni publicité ni cookies de suivi. Votre panier, vos favoris et vos réglages restent sur votre appareil, et vous pouvez tout télécharger ou effacer dans les Paramètres.", "Yes. The site uses no advertising and no tracking cookies. Your cart, favourites and settings stay on your device, and you can download or erase everything in Settings.", "כן. האתר לא משתמש בפרסומות ולא בעוגיות מעקב. העגלה, המועדפים וההגדרות נשארים במכשיר שלכם, ואפשר להוריד או למחוק הכול בהגדרות."],
        ["Ghost Face : le résultat", "Ghost Face: the result", "Ghost Face: התוצאה"],
        ["Tate Langdon : le début", "Tate Langdon: the beginning", "Tate Langdon: ההתחלה"],
        ["Ghost Face : étape par étape", "Ghost Face: step by step", "Ghost Face: שלב אחר שלב"],
        ["Dans l'atelier", "In the studio", "בסטודיו"],
        ["Quelques instants avec moi : la peinture, le travail, le résultat.", "A few moments with me: the painting, the work, the result.", "כמה רגעים איתי: הציור, העבודה, התוצאה."],
        ["Ne ratez pas mon prochain tableau", "Don't miss my next painting", "אל תפספסו את הציור הבא שלי"],
        ["Chaque tableau est une pièce unique. Dites-moi que vous voulez être prévenu, ou suivez-moi pour voir mes créations en avant-première.", "Every painting is a unique piece. Tell me you'd like to be notified, or follow me to see my creations first.", "כל ציור הוא יצירה ייחודית. כתבו לי שתרצו לקבל עדכון, או עקבו אחריי כדי לראות את היצירות שלי ראשונים."],
        ["Me prévenir sur WhatsApp", "Notify me on WhatsApp", "עדכנו אותי בוואטסאפ"],
        ["Me suivre sur Instagram", "Follow me on Instagram", "לעקוב אחריי באינסטגרם"],
        ["Voir toutes les créations", "View all creations", "לכל היצירות"],
        ["100 % fait main", "100% handmade", "100% עבודת יד"],
        ["Posters imprimés en option", "Printed posters available", "פוסטרים מודפסים כאופציה"],
        ["Ce tableau est unique : je peux en peindre une version pour vous", "This painting is unique: I can paint a version for you", "הציור הזה ייחודי: אני יכול לצייר גרסה בשבילכם"],
        ["Cliquez pour zoomer", "Click to zoom", "לחצו להגדלה"],
        ["Agrandir l'image", "Enlarge image", "הגדלת התמונה"],
        ["Fermer le zoom", "Close zoom", "סגירת ההגדלה"],

        // Descriptions des créations
        ["Portrait de Michael Jackson peint entièrement à la main. Une œuvre unique, idéale pour les passionnés de musique et de portraits artistiques.", "Portrait of Michael Jackson painted entirely by hand. A unique piece, ideal for music lovers and fans of artistic portraits.", "פורטרט של מייקל ג׳קסון שצויר כולו ביד. יצירה ייחודית, מושלמת לחובבי מוזיקה ופורטרטים אמנותיים."],
        ["Une création colorée inspirée de l'univers de Street Fighter, qui met en avant l'énergie et l'intensité du combat.", "A colourful creation inspired by the world of Street Fighter, highlighting the energy and intensity of combat.", "יצירה צבעונית בהשראת עולם Street Fighter, שמדגישה את האנרגיה והעוצמה של הקרב."],
        ["Une création artistique réalisée à la main sur toile. Une œuvre sombre et originale, pensée pour apporter une vraie présence à votre intérieur.", "An artistic creation made by hand on canvas. A dark, original piece designed to bring real presence to your home.", "יצירה אמנותית שנעשתה ביד על קנבס. יצירה כהה ומקורית, שנועדה להעניק לבית שלכם נוכחות אמיתית."],
        ["Portrait au crayon avec un travail détaillé sur le visage, les ombres et l'effet squelette. Une création sombre entièrement dessinée à la main.", "Pencil portrait with detailed work on the face, the shadows and the skeleton effect. A dark creation drawn entirely by hand.", "פורטרט בעיפרון עם עבודה מפורטת על הפנים, הצללים ואפקט השלד. יצירה כהה שצוירה כולה ביד."],
        ["Création inspirée de Sukuna, aux couleurs intenses et aux forts contrastes. Le noir, le rouge et le rose donnent beaucoup de puissance au personnage.", "Creation inspired by Sukuna, with intense colours and strong contrasts. Black, red and pink give the character a lot of power.", "יצירה בהשראת סוקונה, עם צבעים עזים וניגודיות חזקה. השחור, האדום והוורוד מעניקים לדמות עוצמה רבה."],
        ["Deadpool dans une ambiance plus légère. Les tons rouges, roses et violets donnent au dessin un style très reconnaissable.", "Deadpool in a lighter mood. The red, pink and purple tones give the drawing a very recognisable style.", "דדפול באווירה קלילה יותר. גווני האדום, הוורוד והסגול נותנים לציור סגנון מאוד מזוהה."],
        ["Création inspirée de Pain (Naruto Shippuden), dominée par le noir, le blanc et le rouge. Un dessin très contrasté.", "Creation inspired by Pain (Naruto Shippuden), dominated by black, white and red. A highly contrasted drawing.", "יצירה בהשראת פיין (נארוטו שיפודן), שבה שולטים השחור, הלבן והאדום. ציור עם ניגודיות גבוהה."],
        ["Une composition mêlant plusieurs personnages de Moon Knight. Le contraste entre les costumes clairs et le fond violet apporte de la profondeur.", "A composition blending several Moon Knight characters. The contrast between the light costumes and the purple background adds depth.", "קומפוזיציה המשלבת כמה דמויות של Moon Knight. הניגוד בין התלבושות הבהירות לרקע הסגול מוסיף עומק."],
        ["Une grande composition réunissant plusieurs héros araignées dans une scène dynamique, pleine de couleurs et de détails.", "A large composition bringing together several spider heroes in a dynamic scene, full of colours and details.", "קומפוזיציה גדולה המאגדת כמה גיבורי עכביש בסצנה דינמית, מלאת צבעים ופרטים."],
        ["Portrait inspiré de Ken Kaneki, avec un travail sur le contraste entre le noir et le blanc et quelques touches de couleur.", "Portrait inspired by Ken Kaneki, working on the contrast between black and white with a few touches of colour.", "פורטרט בהשראת קן קנקי, עם עבודה על הניגוד בין שחור ללבן וכמה נגיעות של צבע."],
        ["Une illustration très contrastée autour du noir, du blanc et du rouge. Les traits marqués donnent une impression de puissance et de mouvement.", "A highly contrasted illustration built around black, white and red. The bold lines give an impression of power and movement.", "איור בעל ניגודיות גבוהה סביב שחור, לבן ואדום. הקווים החדים יוצרים תחושה של עוצמה ותנועה."],
        ["Un guitariste dans une ambiance électrique. Les tons bleus, violets et rouges donnent à la scène une atmosphère intense.", "A guitarist in an electric atmosphere. The blue, purple and red tones give the scene an intense mood.", "גיטריסט באווירה חשמלית. גווני הכחול, הסגול והאדום נותנים לסצנה אווירה עוצמתית."],
        ["Création inspirée d'Ichigo, dominée par le bleu, le noir et le blanc. Le mouvement de la scène donne beaucoup d'énergie au personnage.", "Creation inspired by Ichigo, dominated by blue, black and white. The movement of the scene gives the character a lot of energy.", "יצירה בהשראת איצ׳יגו, שבה שולטים הכחול, השחור והלבן. התנועה בסצנה מעניקה לדמות המון אנרגיה."],
        ["Gohan entouré d'effets d'énergie, avec des couleurs puissantes. Les tons jaunes et bleus renforcent le dynamisme de la scène.", "Gohan surrounded by energy effects, with powerful colours. The yellow and blue tones strengthen the dynamism of the scene.", "גוהאן מוקף באפקטים של אנרגיה, בצבעים עוצמתיים. גווני הצהוב והכחול מחזקים את הדינמיות של הסצנה."],
        ["Un portrait sombre entièrement réalisé au crayon, avec un important travail sur les ombres, les contrastes et les détails. Une ambiance inquiétante.", "A dark portrait made entirely in pencil, with significant work on shadows, contrasts and details. A disturbing mood.", "פורטרט כהה שנעשה כולו בעיפרון, עם עבודה רבה על צללים, ניגודיות ופרטים. אווירה מטרידה."],
        ["Une création très colorée, en nuances de rose, violet et rouge, qui met en avant la puissance du personnage avec beaucoup de mouvement.", "A very colourful creation in shades of pink, purple and red, highlighting the character's power with a lot of movement.", "יצירה צבעונית מאוד, בגווני ורוד, סגול ואדום, שמדגישה את עוצמת הדמות עם הרבה תנועה."],
        ["Une création dynamique et très colorée. Les couleurs vives et les nombreux détails représentent le côté explosif du personnage.", "A dynamic and very colourful creation. The bright colours and the many details represent the explosive side of the character.", "יצירה דינמית וצבעונית מאוד. הצבעים החיים והפרטים הרבים מייצגים את הצד הנפיץ של הדמות."],
        ["Une ambiance volontairement sombre. Le mélange du noir, du blanc et du rouge crée un contraste puissant.", "A deliberately dark mood. The mix of black, white and red creates a powerful contrast.", "אווירה כהה בכוונה. השילוב של שחור, לבן ואדום יוצר ניגודיות עוצמתית."],
        ["Une création qui cherche à représenter toute la puissance de Gohan Beast : couleurs intenses, contrastes et détails.", "A creation that tries to capture all the power of Gohan Beast: intense colours, contrasts and details.", "יצירה שמנסה ללכוד את כל העוצמה של גוהאן ביסט: צבעים עזים, ניגודיות ופרטים."],
        ["Un portrait au crayon avec un travail particulier sur le visage, les ombres et les détails. Une atmosphère sombre et précise.", "A pencil portrait with particular attention to the face, the shadows and the details. A dark, precise atmosphere.", "פורטרט בעיפרון עם תשומת לב מיוחדת לפנים, לצללים ולפרטים. אווירה כהה ומדויקת."],
        ["Une création très colorée inspirée de Kid Buu et de Dragon Ball, aux nuances de rose et aux couleurs intenses.", "A very colourful creation inspired by Kid Buu and Dragon Ball, with shades of pink and intense colours.", "יצירה צבעונית מאוד בהשראת קיד בו ודרגון בול, עם גווני ורוד וצבעים עזים."],
        ["Un portrait du Joker principalement au crayon, avec une attention particulière portée au visage, au regard et aux ombres.", "A portrait of the Joker mainly in pencil, with particular attention to the face, the gaze and the shadows.", "פורטרט של הג׳וקר בעיקר בעיפרון, עם תשומת לב מיוחדת לפנים, למבט ולצללים."],

        // Paramètres et étapes de commande
        ["Paramètres", "Settings", "הגדרות"],
        ["Paramètres - Ethan Gallery", "Settings - Ethan Gallery", "הגדרות - Ethan Gallery"],
        ["Thème clair ou sombre, taille du texte, animations et langue : réglez le site à votre goût, sans compte.", "Light or dark theme, text size, animations and language: set the site up your way, no account needed.", "ערכת נושא בהירה או כהה, גודל טקסט, אנימציות ושפה: התאימו את האתר לטעמכם, בלי חשבון."],
        ["Ces réglages sont enregistrés sur cet appareil. Pas besoin de compte.", "These settings are saved on this device. No account needed.", "ההגדרות נשמרות במכשיר הזה. אין צורך בחשבון."],
        ["Apparence", "Appearance", "מראה"],
        ["Automatique suit le réglage de votre téléphone ou de votre ordinateur.", "Automatic follows the setting of your phone or computer.", "אוטומטי עוקב אחרי ההגדרה של הטלפון או המחשב שלכם."],
        ["Automatique", "Automatic", "אוטומטי"],
        ["Mouvement", "Motion", "תנועה"],
        ["Effets d'apparition et survols animés.", "Fade-in effects and animated hovers.", "אפקטי הופעה ואנימציות בריחוף."],
        ["Fondu rapide quand vous changez de page.", "A quick fade when you change page.", "מעבר מהיר ועדין כשעוברים בין עמודים."],
        ["Langue du site", "Site language", "שפת האתר"],
        ["Réinitialiser les réglages", "Reset settings", "איפוס ההגדרות"],
        ["✓ Validé", "✓ Done", "✓ הושלם"],
        ["Valider et voir le récapitulatif", "Confirm and see the summary", "אישור וצפייה בסיכום"],
        ["Progression de votre commande", "Your order progress", "התקדמות ההזמנה"],

        // Extras : aperçu, cadeau, avis, avant/après, partage
        ["Voyez la taille chez vous", "See the size at home", "ראו את הגודל אצלכם בבית"],
        ["Choisissez un format pour voir le tableau au-dessus d'un canapé de 2 mètres.", "Choose a size to see the painting above a 2-metre sofa.", "בחרו גודל כדי לראות את הציור מעל ספה של 2 מטרים."],
        ["Voir un autre tableau", "See another painting", "עוד ציור"],
        ["Aperçu du tableau au-dessus d'un canapé de 2 mètres", "Preview of the painting above a 2-metre sofa", "תצוגה מקדימה של הציור מעל ספה של 2 מטרים"],
        ["Votre photo", "Your photo", "התמונה שלכם"],
        ["Aperçu dans une pièce", "Preview in a room", "תצוגה בחדר"],
        ["Aperçu indicatif, canapé de 2 m. Votre photo sert d'illustration : le tableau sera peint à la main.", "Indicative preview, 2 m sofa. Your photo is only an illustration: the painting will be made by hand.", "תצוגה מקורבת, ספה של 2 מ׳. התמונה שלכם משמשת להמחשה בלבד: הציור ייעשה ביד."],
        ["Offrez un tableau unique", "Give a one-of-a-kind painting", "תנו במתנה ציור ייחודי"],
        ["Anniversaire, mariage, naissance, fête : un portrait peint à la main à partir d'une photo, c'est un cadeau dont on se souvient. Indiquez simplement pour qui il est et la date souhaitée.", "Birthday, wedding, new baby, holiday: a portrait painted by hand from a photo is a gift people remember. Just tell me who it is for and the date you need.", "יום הולדת, חתונה, לידה, חג: פורטרט שצויר ביד מתמונה הוא מתנה שזוכרים. פשוט ספרו לי למי זה מיועד ומתי צריך."],
        ["Offrir un tableau", "Give a painting", "לתת ציור במתנה"],
        ["C'est un cadeau", "It's a gift", "זו מתנה"],
        ["Pour qui ?", "Who is it for?", "למי זה מיועד?"],
        ["Prénom de la personne", "The person's first name", "שם פרטי של המקבל/ת"],
        ["À recevoir avant le (facultatif)", "Needed before (optional)", "נדרש עד לתאריך (לא חובה)"],
        ["Petit mot à joindre (facultatif)", "Short note to include (optional)", "פתק קטן לצירוף (לא חובה)"],
        ["Joyeux anniversaire...", "Happy birthday...", "יום הולדת שמח..."],
        ["Je vous confirme sur WhatsApp les possibilités (emballage, remise, livraison).", "I confirm the options with you on WhatsApp (wrapping, handover, delivery).", "אאשר איתכם בוואטסאפ את האפשרויות (אריזה, מסירה, משלוח)."],
        ["Cadeau", "Gift", "מתנה"],
        ["Oui", "Yes", "כן"],
        ["Ils ont reçu leur tableau", "They received their painting", "הם קיבלו את הציור שלהם"],
        ["Les mots de celles et ceux qui m'ont fait confiance.", "Words from those who trusted me.", "מילים מאלה שנתנו בי אמון."],
        ["Laisser mon avis", "Leave my review", "להשאיר ביקורת"],
        ["De la photo au tableau", "From photo to painting", "מתמונה לציור"],
        ["Faites glisser le curseur pour comparer la photo envoyée et le tableau terminé.", "Slide to compare the photo that was sent with the finished painting.", "החליקו את הסמן כדי להשוות בין התמונה ששלחו לציור המוגמר."],
        ["Avant", "Before", "לפני"],
        ["Après", "After", "אחרי"],
        ["Comparer avant et après", "Compare before and after", "השוואה בין לפני לאחרי"],
        ["Tableau terminé", "Finished painting", "הציור המוגמר"],
        ["Photo d'origine", "Original photo", "התמונה המקורית"],
        ["Partager ce tableau", "Share this painting", "שיתוף הציור"],
        ["Copier le lien", "Copy link", "העתקת הקישור"],
        ["Plus d'options", "More options", "עוד אפשרויות"],
        ["Lien copié", "Link copied", "הקישור הועתק"],
        ["Une question ? Écrivez-moi", "A question? Write to me", "יש שאלה? כתבו לי"],
        ["Une question ? Écrivez-moi sur WhatsApp", "A question? Write to me on WhatsApp", "יש שאלה? כתבו לי בוואטסאפ"],
        ["Mon Instagram", "My Instagram", "האינסטגרם שלי"],
        ["Voir mon Instagram", "See my Instagram", "לצפייה באינסטגרם שלי"],

        // Navigation et pied de page
        ["Accueil", "Home", "בית"],
        ["Créations", "Creations", "יצירות"],
        ["Comment ça marche", "How it works", "איך זה עובד"],
        ["Contact", "Contact", "יצירת קשר"],
        ["Commander", "Order", "הזמנה"],
        ["Mon compte", "My account", "החשבון שלי"],
        ["Mon panier", "My cart", "העגלה שלי"],
        ["Ouvrir le menu", "Open the menu", "פתיחת התפריט"],
        ["Fermer", "Close", "סגירה"],
        ["Tableau Dark Angel, peint à la main", "Dark Angel painting, handmade", "ציור Dark Angel, מצויר ביד"],
        ["Langue", "Language", "שפה"],
        ["Tableaux et portraits personnalisés, peints et dessinés à la main.", "Custom paintings and portraits, painted and drawn by hand.", "ציורים ופורטרטים בהתאמה אישית, מצוירים ומעוצבים ביד."],
        ["Découvrir", "Discover", "גלו"],
        ["Formulaire de contact", "Contact form", "טופס יצירת קשר"],
        ["© 2026 Ethan Gallery. Originaux faits main, posters imprimés en option.", "© 2026 Ethan Gallery. Handmade originals, printed posters optional.", "© 2026 Ethan Gallery. מקוריים בעבודת יד, פוסטרים מודפסים כאפשרות."],
        ["Retour en haut", "Back to top", "חזרה למעלה"],

        // Méta et titres de page
        ["Ethan Gallery - Tableaux personnalisés", "Ethan Gallery - Custom paintings", "Ethan Gallery - ציורים בהתאמה אישית"],
        ["Ethan Gallery : transformez vos photos en tableaux personnalisés, peints et dessinés à la main. Envoyez votre photo et votre idée, je m'occupe du reste.", "Ethan Gallery: turn your photos into custom paintings, painted and drawn by hand. Send your photo and your idea, I take care of the rest.", "Ethan Gallery: הופכים את התמונות שלכם לציורים בהתאמה אישית, מצוירים ביד. שלחו תמונה ורעיון, ואני אדאג לשאר."],
        ["Mes créations - Ethan Gallery", "My creations - Ethan Gallery", "היצירות שלי - Ethan Gallery"],
        ["Découvrez les tableaux, portraits et peintures réalisés à la main par Ethan Gallery. Commandez une création disponible sur WhatsApp.", "Discover the paintings, portraits and artworks handmade by Ethan Gallery. Order an available creation on WhatsApp.", "גלו את הציורים והפורטרטים שנעשו ביד על ידי Ethan Gallery. הזמינו יצירה זמינה בוואטסאפ."],
        ["Commander un tableau personnalisé - Ethan Gallery", "Order a custom painting - Ethan Gallery", "הזמנת ציור בהתאמה אישית - Ethan Gallery"],
        ["Créez votre tableau personnalisé : ajoutez votre photo, choisissez le format et le style, puis envoyez votre demande sur WhatsApp.", "Create your custom painting: add your photo, choose the size and style, then send your request on WhatsApp.", "צרו ציור בהתאמה אישית: הוסיפו תמונה, בחרו גודל וסגנון ושלחו את הבקשה בוואטסאפ."],
        ["Comment ça marche - Ethan Gallery", "How it works - Ethan Gallery", "איך זה עובד - Ethan Gallery"],
        ["De votre photo à votre tableau en 4 étapes, avec les tarifs par format et les réponses aux questions fréquentes.", "From your photo to your painting in 4 steps, with prices by size and answers to frequently asked questions.", "מהתמונה שלכם לציור ב-4 שלבים, עם מחירים לפי גודל ותשובות לשאלות נפוצות."],
        ["Contact - Ethan Gallery", "Contact - Ethan Gallery", "יצירת קשר - Ethan Gallery"],
        ["Une question ou un projet de tableau personnalisé ? Contactez Ethan Gallery, réponse dès que possible.", "A question or a custom painting project? Contact Ethan Gallery, I reply as soon as possible.", "שאלה או פרויקט של ציור בהתאמה אישית? צרו קשר עם Ethan Gallery ואחזור אליכם בהקדם."],
        ["Mon panier - Ethan Gallery", "My cart - Ethan Gallery", "העגלה שלי - Ethan Gallery"],
        ["Vérifiez votre panier et envoyez votre commande sur WhatsApp.", "Check your cart and send your order on WhatsApp.", "בדקו את העגלה ושלחו את ההזמנה בוואטסאפ."],
        ["Mon compte - Ethan Gallery", "My account - Ethan Gallery", "החשבון שלי - Ethan Gallery"],
        ["Connectez-vous, gérez vos paramètres et retrouvez vos commandes.", "Log in, manage your settings and find your orders.", "התחברו, נהלו את ההגדרות ומצאו את ההזמנות שלכם."],

        // Accueil
        ["Votre photo devient une œuvre.", "Your photo becomes a work of art.", "התמונה שלכם הופכת ליצירת אמנות."],
        ["Un tableau peint à la main à partir de votre photo : un portrait, un souvenir, votre personnage préféré. Envoyez votre image, choisissez le format, je m'occupe du reste.", "A painting made by hand from your photo: a portrait, a memory, your favourite character. Send your image, choose the size, I take care of the rest.", "ציור שנעשה ביד מהתמונה שלכם: פורטרט, זיכרון, הדמות האהובה עליכם. שלחו תמונה, בחרו גודל, ואני אדאג לשאר."],
        ["Commander mon tableau", "Order my painting", "להזמנת הציור שלי"],
        ["Voir les créations", "View the creations", "לצפייה ביצירות"],
        ["Peint à la main", "Hand-painted", "מצויר ביד"],
        ["Prix annoncé d'avance", "Price announced upfront", "המחיר ידוע מראש"],
        ["Poster imprimé en option", "Printed poster optional", "פוסטר מודפס כאפשרות"],
        ["Quelques-unes de mes créations", "A few of my creations", "כמה מהיצירות שלי"],
        ["Mes dernières créations", "My latest creations", "היצירות האחרונות שלי"],
        ["De votre photo à votre tableau", "From your photo to your painting", "מהתמונה שלכם אל הציור"],
        ["1. Envoyez votre photo", "1. Send your photo", "1. שולחים תמונה"],
        ["Une photo nette et bien éclairée donne le meilleur résultat. Ajoutez-la sur la page Commander.", "A sharp, well-lit photo gives the best result. Add it on the Order page.", "תמונה חדה ומוארת היטב נותנת את התוצאה הטובה ביותר. מוסיפים אותה בעמוד ההזמנה."],
        ["2. Choisissez votre format", "2. Choose your size", "2. בוחרים גודל"],
        ["Trois tailles, un style, et quelques mots sur vos couleurs et votre idée. Le prix s'affiche tout de suite.", "Three sizes, one style, and a few words about your colours and your idea. The price shows up right away.", "שלושה גדלים, סגנון, ומספר מילים על הצבעים והרעיון שלכם. המחיר מופיע מיד."],
        ["3. Je peins, vous recevez", "3. I paint, you receive", "3. אני מצייר, אתם מקבלים"],
        ["Nous confirmons ensemble le prix sur WhatsApp, puis je réalise votre tableau à la main.", "We confirm the price together on WhatsApp, then I make your painting by hand.", "מאשרים יחד את המחיר בוואטסאפ, ואז אני מצייר את הציור ביד."],
        ["Tous les détails et les questions fréquentes", "All the details and frequently asked questions", "כל הפרטים ושאלות נפוצות"],
        ["Les formats et les prix", "Sizes and prices", "גדלים ומחירים"],
        ["Chaque tableau est peint sur mesure. Le prix est annoncé d'avance et confirmé avec vous avant de commencer.", "Every painting is made to measure. The price is announced upfront and confirmed with you before I start.", "כל ציור נעשה בהתאמה אישית. המחיר ידוע מראש ומאושר איתכם לפני שאתחיל."],
        ["30 × 40 cm", "30 × 40 cm", "30 × 40 ס״מ"],
        ["50 × 70 cm", "50 × 70 cm", "50 × 70 ס״מ"],
        ["70 × 100 cm", "70 × 100 cm", "70 × 100 ס״מ"],
        ["Bureau, étagère", "Desk, shelf", "שולחן עבודה, מדף"],
        ["Salon, chambre", "Living room, bedroom", "סלון, חדר שינה"],
        ["Grand format, pièce maîtresse", "Large size, statement piece", "גודל גדול, יצירת מרכז"],
        ["à partir de", "from", "החל מ-"],
        ["À propos de moi", "About me", "קצת עליי"],
        ["Je m'appelle Ethan et ma passion est l'art. J'aime dessiner, peindre et donner vie à mes idées à travers des créations uniques. Au fil du temps, j'ai développé mon propre style et commencé à réaliser des portraits et des tableaux personnalisés.", "My name is Ethan and my passion is art. I love drawing, painting and bringing my ideas to life through unique creations. Over time I developed my own style and started making custom portraits and paintings.", "שמי איתן והאמנות היא התשוקה שלי. אני אוהב לצייר ולהפוך רעיונות ליצירות ייחודיות. עם הזמן פיתחתי סגנון משלי והתחלתי ליצור פורטרטים וציורים בהתאמה אישית."],
        ["À travers Ethan Gallery, je souhaite partager mon univers et créer des œuvres qui ont une vraie signification pour chaque personne.", "Through Ethan Gallery, I want to share my world and create works that truly mean something to each person.", "דרך Ethan Gallery אני רוצה לשתף את העולם שלי וליצור יצירות שיש להן משמעות אמיתית לכל אדם."],
        ["Plus de créations sur Instagram @Ethan_bitan", "More creations on Instagram @Ethan_bitan", "עוד יצירות באינסטגרם @Ethan_bitan"],
        ["Votre prochaine œuvre commence par une photo.", "Your next artwork starts with a photo.", "היצירה הבאה שלכם מתחילה בתמונה."],
        ["Envoyez-la moi avec votre idée. Je vous confirme le prix sur WhatsApp avant de commencer.", "Send it to me with your idea. I confirm the price with you on WhatsApp before I start.", "שלחו לי אותה יחד עם הרעיון שלכם. אאשר איתכם את המחיר בוואטסאפ לפני שאתחיל."],
        ["Écrire sur WhatsApp", "Write on WhatsApp", "כתיבה בוואטסאפ"],
        ["Commander sur WhatsApp", "Order on WhatsApp", "הזמנה בוואטסאפ"],
        ["Je veux un tableau dans le même style", "I want a painting in the same style", "אני רוצה ציור באותו סגנון"],

        // Créations (page)
        ["› Créations", "› Creations", "› יצירות"],
        ["Mes créations", "My creations", "היצירות שלי"],
        ["Chaque original est une pièce unique réalisée à la main, et chaque tableau existe aussi en poster imprimé, avec ou sans cadre. Choisissez votre version sur la carte, le prix s'adapte. Cliquez sur une création pour la voir en grand.", "Every original is a unique handmade piece, and every painting also exists as a printed poster, with or without a frame. Choose your version on the card and the price adapts. Click a creation to see it larger.", "כל מקור הוא יצירה ייחודית שנעשתה ביד, וכל ציור קיים גם כפוסטר מודפס, עם מסגרת או בלעדיה. בחרו גרסה בכרטיס והמחיר יתעדכן. לחצו על יצירה כדי לראות אותה בגדול."],
        ["Originaux faits main, posters imprimés en option", "Handmade originals, printed posters optional", "מקוריים בעבודת יד, פוסטרים מודפסים כאפשרות"],
        ["Pièces uniques", "Unique pieces", "יצירות ייחודיות"],
        ["Paiement et livraison convenus sur WhatsApp", "Payment and delivery agreed on WhatsApp", "תשלום ומשלוח מתואמים בוואטסאפ"],
        ["Filtres", "Filters", "סינון"],
        ["Rechercher", "Search", "חיפוש"],
        ["Ex : Joker, Goku...", "E.g. Joker, Goku...", "לדוגמה: Joker, Goku..."],
        ["Univers", "Universe", "עולם תוכן"],
        ["Technique", "Technique", "טכניקה"],
        ["Prix", "Price", "מחיר"],
        ["Tous les prix", "All prices", "כל המחירים"],
        ["Jusqu'à 450 ₪", "Up to 450 ₪", "עד 450 ₪"],
        ["451 à 600 ₪", "451 to 600 ₪", "451 עד 600 ₪"],
        ["Plus de 600 ₪", "Over 600 ₪", "מעל 600 ₪"],
        ["Disponibles seulement", "Available only", "זמינים בלבד"],
        ["Réinitialiser les filtres", "Reset filters", "איפוס הסינון"],
        ["Trier par", "Sort by", "מיון לפי"],
        ["Sélection", "Featured", "מומלצים"],
        ["Prix croissant", "Price: low to high", "מחיר: מהנמוך לגבוה"],
        ["Prix décroissant", "Price: high to low", "מחיר: מהגבוה לנמוך"],
        ["Nom (A à Z)", "Name (A to Z)", "שם (א׳ עד ת׳)"],
        ["Disponibles d'abord", "Available first", "זמינים קודם"],
        ["Tout", "All", "הכול"],
        ["Manga et anime", "Manga and anime", "מנגה ואנימה"],
        ["Super-héros et comics", "Superheroes and comics", "גיבורי על וקומיקס"],
        ["Horreur et séries", "Horror and series", "אימה וסדרות"],
        ["Musique, jeux et art", "Music, games and art", "מוזיקה, משחקים ואמנות"],
        ["Couleur", "Colour", "צבע"],
        ["Crayon", "Pencil", "עיפרון"],
        ["couleur", "colour", "צבע"],
        ["crayon", "pencil", "עיפרון"],
        ["Original vendu", "Original sold", "המקור נמכר"],
        ["vendu", "sold", "נמכר"],
        ["Sans cadre", "No frame", "בלי מסגרת"],
        ["Avec cadre", "With frame", "עם מסגרת"],
        ["Original", "Original", "מקור"],
        ["Poster imprimé", "Printed poster", "פוסטר מודפס"],
        ["Poster", "Poster", "פוסטר"],
        ["● Poster imprimé disponible", "● Printed poster available", "● פוסטר מודפס זמין"],
        ["● Pièce unique, disponible", "● Unique piece, available", "● יצירה ייחודית, זמינה"],
        ["● Original vendu", "● Original sold", "● המקור נמכר"],
        ["● Indisponible", "● Unavailable", "● לא זמין"],
        ["Indisponible", "Unavailable", "לא זמין"],
        ["Ajouter au panier", "Add to cart", "הוספה לעגלה"],
        ["✓ Dans le panier", "✓ In the cart", "✓ בעגלה"],
        ["♡ Ajouter aux favoris", "♡ Add to favourites", "♡ הוספה למועדפים"],
        ["♥ Dans mes favoris", "♥ In my favourites", "♥ במועדפים שלי"],
        ["Créez votre propre tableau", "Create your own painting", "צרו ציור משלכם"],
        ["Une de mes créations vous inspire ? Transformez votre photo, votre idée ou votre souvenir en une œuvre créée spécialement pour vous.", "Does one of my creations inspire you? Turn your photo, your idea or your memory into a work created just for you.", "אחת היצירות שלי נותנת לכם השראה? הפכו את התמונה, הרעיון או הזיכרון שלכם ליצירה שנוצרה במיוחד בשבילכם."],
        ["Créer mon tableau", "Create my painting", "ליצור את הציור שלי"],
        ["Aucun tableau ne correspond à ces filtres. Utilisez « Réinitialiser les filtres » pour tout revoir.", "No painting matches these filters. Use “Reset filters” to see everything again.", "אין ציור שמתאים לסינון הזה. השתמשו ב״איפוס הסינון״ כדי לראות הכול שוב."],
        ["Version du tableau", "Painting version", "גרסת הציור"],
        ["Cadre du poster", "Poster frame", "מסגרת הפוסטר"],
        ["Choisissez votre version", "Choose your version", "בחרו גרסה"],
        ["Original fait main", "Handmade original", "מקור בעבודת יד"],
        ["Poster imprimé", "Printed poster", "פוסטר מודפס"],
        ["Reproduction imprimée de ce tableau. Format confirmé avec vous sur WhatsApp.", "Printed reproduction of this painting. Size confirmed with you on WhatsApp.", "הדפסה של הציור הזה. הגודל מאושר איתכם בוואטסאפ."],
        ["Pièce unique, peinte ou dessinée à la main.", "Unique piece, painted or drawn by hand.", "יצירה ייחודית, מצוירת ביד."],
        ["Pièce unique", "Unique piece", "יצירה ייחודית"],
        ["Sur commande (pièce déjà vendue, refaite à la main)", "Made to order (piece already sold, redone by hand)", "לפי הזמנה (היצירה נמכרה, תיעשה מחדש ביד)"],
        ["Prix confirmé sur WhatsApp", "Price confirmed on WhatsApp", "מחיר מאושר בוואטסאפ"],
        ["Prix de départ, confirmé sur WhatsApp", "Starting price, confirmed on WhatsApp", "מחיר התחלתי, מאושר בוואטסאפ"],
        ["Ce tableau est indisponible", "This painting is unavailable", "הציור הזה אינו זמין"],
        ["Déjà dans votre panier", "Already in your cart", "כבר בעגלה שלכם"],
        ["✓ Ajouté au panier", "✓ Added to cart", "✓ נוסף לעגלה"],
        ["Retiré des favoris", "Removed from favourites", "הוסר מהמועדפים"],
        ["♥ Ajouté aux favoris", "♥ Added to favourites", "♥ נוסף למועדפים"],

        // Commande
        ["Créez votre tableau", "Create your painting", "צרו את הציור שלכם"],
        ["Configurez votre œuvre personnalisée en quelques étapes, le récapitulatif se met à jour au fur et à mesure.", "Set up your custom artwork in a few steps, the summary updates as you go.", "הגדירו את היצירה האישית שלכם בכמה שלבים, והסיכום מתעדכן תוך כדי."],
        ["Ajoutez votre photo", "Add your photo", "הוסיפו את התמונה שלכם"],
        ["Plus elle est nette et lumineuse, plus le résultat sera fidèle.", "The sharper and brighter it is, the more faithful the result.", "ככל שהיא חדה ומוארת יותר, התוצאה תהיה נאמנה יותר."],
        ["Choisir une photo", "Choose a photo", "בחירת תמונה"],
        ["JPG ou PNG, la plus nette possible", "JPG or PNG, as sharp as possible", "JPG או PNG, החדה ביותר שאפשר"],
        ["Aperçu de votre photo", "Preview of your photo", "תצוגה מקדימה של התמונה"],
        ["Choisissez le format", "Choose the size", "בחרו גודל"],
        ["Choisissez une taille", "Choose a size", "בחרו גודל"],
        ["Choisissez votre style", "Choose your style", "בחרו סגנון"],
        ["Choisissez un style", "Choose a style", "בחרו סגנון"],
        ["Portrait", "Portrait", "פורטרט"],
        ["Visage détaillé, rendu fidèle", "Detailed face, faithful result", "פנים מפורטות, תוצאה נאמנה"],
        ["Pop Art", "Pop Art", "פופ ארט"],
        ["Couleurs vives et contrastées", "Bright, contrasting colours", "צבעים חיים ומנוגדים"],
        ["Carte blanche", "Free choice", "חופש יצירתי"],
        ["Laissez l'artiste choisir", "Let the artist choose", "תנו לאמן לבחור"],
        ["Décrivez votre idée", "Describe your idea", "תארו את הרעיון שלכם"],
        ["Parlez-moi de votre idée, des couleurs, du rendu souhaité...", "Tell me about your idea, the colours, the look you want...", "ספרו לי על הרעיון, הצבעים והמראה שאתם רוצים..."],
        ["Votre commande", "Your order", "ההזמנה שלכם"],
        ["Récapitulatif de votre commande", "Summary of your order", "סיכום ההזמנה שלכם"],
        ["Photo", "Photo", "תמונה"],
        ["Format", "Size", "גודל"],
        ["Style", "Style", "סגנון"],
        ["Idée", "Idea", "רעיון"],
        ["Prix estimé", "Estimated price", "מחיר משוער"],
        ["À choisir", "To choose", "לבחירה"],
        ["À ajouter", "To add", "להוספה"],
        ["À décrire", "To describe", "לתיאור"],
        ["Renseignée", "Filled in", "מולא"],
        ["✓ Prix confirmé ensemble avant de commencer", "✓ Price confirmed together before starting", "✓ המחיר מאושר יחד לפני שמתחילים"],
        ["✓ Fait main, pièce unique", "✓ Handmade, unique piece", "✓ עבודת יד, יצירה ייחודית"],
        ["✓ WhatsApp s'ouvre avec votre demande déjà écrite : il ne reste qu'à envoyer votre photo", "✓ WhatsApp opens with your request already written: you only need to send your photo", "✓ וואטסאפ נפתח עם הבקשה שלכם כבר כתובה: נשאר רק לשלוח את התמונה"],
        ["Ajoutez une photo.", "Add a photo.", "הוסיפו תמונה."],
        ["Choisissez une taille.", "Choose a size.", "בחרו גודל."],
        ["Choisissez un style.", "Choose a style.", "בחרו סגנון."],
        ["Décrivez votre idée.", "Describe your idea.", "תארו את הרעיון שלכם."],
        ["Dernière étape : WhatsApp vient de s'ouvrir avec votre demande. Envoyez le message, puis envoyez aussi votre photo dans la conversation pour que je puisse commencer.", "Last step: WhatsApp has just opened with your request. Send the message, then also send your photo in the conversation so I can get started.", "שלב אחרון: וואטסאפ נפתח עם הבקשה שלכם. שלחו את ההודעה ואז שלחו גם את התמונה בשיחה כדי שאוכל להתחיל."],
        ["✓ Ajouté au panier. Retrouvez-le dans votre panier.", "✓ Added to cart. Find it in your cart.", "✓ נוסף לעגלה. תמצאו אותו בעגלה שלכם."],

        // Comment ça marche
        ["Comment ça marche ?", "How does it work?", "איך זה עובד?"],
        ["De votre photo à votre tableau, découvrez comment votre idée prend vie en seulement quelques étapes.", "From your photo to your painting, see how your idea comes to life in just a few steps.", "מהתמונה שלכם אל הציור: כך הרעיון שלכם מתעורר לחיים בכמה שלבים בלבד."],
        ["Envoyez votre photo", "Send your photo", "שלחו את התמונה שלכם"],
        ["Choisissez la photo que vous souhaitez transformer en une œuvre personnalisée.", "Choose the photo you want to turn into a custom artwork.", "בחרו את התמונה שאתם רוצים להפוך ליצירה אישית."],
        ["Personnalisez", "Customise", "התאימו אישית"],
        ["Sélectionnez le format, le style et décrivez-moi le résultat que vous imaginez.", "Select the size, the style and describe the result you imagine.", "בחרו גודל וסגנון ותארו לי את התוצאה שאתם מדמיינים."],
        ["Création", "Creation", "יצירה"],
        ["Je réalise votre tableau à la main, avec attention, pour donner vie à votre projet.", "I make your painting by hand, with care, to bring your project to life.", "אני יוצר את הציור ביד, בקפידה, כדי להפיח חיים בפרויקט שלכם."],
        ["Votre œuvre est prête", "Your artwork is ready", "היצירה שלכם מוכנה"],
        ["Votre tableau personnalisé est terminé et prêt à devenir une pièce unique.", "Your custom painting is finished and ready to become a unique piece.", "הציור האישי שלכם הושלם ומוכן להפוך ליצירה ייחודית."],
        ["Tarifs", "Prices", "מחירים"],
        ["Prix estimés selon le format", "Estimated prices by size", "מחירים משוערים לפי גודל"],
        ["Prix estimé", "Estimated price", "מחיר משוער"],
        ["Prix indicatifs pour une création sur mesure, confirmés avec vous avant de commencer. Les tableaux déjà réalisés ont leur propre prix sur la page Créations.", "Indicative prices for a made-to-measure creation, confirmed with you before I start. Paintings already made have their own price on the Creations page.", "מחירים מנחים ליצירה בהתאמה אישית, מאושרים איתכם לפני שמתחילים. לציורים שכבר נעשו יש מחיר משלהם בעמוד היצירות."],
        ["Questions fréquentes", "Frequently asked questions", "שאלות נפוצות"],
        ["Quels formats et quels prix ?", "Which sizes and prices?", "אילו גדלים ומחירים?"],
        ["Trois formats : 30 × 40 cm, 50 × 70 cm et 70 × 100 cm. Le prix est estimé à l'avance selon la taille, puis confirmé ensemble sur WhatsApp avant de commencer.", "Three sizes: 30 × 40 cm, 50 × 70 cm and 70 × 100 cm. The price is estimated in advance by size, then confirmed together on WhatsApp before I start.", "שלושה גדלים: 30 × 40 ס״מ, 50 × 70 ס״מ ו-70 × 100 ס״מ. המחיר משוער מראש לפי הגודל, ואז מאושר יחד בוואטסאפ לפני שמתחילים."],
        ["Quelle photo choisir ?", "Which photo should I choose?", "איזו תמונה לבחור?"],
        ["Une photo nette, bien éclairée et pas trop recadrée donne le meilleur résultat. Envoyez-la telle quelle depuis votre téléphone, sans la compresser.", "A sharp, well-lit photo that is not cropped too tightly gives the best result. Send it as it is from your phone, without compressing it.", "תמונה חדה, מוארת היטב ולא חתוכה יותר מדי נותנת את התוצאה הטובה ביותר. שלחו אותה כמו שהיא מהטלפון, בלי לדחוס אותה."],
        ["Quels styles proposez-vous ?", "Which styles do you offer?", "אילו סגנונות יש?"],
        ["Portrait, Pop Art, ou « laissez l'artiste choisir » si vous préférez me faire confiance. Vous pouvez aussi préciser couleurs et ambiance dans votre message.", "Portrait, Pop Art, or “let the artist choose” if you prefer to trust me. You can also specify colours and mood in your message.", "פורטרט, פופ ארט, או ״תנו לאמן לבחור״ אם אתם מעדיפים לתת בי אמון. אפשר גם לפרט צבעים ואווירה בהודעה."],
        ["Combien de temps pour recevoir mon tableau ?", "How long until I receive my painting?", "כמה זמן עד שאקבל את הציור?"],
        ["Cela dépend de la taille et du style choisis. Je vous confirme le prix exact dès que j'ai vu votre photo, avant de commencer.", "It depends on the size and style chosen. I confirm the exact price as soon as I have seen your photo, before I start.", "זה תלוי בגודל ובסגנון שנבחרו. אאשר את המחיר המדויק ברגע שאראה את התמונה, לפני שאתחיל."],
        ["Comment se passent le paiement et la livraison ?", "How do payment and delivery work?", "איך עובדים התשלום והמשלוח?"],
        ["Tout se règle directement avec moi sur WhatsApp : on convient ensemble du paiement et de la remise ou de l'envoi de votre tableau.", "Everything is settled directly with me on WhatsApp: we agree together on the payment and on the handover or shipping of your painting.", "הכול מתואם ישירות איתי בוואטסאפ: מסכמים יחד את התשלום ואת מסירת הציור או שליחתו."],
        ["Puis-je acheter un tableau déjà exposé ?", "Can I buy a painting that is already on display?", "אפשר לקנות ציור שכבר מוצג?"],
        ["Oui, ceux marqués disponibles sur la page Créations. Chaque tableau est une pièce unique : une fois vendu, il devient indisponible.", "Yes, the ones marked available on the Creations page. Each painting is a unique piece: once sold, it becomes unavailable.", "כן, אלה שמסומנים כזמינים בעמוד היצירות. כל ציור הוא יצירה ייחודית: ברגע שהוא נמכר, הוא לא זמין יותר."],
        ["Puis-je avoir un poster imprimé ?", "Can I get a printed poster?", "אפשר לקבל פוסטר מודפס?"],
        ["Oui, chaque création de la page Créations existe en poster imprimé, avec ou sans cadre, de 150 à 200 ₪ selon le tableau, plus 70 ₪ avec cadre. Même quand l'original est vendu, le poster reste disponible. Le format est confirmé avec vous sur WhatsApp.", "Yes, every creation on the Creations page exists as a printed poster, with or without a frame, from 150 to 200 ₪ depending on the painting, plus 70 ₪ with a frame. Even when the original is sold, the poster remains available. The size is confirmed with you on WhatsApp.", "כן, כל יצירה בעמוד היצירות קיימת כפוסטר מודפס, עם מסגרת או בלעדיה, מ-150 עד 200 ₪ לפי הציור, ועוד 70 ₪ עם מסגרת. גם כשהמקור נמכר, הפוסטר נשאר זמין. הגודל מאושר איתכם בוואטסאפ."],
        ["Je veux le même style qu'un tableau déjà vendu.", "I want the same style as a painting that is already sold.", "אני רוצה את אותו סגנון של ציור שכבר נמכר."],
        ["Pas de souci : commandez une création sur mesure et indiquez-moi dans votre message quel tableau vous a inspiré.", "No problem: order a made-to-measure creation and tell me in your message which painting inspired you.", "אין בעיה: הזמינו יצירה בהתאמה אישית וכתבו לי בהודעה איזה ציור נתן לכם השראה."],

        // Contact
        ["Parlons de votre projet.", "Let's talk about your project.", "בואו נדבר על הפרויקט שלכם."],
        ["Une question, une idée ou envie de créer un tableau personnalisé ? Envoyez-moi un message et expliquez-moi votre projet. Je vous répondrai dès que possible.", "A question, an idea, or want to create a custom painting? Send me a message and tell me about your project. I will reply as soon as possible.", "שאלה, רעיון או רצון ליצור ציור בהתאמה אישית? שלחו לי הודעה וספרו לי על הפרויקט. אחזור אליכם בהקדם."],
        ["WhatsApp", "WhatsApp", "וואטסאפ"],
        ["Instagram @Ethan_bitan", "Instagram @Ethan_bitan", "אינסטגרם @Ethan_bitan"],
        ["Votre nom", "Your name", "השם שלכם"],
        ["Votre e-mail", "Your email", "האימייל שלכם"],
        ["Sujet", "Subject", "נושא"],
        ["Votre message", "Your message", "ההודעה שלכם"],
        ["Ex : Question sur un tableau", "E.g. Question about a painting", "לדוגמה: שאלה על ציור"],
        ["Écrivez votre message ici...", "Write your message here...", "כתבו כאן את ההודעה..."],
        ["exemple@email.com", "example@email.com", "example@email.com"],
        ["Envoyer mon message", "Send my message", "שליחת ההודעה"],
        ["Envoi en cours...", "Sending...", "שולח..."],
        ["Mail envoyé ! Je vous répondrai dès que possible.", "Message sent! I will reply as soon as possible.", "ההודעה נשלחה! אחזור אליכם בהקדם."],
        ["Le mail n'a pas pu être envoyé. Écrivez-moi directement sur WhatsApp : +972 55 995 5591.", "The message could not be sent. Write to me directly on WhatsApp: +972 55 995 5591.", "לא ניתן היה לשלוח את ההודעה. כתבו לי ישירות בוואטסאפ: \u200E+972 55 995 5591."],

        // Panier
        ["Votre panier est vide.", "Your cart is empty.", "העגלה שלכם ריקה."],
        ["Téléphone (facultatif)", "Phone (optional)", "טלפון (לא חובה)"],
        ["Message (facultatif)", "Message (optional)", "הודעה (לא חובה)"],
        ["Livraison, remise en main propre, questions...", "Delivery, hand delivery, questions...", "משלוח, מסירה אישית, שאלות..."],
        ["Vider le panier", "Empty the cart", "ריקון העגלה"],
        ["Indiquez votre nom pour la commande.", "Enter your name for the order.", "הזינו את שמכם להזמנה."],
        ["Continuer mes achats", "Continue shopping", "המשך קניות"],
        ["Sur mesure", "Made to measure", "בהתאמה אישית"],
        ["WhatsApp vient de s'ouvrir avec votre commande. Envoyez le message dans la conversation.", "WhatsApp has just opened with your order. Send the message in the conversation.", "וואטסאפ נפתח עם ההזמנה שלכם. שלחו את ההודעה בשיחה."],
        ["WhatsApp vient de s'ouvrir avec votre commande. Envoyez le message, puis vos photos dans la conversation.", "WhatsApp has just opened with your order. Send the message, then your photos in the conversation.", "וואטסאפ נפתח עם ההזמנה שלכם. שלחו את ההודעה ואז את התמונות בשיחה."],
        ["Astuce :", "Tip:", "טיפ:"],
        ["créez un compte", "create an account", "פתחו חשבון"],
        [" pour retrouver vos infos et votre historique.", " to keep your details and your history.", " כדי לשמור את הפרטים וההיסטוריה שלכם."],

        // Compte
        ["Connexion", "Log in", "התחברות"],
        ["Créer un compte", "Create an account", "יצירת חשבון"],
        ["Nom", "Name", "שם"],
        ["E-mail", "Email", "אימייל"],
        ["Mot de passe", "Password", "סיסמה"],
        ["Mot de passe (6 caractères minimum)", "Password (6 characters minimum)", "סיסמה (לפחות 6 תווים)"],
        ["Total :", "Total:", "סה״כ:"],
        [" (6 caractères minimum)", " (6 characters minimum)", " (לפחות 6 תווים)"],
        ["Créer mon compte", "Create my account", "יצירת החשבון שלי"],
        ["Me connecter", "Log in", "התחברות"],
        ["Entrez une adresse e-mail valide.", "Enter a valid email address.", "הזינו כתובת אימייל תקינה."],
        ["Indiquez votre nom.", "Enter your name.", "הזינו את שמכם."],
        ["Le mot de passe doit contenir au moins 6 caractères.", "The password must contain at least 6 characters.", "הסיסמה חייבת להכיל לפחות 6 תווים."],
        ["Un compte existe déjà avec cet e-mail. Connectez-vous.", "An account already exists with this email. Log in.", "כבר קיים חשבון עם האימייל הזה. התחברו."],
        ["E-mail ou mot de passe incorrect.", "Incorrect email or password.", "אימייל או סיסמה שגויים."],
        ["Me déconnecter", "Log out", "התנתקות"],
        ["Mes informations", "My information", "הפרטים שלי"],
        ["Téléphone", "Phone", "טלפון"],
        ["Ville", "City", "עיר"],
        ["Adresse de livraison", "Delivery address", "כתובת למשלוח"],
        ["Contact préféré", "Preferred contact", "דרך יצירת קשר מועדפת"],
        ["Mode de réception", "How to receive", "אופן קבלה"],
        ["Appel", "Phone call", "שיחת טלפון"],
        ["À convenir", "To be agreed", "בתיאום"],
        ["Remise en main propre", "Hand delivery", "מסירה אישית"],
        ["Livraison", "Delivery", "משלוח"],
        ["Enregistrer", "Save", "שמירה"],
        ["Le nom ne peut pas être vide.", "The name cannot be empty.", "השם לא יכול להיות ריק."],
        ["Informations enregistrées.", "Information saved.", "הפרטים נשמרו."],
        ["Affichage", "Display", "תצוגה"],
        ["Thème", "Theme", "ערכת נושא"],
        ["Clair", "Light", "בהיר"],
        ["Sombre", "Dark", "כהה"],
        ["Automatique (selon l'appareil)", "Automatic (follows the device)", "אוטומטי (לפי המכשיר)"],
        ["Taille du texte", "Text size", "גודל הטקסט"],
        ["Normale", "Normal", "רגיל"],
        ["Grande", "Large", "גדול"],
        ["Animations activées", "Animations on", "אנימציות פעילות"],
        ["Transition entre les pages", "Transition between pages", "מעבר בין עמודים"],
        ["Aucun favori. Ouvrez un tableau et cliquez sur « Ajouter aux favoris ».", "No favourites yet. Open a painting and click “Add to favourites”.", "אין מועדפים עדיין. פתחו ציור ולחצו על ״הוספה למועדפים״."],
        ["Ajouter", "Add", "הוספה"],
        ["Aucun favori. Ouvrez un tableau et cliquez sur ♡.", "No favourites yet. Open a painting and click ♡.", "אין מועדפים עדיין. פתחו ציור ולחצו על ♡."],
        [" · indisponible", " · unavailable", " · לא זמין"],
        ["Sécurité", "Security", "אבטחה"],
        ["Mot de passe actuel", "Current password", "סיסמה נוכחית"],
        ["Nouveau mot de passe (6 caractères minimum)", "New password (6 characters minimum)", "סיסמה חדשה (לפחות 6 תווים)"],
        ["Changer le mot de passe", "Change password", "שינוי סיסמה"],
        ["Le mot de passe actuel est incorrect.", "The current password is incorrect.", "הסיסמה הנוכחית שגויה."],
        ["Le nouveau mot de passe doit contenir au moins 6 caractères.", "The new password must contain at least 6 characters.", "הסיסמה החדשה חייבת להכיל לפחות 6 תווים."],
        ["Mot de passe modifié.", "Password changed.", "הסיסמה שונתה."],
        ["Mes commandes", "My orders", "ההזמנות שלי"],
        ["Aucune commande envoyée pour le moment.", "No order sent yet.", "עוד לא נשלחה אף הזמנה."],
        ["Vider l'historique", "Clear history", "ניקוי ההיסטוריה"],
        ["Vider l'historique de vos commandes ?", "Clear your order history?", "לנקות את היסטוריית ההזמנות?"],
        ["Mes données", "My data", "הנתונים שלי"],
        ["Téléchargez une copie de vos informations ou supprimez votre compte.", "Download a copy of your information or delete your account.", "הורידו עותק של הפרטים שלכם או מחקו את החשבון."],
        ["Télécharger mes données", "Download my data", "הורדת הנתונים שלי"],
        ["Supprimer mon compte", "Delete my account", "מחיקת החשבון שלי"],
        ["Supprimer définitivement votre compte et votre historique ?", "Permanently delete your account and your history?", "למחוק לצמיתות את החשבון וההיסטוריה שלכם?"]
    ];

    // ---------- Phrases avec nombre ou nom variable ----------
    // Chaque motif reçoit le texte français et renvoie [anglais, hébreu] (ou null).
    const MOTIFS = [
        [/^Responsable de la publication : (.+)$/, (m) => ["Publisher: " + m[1], "אחראי על הפרסום: " + m[1]]],
        [/^Adresse : (.+)$/, (m) => ["Address: " + m[1], "כתובת: " + m[1]]],
        [/^Hébergeur du site : (.+)$/, (m) => ["Site host: " + m[1], "מארח האתר: " + m[1]]],
        [/^(.+) · (Avec cadre|Sans cadre)$/, (m) => [T(m[1], "en") + " · " + T(m[2], "en"), T(m[1], "he") + " · " + T(m[2], "he")]],
        [/^Exemple : (.+)$/, (m) => ["Example: " + T(m[1], "en"), "דוגמה: " + T(m[1], "he")]],
        [/^Note : (\d) sur 5$/, (m) => ["Rating: " + m[1] + " out of 5", "דירוג: " + m[1] + " מתוך 5"]],
        [/^Voir les (\d+) créations$/, (m) => ["View all " + m[1] + " creations", "לכל " + m[1] + " היצירות"]],
        [/^(\d+) tableau(x?)$/, (m) => [m[1] + (m[1] === "1" ? " painting" : " paintings"), m[1] === "1" ? "ציור אחד" : m[1] + " ציורים"]],
        [/^Prix estimé : (.+)$/, (m) => ["Estimated price: " + m[1], "מחיר משוער: " + m[1]]],
        [/^Total : (.+)$/, (m) => ["Total: " + m[1], "סה״כ: " + m[1]]],
        [/^Original · (.+)$/, (m) => ["Original · " + T(m[1], "en"), "מקור · " + T(m[1], "he")]],
        [/^Poster · (.+)$/, (m) => ["Poster · " + m[1], "פוסטר · " + m[1]]],
        [/^Avec cadre \(\+(\d+) ₪\)$/, (m) => ["With frame (+" + m[1] + " ₪)", "עם מסגרת (+" + m[1] + " ₪)"]],
        [/^Ajouter au panier · (.+)$/, (m) => ["Add to cart · " + m[1], "הוספה לעגלה · " + m[1]]],
        [/^Mes favoris \((\d+)\)$/, (m) => ["My favourites (" + m[1] + ")", "המועדפים שלי (" + m[1] + ")"]],
        [/^(.+) \((\d+)\)$/, (m) => { const a = T(m[1], "en"), b = T(m[1], "he"); return a === m[1] && b === m[1] ? null : [a + " (" + m[2] + ")", b + " (" + m[2] + ")"]; }],
        [/^Voir l'image (\d+)$/, (m) => ["View image " + m[1], "הצגת תמונה " + m[1]]],
        [/^Voir (.+)$/, (m) => ["View " + m[1], "הצגת " + m[1]]],
        [/^Retirer (.+) des favoris$/, (m) => ["Remove " + m[1] + " from favourites", "הסרת " + m[1] + " מהמועדפים"]],
        [/^Retirer (.+)$/, (m) => ["Remove " + m[1], "הסרת " + m[1]]],
        [/^Favori : (.+)$/, (m) => ["Favourite: " + m[1], "מועדף: " + m[1]]],
        [/^Version de (.+)$/, (m) => ["Version of " + m[1], "גרסה של " + m[1]]],
        [/^Cadre du poster (.+)$/, (m) => ["Poster frame " + m[1], "מסגרת הפוסטר " + m[1]]],
        [/^Poster (.+)$/, (m) => ["Poster " + m[1], "פוסטר " + m[1]]],
        [/^Tableau sur mesure (.+)$/, (m) => ["Made-to-measure painting " + m[1], "ציור בהתאמה אישית " + m[1]]],
        [/^Tableau (.+)$/, (m) => ["Painting " + m[1], "ציור " + m[1]]],
        [/^(.+) · indisponible$/, (m) => [m[1] + " · unavailable", m[1] + " · לא זמין"]],
        [/^(.+), (couleur|crayon)$/, (m) => { const a = T(m[1], "en"), b = T(m[1], "he"); return [a + ", " + T(m[2], "en"), b + ", " + T(m[2], "he")]; }],
        [/^Style : (.+)$/, (m) => ["Style: " + T(m[1], "en"), "סגנון: " + T(m[1], "he")]],
        [/^Sur mesure · Style : (.+?) \| Idée : ([\s\S]*)$/, (m) => ["Made to measure · Style: " + T(m[1], "en") + " | Idea: " + m[2], "בהתאמה אישית · סגנון: " + T(m[1], "he") + " | רעיון: " + m[2]]],
    ];

    // ---------- Moteur ----------
    const norm = (s) => s.replace(/[  ]/g, " ").replace(/’/g, "'");
    const INDEX = new Map(); // français normalisé -> {en, he}
    DICO.forEach(([fr, en, he]) => { INDEX.set(norm(fr).trim(), { en, he }); });
    const IDX_L = { en: "en", he: "he" };

    // Traduit une chaîne française. Renvoie la chaîne d'origine si rien ne correspond.
    // Noms des tableaux en hébreu (évite les phrases mélangées hébreu + lettres latines, dont le sens de lecture s'inverse)
    const NOMS_HE = [["Michael Jackson", "מייקל ג'קסון"], ["Street Fighter", "סטריט פייטר"], ["Dark Angel", "דארק אנג'ל"], ["Tate Langdon", "טייט לנגדון"], ["Sukuna", "סוקונה"], ["Deadpool in Love", "דדפול מאוהב"], ["Pain", "פיין"], ["Moon Knight", "מון נייט"], ["Spider Team", "ספיידר טים"], ["Ken Kaneki", "קן קנקי"], ["Eijiro Kirishima", "איג'ירו קירישימה"], ["Eddie", "אדי"], ["Ichigo", "איצ'יגו"], ["Gohan Beast", "גוהאן ביסט"], ["Gohan", "גוהאן"], ["Batman qui rit", "באטמן שצוחק"], ["Black Goku", "בלאק גוקו"], ["Deadpool", "דדפול"], ["Ghost Face", "גוסט פייס"], ["It", "איט"], ["Kid Buu", "קיד בו"], ["Joker", "ג'וקר"], ["Goku", "גוקו"]];
    const RE_NOMS_HE = NOMS_HE.slice().sort((a, b) => b[0].length - a[0].length).map(([f, h]) => [new RegExp("(?<![A-Za-z])" + f + "(?![A-Za-z])", "g"), h]);
    const nomsHe = (t) => { let r = t; for (const [re, h] of RE_NOMS_HE) r = r.replace(re, h); return r; };
    function T(fr, lang) {
        const r = T0(fr, lang);
        if (lang !== "he" || typeof r !== "string") return r;
        let h = nomsHe(r);
        if (h === "Ethan Gallery" || !/[\u0590-\u05FF]/.test(h)) return h;
        h = h.replace(/Ethan Gallery/g, "גלריית איתן");
        // les derniers mots latins (WhatsApp, @pseudo, e-mail) sont isolés pour que le sens de lecture ne s'inverse pas
        return h.replace(/[@A-Za-z][A-Za-z0-9_.@\-]*(?: [A-Za-z][A-Za-z0-9_.\-]*)*/g, "\u2066$&\u2069");
    }
    function T0(fr, lang) {
        if (!fr || lang === "fr") return fr;
        const cle = norm(fr).trim();
        const direct = INDEX.get(cle);
        if (direct) return direct[IDX_L[lang]];
        for (const [re, f] of MOTIFS) {
            const m = cle.match(re);
            if (!m) continue;
            const r = f(m);
            if (r) return r[lang === "en" ? 0 : 1];
        }
        return fr;
    }
    function lang() { try { const l = localStorage.getItem(CLE); return LANGUES[l] ? l : "fr"; } catch { return "fr"; } }
    let courante = lang();

    // Texte traduit en conservant les espaces autour (début et fin).
    function traduireTexte(brut, l) {
        const m = brut.match(/^(\s*)([\s\S]*?)(\s*)$/);
        if (!m[2]) return brut;
        const t = T(m[2], l);
        return t === m[2] ? brut : m[1] + t + m[3];
    }

    const noeuds = new WeakMap();   // noeud texte -> { fr, affiche }
    const attrs = new WeakMap();    // élément -> { attribut: { fr, affiche } }
    const ATTRS = ["placeholder", "aria-label", "title", "alt"];
    const IGNORE = "script, style, noscript, textarea, [data-no-trad]";

    function traiterTexte(n) {
        if (n.parentElement && n.parentElement.closest(IGNORE)) return;
        let r = noeuds.get(n);
        if (!r || n.nodeValue !== r.affiche) { r = { fr: n.nodeValue, affiche: n.nodeValue }; noeuds.set(n, r); }
        const v = courante === "fr" ? r.fr : traduireTexte(r.fr, courante);
        if (n.nodeValue !== v) n.nodeValue = v;
        r.affiche = n.nodeValue;
    }
    function traiterAttributs(el) {
        let a = attrs.get(el);
        for (const nom of ATTRS) {
            if (!el.hasAttribute(nom)) continue;
            if (!a) { a = {}; attrs.set(el, a); }
            const val = el.getAttribute(nom);
            let r = a[nom];
            if (!r || val !== r.affiche) { r = { fr: val, affiche: val }; a[nom] = r; }
            const v = courante === "fr" ? r.fr : traduireTexte(r.fr, courante);
            if (val !== v) el.setAttribute(nom, v);
            r.affiche = el.getAttribute(nom);
        }
    }
    const blocsHtml = new WeakMap(); // éléments [data-i18n] : html français d'origine
    const BLOCS = {
        "note-poster": {
            fr: null,
            en: 'Prefer a more affordable version? Every creation also exists as a <strong>printed poster</strong>, from <span>{min} ₪</span> to <span>{max} ₪</span>, with an optional frame (+<span>{cadre} ₪</span>).',
            he: 'מעדיפים גרסה זולה יותר? כל יצירה קיימת גם כ<strong>פוסטר מודפס</strong>, מ-<span>{min} ₪</span> עד <span>{max} ₪</span>, עם מסגרת כאפשרות (+<span>{cadre} ₪</span>).'
        }
    };
    function traiterBlocs(racine) {
        (racine.querySelectorAll ? racine.querySelectorAll("[data-i18n]") : []).forEach((el) => {
            const b = BLOCS[el.dataset.i18n];
            if (!b) return;
            if (!blocsHtml.has(el)) blocsHtml.set(el, el.innerHTML);
            if (courante === "fr") { el.innerHTML = blocsHtml.get(el); return; }
            const p = (typeof POSTER !== "undefined") ? POSTER : { min: 150, max: 200, SUPPLEMENT_CADRE: 70 };
            el.innerHTML = b[courante].replace("{min}", p.min).replace("{max}", p.max).replace("{cadre}", p.SUPPLEMENT_CADRE);
        });
    }
    // Fond de page / méta
    const metaOrig = {};
    function traiterMeta() {
        if (!("titre" in metaOrig)) metaOrig.titre = document.title;
        document.title = courante === "fr" ? metaOrig.titre : T(metaOrig.titre, courante);
        document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((m) => {
            if (!m._fr) m._fr = m.getAttribute("content");
            m.setAttribute("content", courante === "fr" ? m._fr : T(m._fr, courante));
        });
    }

    function parcourir(racine) {
        if (racine.nodeType === 3) { traiterTexte(racine); return; }
        if (racine.nodeType !== 1) return;
        if (racine.closest && racine.closest(IGNORE) && !racine.matches("[data-i18n]")) return;
        traiterBlocs(racine.parentNode && racine.parentNode.nodeType === 1 ? racine.parentNode : racine);
        const marcheur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
        let n = racine;
        do {
            if (n.nodeType === 3) traiterTexte(n);
            else if (n.nodeType === 1 && !n.closest("[data-no-trad]") && !n.matches("script, style")) traiterAttributs(n);
        } while ((n = marcheur.nextNode()));
    }

    // Observateur : traduit ce que le script ajoute après coup (panier, cartes, messages...)
    let occupe = false;
    const obs = new MutationObserver((muts) => {
        if (occupe) return;
        occupe = true;
        try {
            for (const m of muts) {
                if (m.type === "childList") m.addedNodes.forEach((x) => { if (!(x.nodeType === 1 && x.closest && x.closest("[data-i18n]") && x.closest("[data-i18n]") !== x)) parcourir(x); });
                else if (m.type === "characterData") traiterTexte(m.target);
                else if (m.type === "attributes") traiterAttributs(m.target);
            }
        } finally { occupe = false; obs.takeRecords(); }
    });
    const OPTIONS_OBS = { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS };

    // ---------- Sélecteur de langue ----------
    function construireSelecteur() {
        if (document.querySelector(".langue")) return;
        const liens = document.querySelector(".liens");
        if (!liens) return;
        const boite = document.createElement("div");
        boite.className = "langue";
        boite.setAttribute("role", "group");
        boite.setAttribute("aria-label", "Langue");
        boite.innerHTML = Object.keys(LANGUES).map((k) =>
            '<button type="button" data-lang="' + k + '" lang="' + k + '" aria-label="' + LANGUES[k].nom + '" title="' + LANGUES[k].nom + '">' + LANGUES[k].court + "</button>").join("");
        boite.addEventListener("click", (e) => {
            const b = e.target.closest("[data-lang]");
            if (b) definir(b.dataset.lang);
        });
        const premiereIcone = liens.querySelector(".icone-nav");
        liens.insertBefore(boite, premiereIcone || liens.querySelector(".bouton-nav-commander"));
        // ne pas traduire les libellés FR/EN/עב
        boite.setAttribute("data-no-trad", "");
        // Sur l'accueil (mobile) : le sélecteur de langue est aussi visible en haut de la page
        const texteHeros = document.querySelector(".heros-texte");
        if (texteHeros && !document.querySelector(".langue-accueil")) {
            const copie = boite.cloneNode(true);
            copie.classList.add("langue-accueil");
            copie.addEventListener("click", (e) => { const b = e.target.closest("[data-lang]"); if (b) definir(b.dataset.lang); });
            texteHeros.insertBefore(copie, texteHeros.firstChild);
            marquerSelecteur();
        }
    }
    function marquerSelecteur() {
        document.querySelectorAll(".langue [data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === courante));
    }

    function policeHebreu(actif) {
        let l = document.getElementById("police-he");
        if (actif && !l) {
            l = document.createElement("link");
            l.id = "police-he"; l.rel = "stylesheet";
            l.href = "https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700;800&display=swap";
            document.head.appendChild(l);
        }
    }

    function appliquer() {
        const cfg = LANGUES[courante];
        document.documentElement.lang = courante;
        document.documentElement.dir = cfg.dir;
        policeHebreu(courante === "he");
        obs.disconnect();
        occupe = true;
        parcourir(document.body);
        traiterMeta();
        occupe = false;
        marquerSelecteur();
        obs.observe(document.body, OPTIONS_OBS);
        // Les récapitulatifs lisent le texte des listes déroulantes : on les met à jour dans la nouvelle langue.
        const idee = document.getElementById("message-commande");
        if (idee && document.getElementById("r-photo")) idee.dispatchEvent(new Event("input", { bubbles: true }));
        document.dispatchEvent(new CustomEvent("langue-changee", { detail: courante }));
    }
    function definir(l) {
        if (!LANGUES[l] || l === courante) return;
        courante = l;
        try { localStorage.setItem(CLE, l); } catch { }
        appliquer();
    }

    window.EG_LANGUE = { definir, lire: () => courante, T: (fr) => T(fr, courante) };
    // Pour les alertes de confirmation (confirm) écrites en français dans script.js
    window.trad = (fr) => T(fr, courante);

    construireSelecteur();
    appliquer();
})();
