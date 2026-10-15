/* Ochane - fiches détaillées des lieux.
 *
 * Structure réutilisable : une entrée par lieu, clé "arrondissement|nom exact" (comme les favoris).
 * Champs affichés (tous facultatifs : un champ absent n'est simplement pas affiché, jamais de "À vérifier") :
 *   verified   date ISO de la dernière vérification sur les sites officiels
 *   summary    description courte et utile
 *   address    adresse complète
 *   metro      station la plus pratique (+ correspondances utiles) ; texte, ou liste de textes
 *   hours      { lines: [...], note: "..." }
 *   price      { lines: [...], free: [...], note: "..." }
 *   site       URL du site officiel
 *   tickets    URL de la billetterie officielle (le bouton "Billets" n'apparaît que si elle existe)
 *   ticketsLabel  libellé du bouton si "Billets" ne convient pas (facultatif)
 *   access     { level: "Partielle", note: "..." }
 *   tip        conseil pratique Ochane
 *   photo      { src, alt, credit, license, licenseUrl, source } : affichée seulement si le fichier existe et que crédit + licence sont renseignés
 * Champs internes, jamais affichés au visiteur :
 *   sources    pages officielles consultées
 *   todo       informations manquantes ou incertaines à vérifier avant de les afficher
 */
window.OCHANE_DETAILS = {
  "7|Tour Eiffel": {
    verified: "2026-10-16",
    summary: "Montée au 2e étage ou au sommet, par l'escalier ou l'ascenseur. Les jardins et le parvis sont en accès libre ; les billets sont nominatifs.",
    address: "5 avenue Anatole France, 75007 Paris",
    metro: "Bir-Hakeim (ligne 6), moins de 10 minutes à pied de l'entrée 1. Alternative : RER C Champ de Mars – Tour Eiffel, 5 minutes à pied.",
    hours: {
      lines: ["Tous les jours, 9 h 30 – 23 h (horaires affichés pour octobre 2026)", "Dernières ascensions à 22 h 45"],
      note: "Les horaires peuvent changer sans préavis. L'accès au sommet peut être interrompu en cas de météo difficile ou de forte affluence."
    },
    price: {
      lines: [
        "2e étage, ascenseur : 23,50 € adulte · 11,80 € jeune (12-24 ans) · 6 € enfant (4-11 ans)",
        "2e étage, escaliers : 14,80 € · 7,40 € · 3,80 €",
        "Sommet, ascenseur : 36,70 € · 18,40 € · 9,20 €",
        "Sommet, escaliers puis ascenseur : 28 € · 14 € · 7 €"
      ],
      free: ["Moins de 4 ans : billet gratuit obligatoire", "Jardins et parvis : accès libre"],
      note: "Tarif réduit sur justificatif. Nouveaux tarifs à partir du 11 janvier 2027."
    },
    site: "https://www.toureiffel.paris/fr",
    tickets: "https://ticket.toureiffel.paris/fr",
    access: {
      level: "Partielle",
      note: "Le 1er étage et le 2e étage (niveau inférieur) sont accessibles en fauteuil roulant. Le sommet et l'accès par escaliers ne le sont pas. Tarif réduit pour les personnes en situation de handicap."
    },
    tip: "Achète ton e-billet à l'avance : il est nominatif et une pièce d'identité est demandée pour chaque personne, enfants compris. Compte 10 à 20 minutes de contrôle de sécurité avant d'atteindre le parvis. Réserve tôt de juin à septembre, pendant les vacances scolaires et les jours fériés.",
    photo: { src: "img/places/tour-eiffel.jpg", alt: "Tour Eiffel, Paris", credit: "Gerd Eichmann", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Paris-Tour_Eiffel-106-2017-gje.jpg" },
    sources: ["https://www.toureiffel.paris/fr/tarifs-horaires", "https://www.toureiffel.paris/fr/plan-acces", "https://www.toureiffel.paris/fr/bien-preparer-votre-visite", "https://ticket.toureiffel.paris/fr"],
    todo: ["Photo : fichier à déposer dans img/places/ ; licence vérifiée par Soufian sur la page Wikimedia Commons."]
  },

  "1|Musée du Louvre": {
    verified: "2026-10-16",
    summary: "Entrée principale sous la Pyramide. Ouvert tous les jours sauf le mardi, avec nocturne le mercredi et le vendredi. Le jardin des Tuileries voisin est gratuit.",
    address: "Rue de Rivoli, 75001 Paris (accès par le Carrousel du Louvre : 99 rue de Rivoli)",
    metro: "Palais-Royal – Musée du Louvre (lignes 1 et 7). Alternative : Pyramides (ligne 14).",
    hours: {
      lines: [
        "Lundi, jeudi, samedi, dimanche : 9 h – 18 h",
        "Mercredi et vendredi : 9 h – 21 h",
        "Fermé le mardi, le 1er janvier, le 1er mai et le 25 décembre",
        "Dernier accès 1 h avant la fermeture ; évacuation des salles 30 minutes avant"
      ],
      note: "Réservation obligatoire du 17 octobre au 1er novembre 2026 (exceptions pour certains détenteurs de cartes)."
    },
    price: {
      lines: ["Résidents de l'Espace économique européen : 22 €", "Hors Espace économique européen : 32 €"],
      free: [
        "Moins de 18 ans",
        "Moins de 26 ans résidant dans l'Espace économique européen",
        "Tous les visiteurs le 1er vendredi du mois après 18 h (sauf juillet et août) et le 14 juillet",
        "Visiteurs en situation de handicap et accompagnateur",
        "Demandeurs d'emploi et résidents de l'Espace économique européen bénéficiaires de minima sociaux, sur justificatif"
      ],
      note: "Pièce d'identité ou justificatif demandé pour les gratuités."
    },
    site: "https://www.louvre.fr/",
    tickets: "https://ticket.louvre.fr/en",
    access: {
      level: "Aménagée",
      note: "Ascenseur central sous la Pyramide ou escalator. Prêt gratuit de fauteuils roulants, cannes et sièges pliants à l'espace Assistance (contre une pièce d'identité). Accès prioritaire pour le visiteur en situation de handicap et son accompagnateur."
    },
    tip: "Pour profiter de la nocturne, viens le mercredi ou le vendredi : le musée ferme à 21 h. Réserve un créneau en ligne et présente-toi à la Pyramide à l'heure choisie.",
    photo: { src: "img/places/musee-du-louvre.jpg", alt: "Musée du Louvre vu depuis le jardin des Tuileries", credit: "DiscoA340", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Louvre_Museum_from_the_Tuileries_Garden.jpg" },
    sources: ["https://www.louvre.fr/en/visit/hours-admission", "https://www.louvre.fr/en/visit", "https://www.louvre.fr/en/visit/accessibility", "https://contact.louvre.fr/hc/fr/articles/12846022972829-Comment-venir-au-mus%C3%A9e"],
    todo: ["Le site officiel ne donne pas d'adresse postale unique : Passage Richelieu « rue de Rivoli, 75001 », Carrousel « 99 rue de Rivoli, 75001 », Porte des Lions « quai François Mitterrand, 75001 ».", "Photo : fichier à déposer dans img/places/ ; licence vérifiée par Soufian sur la page Wikimedia Commons."]
  },

  "4|Cathédrale Notre-Dame": {
    verified: "2026-10-16",
    summary: "Entrée libre et gratuite. Un créneau gratuit peut être réservé en ligne pour réduire l'attente. La montée aux tours est payante, sur réservation obligatoire.",
    address: "6 Parvis Notre-Dame – Place Jean-Paul II, 75004 Paris",
    metro: [
      "Le site officiel ne désigne aucune station comme la plus pratique. Stations citées :",
      "Ligne 4 : Cité ou Saint-Michel",
      "Lignes 1 et 11 : Hôtel de Ville",
      "Ligne 10 : Maubert – Mutualité ou Cluny – La Sorbonne",
      "Lignes 7, 11 et 14 : Châtelet",
      "RER B et C : Saint-Michel – Notre-Dame"
    ],
    hours: {
      lines: [
        "Cathédrale, lundi, mardi, mercredi et vendredi : 7 h 50 – 19 h",
        "Cathédrale, jeudi : 7 h 50 – 22 h",
        "Cathédrale, samedi et dimanche : 8 h 15 – 19 h 30",
        "Cathédrale, dernière entrée 30 minutes avant la fermeture",
        "Tours, du 1er avril au 30 septembre : 9 h – 23 h ; du 1er octobre au 31 mars : 9 h – 17 h 30, dernière entrée 1 h avant la fermeture"
      ],
      note: "Les horaires peuvent varier lors d'événements ou de célébrations."
    },
    price: {
      lines: ["Tours : 16 € (tarif individuel)"],
      free: ["Cathédrale : entrée libre et gratuite", "Tours : billets gratuits pour certains publics, dans la limite d'un quota par créneau"],
      note: "Le billet des tours s'achète uniquement en ligne, aucune vente sur place. Le créneau est obligatoire, y compris pour les gratuités."
    },
    site: "https://www.notredamedeparis.fr/",
    tickets: "https://resa.notredamedeparis.fr/fr/tickets",
    ticketsLabel: "Créneau gratuit",
    access: {
      level: "Aménagée",
      note: "Entrée principale accessible par le portail central. Accès prioritaire pour la personne en situation de handicap et un accompagnateur, sur justificatif, sans réservation. Rampes d'accès et plateforme élévatrice. Livrets en braille, audioguides et maquettes tactiles ; comptoirs équipés de boucles magnétiques. Plusieurs chapelles sont accessibles par des rampes permanentes ou amovibles. Il n'y a pas de toilettes publiques dans la cathédrale."
    },
    tip: "Réserve gratuitement un créneau pour réduire l'attente à l'entrée. Pour les tours, prévois 424 marches en montée et achète ton billet en ligne avant de venir : aucune vente sur place.",
    photo: { src: "img/places/cathedrale-notre-dame.jpg", alt: "Façade sud de la cathédrale Notre-Dame de Paris", credit: "Yair Haklai", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:South_facade_of_Notre-Dame_de_Paris.jpg" },
    sources: ["https://www.notredamedeparis.fr/visiter/informations-pratiques/acces-et-transports/", "https://www.notredamedeparis.fr/faq/lacces-a-notre-dame-sera-t-il-payant/", "https://www.notredamedeparis.fr/visiter/accessibilite/", "https://resa.notredamedeparis.fr/fr/tickets", "https://www.tours-notre-dame-de-paris.fr/visiter/informations-pratiques"],
    todo: [
      "Adresse, horaires, transports et accessibilité fournis et validés par Soufian le 2026-10-16 d'après les pages officielles citées en sources. Aucune date de publication affichée sur ces pages.",
      "Horaires des tours : à confirmer à chaque changement de saison."
    ]
  },

  "18|Basilique du Sacré-Cœur": {
    verified: "2026-10-16",
    summary: "Basilique ouverte tous les jours, entrée gratuite. Montée au dôme payante, par un escalier étroit d'environ 280 marches, sans ascenseur.",
    address: "35 rue du Chevalier de La Barre, 75018 Paris",
    hours: {
      lines: [
        "Basilique : tous les jours, 6 h 30 – 22 h 30",
        "Dôme : 10 h 15 – 17 h 30, dernier accès à 17 h, selon la saison. Fermé à midi pendant une pause du personnel."
      ],
      note: "Fermeture plus tardive lors des grandes fêtes et de certaines veillées de prière. La montée au dôme peut être fermée pour entretien ou mauvais temps."
    },
    price: {
      lines: ["Dôme : 8 € adulte (16 ans et plus) · 5 € enfant (jusqu'à 15 ans)"],
      free: ["Entrée de la basilique : gratuite pour tous"]
    },
    site: "https://www.sacre-coeur-montmartre.com/",
    access: {
      level: "Partielle",
      note: "Un accès avec ascenseur pour les personnes handicapées ou à mobilité réduite se trouve à l'arrière de la basilique, 35 rue du Chevalier de La Barre. Le dôme n'a pas d'ascenseur et n'est pas conseillé aux personnes à mobilité réduite."
    },
    tip: "Le dôme se règle à la caisse sur place, après le contrôle de sécurité : pas de réservation en ligne, et pas de toilettes en haut. Vérifie le site officiel la veille, car la montée peut fermer pour entretien ou météo.",
    photo: { src: "img/places/basilique-du-sacre-coeur.jpg", alt: "Basilique du Sacré-Cœur de Montmartre", credit: "HJ Mitchell", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", source: "https://commons.wikimedia.org/wiki/File:Sacre-Coeur,_Paris_01.jpg" },
    sources: ["https://www.sacre-coeur-montmartre.com/infos-et-visites/informations-pratiques/horaires-et-acces/", "https://www.sacre-coeur-montmartre.com/en/info-and-visits/the-dome-tour/"],
    todo: [
      "Station de métro la plus pratique : non indiquée sur les pages officielles lues, donc non affichée.",
      "Heure de fin de l'accès ascenseur : 19 h sur la page française, 18 h 30 sur la page anglaise (contradiction) : seule l'heure d'ouverture, 8 h 30, est certaine et n'est pas affichée non plus.",
      "Horaires du dôme : la page parle de 10 h 15 – 17 h 30 « selon la saison » sans détail saisonnier.",
      "Photo : fichier à déposer dans img/places/ ; licence vérifiée par Soufian sur la page Wikimedia Commons."
    ]
  },

  "8|Arc de Triomphe": {
    verified: "2026-10-16",
    summary: "Monument de la place Charles-de-Gaulle, avec une terrasse en haut. L'ascenseur est en maintenance : la montée se fait par l'escalier, 284 marches.",
    address: "Place Charles de Gaulle, 75008 Paris",
    metro: "Charles de Gaulle – Étoile (lignes 1, 2 et 6, RER A).",
    hours: {
      lines: [
        "1er avril – 30 septembre : mercredi à lundi 10 h – 23 h, mardi 11 h – 23 h",
        "1er octobre – 31 mars : mercredi à lundi 10 h – 22 h 30, mardi 11 h – 22 h 30",
        "Dernier accès 45 minutes avant la fermeture"
      ],
      note: "Fermeture à 16 h les 24 et 31 décembre 2026. Fermé les 1er mai, 8 mai, 14 juillet et le matin du 11 novembre. Fermeture possible pour cérémonie ou météo."
    },
    price: {
      lines: ["1er octobre – 31 mars : 16 €", "1er avril – 30 septembre : 22 €, 16 € le mercredi"],
      free: [
        "Moins de 18 ans",
        "18-25 ans (ressortissants de l'Union européenne et résidents non européens en France)",
        "Visiteur en situation de handicap et un accompagnateur (visite individuelle)",
        "Demandeurs d'emploi, sur justificatif récent",
        "Premier dimanche de janvier, février, mars, novembre et décembre"
      ]
    },
    site: "https://www.paris-arc-de-triomphe.fr/en",
    tickets: "https://tickets.monuments-nationaux.fr/fr-FR/familles?site=2032863779450400197",
    access: {
      level: "Limitée",
      note: "L'ascenseur est en maintenance « jusqu'à nouvel ordre » : la terrasse n'est atteignable que par l'escalier (284 marches). Entrée gratuite pour le visiteur en situation de handicap et un accompagnateur."
    },
    tip: "Avant de venir, vérifie sur le site officiel si l'ascenseur est de nouveau en service : en attendant, prévois 284 marches. Dernier accès 45 minutes avant la fermeture.",
    photo: { src: "img/places/arc-de-triomphe.jpg", alt: "Arc de Triomphe, Paris", credit: "Dharshini Vinayagam", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Arc_de_Triomphe_paris_france.jpg" },
    sources: ["https://www.paris-arc-de-triomphe.fr/en/visit/practical-information"],
    todo: [
      "La page officielle indique à la fois « ascenseur en maintenance jusqu'à nouvel ordre » et « ascenseur disponible sans réservation » : contradiction, seule la maintenance est affichée.",
      "Photo : fichier à déposer dans img/places/ ; licence vérifiée par Soufian sur la page Wikimedia Commons."
    ]
  },

  "7|Musée d'Orsay": {
    verified: "2026-10-16",
    summary: "Billets à horaire fixe pour les collections permanentes et les expositions temporaires. Nocturne le jeudi jusqu'à 21 h 45 et gratuité le 1er dimanche du mois, sur réservation.",
    address: "Esplanade Valéry Giscard d'Estaing, 75007 Paris",
    metro: "Solférino (ligne 12). Alternative : RER C Musée d'Orsay.",
    hours: {
      lines: [
        "Mardi au dimanche : 9 h 30 – 18 h (dernier accès à 17 h)",
        "Jeudi : ouvert jusqu'à 21 h 45 (dernier accès à 21 h)",
        "Fermé le lundi, le 1er mai et le 25 décembre"
      ]
    },
    price: {
      lines: [
        "Plein tarif : 16 € en ligne · 14 € sur place",
        "Tarif réduit : 11 € sur place uniquement",
        "Nocturne du jeudi (visite à partir de 18 h) : 12 € en ligne · 10 € sur place"
      ],
      free: [
        "Moins de 18 ans",
        "Jeunes de 18 à 25 ans, ressortissants de l'Espace économique européen ou résidents de longue durée (sur justificatif)",
        "Demandeurs d'emploi et personnes en situation de handicap avec accompagnateur, sur justificatif",
        "Le 1er dimanche du mois : gratuit pour tous, réservation en ligne obligatoire (sauf Carte blanche et Paris Museum Pass)"
      ]
    },
    site: "https://www.musee-orsay.fr/fr",
    tickets: "https://billetterie.musee-orsay.fr/index-css5-museeorsay-lgen-pg1.html",
    access: {
      level: "Partielle",
      note: "Le site officiel indique une accessibilité « partiellement conforme ». Ascenseurs, prêt de matériel et places de stationnement réservées. Visiteur en situation de handicap et accompagnateur : entrée 2 (parvis). Des travaux importants sont en cours : vérifier les conditions d'accès avant de venir."
    },
    tip: "Le jeudi soir est la nocturne : billet à 12 € en ligne à partir de 18 h, et le musée reste ouvert jusqu'à 21 h 45. Le 1er dimanche du mois, la réservation en ligne est obligatoire.",
    photo: { src: "img/places/musee-d-orsay.jpg", alt: "Façade du musée d'Orsay", credit: "DiscoA340", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Front_view_of_the_Mus%C3%A9e_d%27Orsay.jpg" },
    sources: ["https://www.musee-orsay.fr/en/visit/admission-opening-times-tickets", "https://www.musee-orsay.fr/en/articles/getting-museum-296243", "https://www.musee-orsay.fr/en/visit"],
    todo: ["Liste complète des gratuités : la page n'en détaille qu'une partie, seules celles citées sont affichées.", "Photo : fichier à déposer dans img/places/ ; licence vérifiée par Soufian sur la page Wikimedia Commons."]
  }
};
