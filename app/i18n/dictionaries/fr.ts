import type { Dictionary } from "../types";

const fr: Dictionary = {
  meta: {
    siteDescription:
      "Contractualisation, facturation et paiement pour les consultants indépendants, et développement logiciel assisté par IA pour les PME. Hong Kong, depuis 2003.",
    homeTitle: "Facturez comme une société. Travaillez comme un indépendant.",
    consultantsTitle: "Pour les consultants indépendants",
    consultantsDescription:
      "Akemis contracte avec votre client, facture en son nom, encaisse, puis vous paie dans votre devise. Vérifiez votre éligibilité en cinq questions.",
    buildTitle: "Applications sur mesure et agents IA pour les PME",
    buildDescription:
      "Une équipe expérimentée qui livre un logiciel fonctionnel en quelques semaines : applications sur mesure, outils internes, agents sur vos propres données et intégration avec vos systèmes existants.",
    aboutTitle: "À propos",
    aboutDescription:
      "Akemis Limited est une société de Hong Kong fondée en 2003. Vingt ans de systèmes d'entreprise devenus un service de contractualisation pour indépendants et un studio logiciel.",
    contactTitle: "Contact",
    contactDescription:
      "Parlez à Akemis de la contractualisation et de la facturation en tant que consultant indépendant, du recours à des consultants, ou du développement d'un logiciel pour votre entreprise.",
    privacyTitle: "Politique de confidentialité du site",
    privacyDescription: "Comment akemis.com traite les données personnelles envoyées par ses formulaires.",
  },
  nav: {
    consultants: "Pour les consultants",
    build: "Build",
    about: "À propos",
    contact: "Contact",
    cta: "Vérifier mon éligibilité",
    language: "Langue",
    skip: "Aller au contenu",
  },
  home: {
    eyebrow: "Akemis · Hong Kong · depuis 2003",
    title: "Facturez comme une société. Travaillez comme un indépendant.",
    lede: "Nous contractons, facturons et encaissons pour les consultants indépendants, puis nous les payons dans leur propre devise. Et pour les PME qui ont besoin d'un logiciel, nous le construisons en quelques semaines.",
    ctaConsultant: "Je suis consultant",
    ctaBusiness: "Je dirige une entreprise",
    doors: [
      {
        eyebrow: "Pour les consultants indépendants",
        title: "Vos clients, ou les nôtres. Un contrat, une facture, un virement.",
        body: "Nous signons avec votre client, facturons en notre nom, relançons le paiement et vous payons dès réception, avec un relevé à remettre à votre comptable.",
        cta: "Comment ça marche",
        secondary: "Vérifier mon éligibilité",
        href: "/consultants",
        secondaryHref: "/consultants#eligibility",
        image: "/images/majorel-consulting-team-scaled-1.jpeg",
        alt: "Des consultants travaillent ensemble autour d'une table",
      },
      {
        eyebrow: "Pour les entreprises",
        title: "Logiciels sur mesure et agents IA, livrés en quelques semaines.",
        body: "Une équipe expérimentée qui construit l'outil dont vous avez réellement besoin : un système interne, un portail client, un agent sur vos propres données, une intégration avec vos systèmes actuels.",
        cta: "Voir ce que nous construisons",
        secondary: "Prendre rendez-vous",
        href: "/build",
        secondaryHref: "/contact",
        image: "/images/OUR-FIRMS_CONSULTING2_1000x667.jpg",
        alt: "Deux personnes examinent des chiffres et un ordinateur portable sur un bureau",
      },
    ],
    proof: [
      { k: "Fondée en", v: "2003", note: "Une société de Hong Kong depuis plus de vingt ans." },
      { k: "Devises facturées et payées", v: "8", note: "" },
      { k: "Consultants payés sur", v: "3 continents", note: "Afrique, Asie et Amériques, dans leur propre devise." },
    ],
    whatLabel: "Ce que nous faisons",
    whatTitle: "Trois choses, bien faites.",
    items: [
      {
        title: "Contractualisation gérée pour les consultants",
        body: "Akemis est la partie contractante entre vous et votre client. Nous prenons en charge l'administratif, la conformité, l'encaissement et le paiement ; vous gardez le travail. Ouvert aux nouveaux consultants dans la première vague de pays.",
        href: "/consultants",
      },
      {
        title: "Ledger, l'offre logicielle seule",
        body: "Pour les consultants qui veulent le même portail, les mêmes feuilles de temps et la même facturation, mais qui facturent en leur propre nom et sur leur compte. En développement, bêta privée d'ici la fin de l'année.",
        href: "/consultants#ledger",
      },
      {
        title: "Akemis Build",
        body: "Des sprints à périmètre fixe pour construire des logiciels sur mesure, des outils internes, des agents et des intégrations pour les PME. Notre propre plateforme de facturation est la première référence.",
        href: "/build",
      },
    ],
    more: "En savoir plus",
    ctaTitle: "Cinq questions pour savoir si vous êtes dans la première vague.",
    ctaBody: "Pays, statut, client, service, volume. Réponse immédiate, sans créer de compte.",
  },
  consultants: {
    eyebrow: "Un service Akemis · Hong Kong · depuis 2003",
    title: "Travaillez partout. Soyez payé correctement.",
    lede: "Akemis contracte, facture et encaisse pour les consultants indépendants, puis vous paie dans votre devise. Vos clients ou les nôtres.",
    ctaPrimary: "Vérifier mon éligibilité",
    ctaSecondary: "Voir comment ça marche",
    heroAlt: "Des consultants indépendants travaillant ensemble",
    ways: [
      {
        eyebrow: "Vous apportez votre client",
        title: "Vous avez trouvé la mission. Nous gérons l'administratif.",
        body: "Vous ajoutez le client, nous effectuons les vérifications et signons avec lui. Commission réduite. Vous gardez la relation.",
      },
      {
        eyebrow: "Vous prenez une mission Akemis",
        title: "Nous avons trouvé la mission. Même portail, même paiement.",
        body: "Des missions issues de notre réseau, principalement applications d'entreprise, données et logiciel. Commission plus élevée, car elle inclut le placement.",
      },
    ],
    howLabel: "Comment ça marche",
    howTitle: "Quatre étapes, dans cet ordre.",
    steps: [
      {
        t: "Vérifier l'éligibilité et passer les contrôles",
        b: "Cinq questions sur cette page, puis vos documents d'identité, de domicile et d'immatriculation dans le portail.",
      },
      {
        t: "Nous signons les deux contrats",
        b: "Un contrat-cadre avec votre client et un contrat de prestation avec vous. Vous lisez les deux avant toute signature.",
      },
      {
        t: "Vous travaillez, et soumettez depuis le portail",
        b: "Vous saisissez la période, joignez vos feuilles de temps ou livrables et soumettez la facture. Nous la vérifions et l'envoyons à votre client.",
      },
      {
        t: "Nous encaissons et vous payons dès réception",
        b: "Les relances partent après l'échéance, puis une personne prend le relais. Quand le client paie, vous êtes payé dans votre devise avec un avis de virement.",
      },
    ],
    includedLabel: "Ce qui est inclus",
    includedTitle: "Tout ce qui va de la poignée de main à la banque.",
    included: [
      ["Contractualisation", "Contrat client et contrat de prestation issus de modèles éprouvés, pour chaque mission."],
      ["Facturation", "Factures au nom d'Akemis, en huit devises, votre commission affichée en ligne distincte ou intégrée."],
      ["Relance des impayés", "Relances automatiques, puis une personne identifiée qui appelle le client."],
      ["Paiement avec avis de virement", "Dès réception, sur un compte à votre nom, avec un justificatif pour votre comptabilité."],
      ["Coffre-fort documentaire", "Contrats, pièces d'identité, attestations et factures au même endroit, exportables."],
      ["Relevés", "Par client et par devise, prêts pour votre comptable."],
      ["Un interlocuteur humain", "Une personne vous répond sous un jour ouvré."],
    ],
    comingLabel: "Prochainement",
    coming: [
      "Feuilles de temps avec validation du client",
      "Notes de frais avec capture des justificatifs",
      "Exports pour votre comptable",
    ],
    countriesLabel: "Pays et devises",
    countriesTitle: "La première vague.",
    clientCountriesTitle: "Où votre client peut être établi",
    consultantCountriesTitle: "Où vous pouvez résider",
    consultantCountriesBody: "Tous les pays clients, ainsi que",
    currenciesTitle: "Devises",
    countriesNote:
      "Ailleurs ? Faites quand même le test ci-dessous et rejoignez la liste d'attente. Nous ajoutons des pays par vagues, une fois les règles locales confirmées.",
    pricingLabel: "Tarifs",
    pricingTitle: "Un pourcentage de ce que vous facturez, avec un minimum mensuel.",
    prices: [
      {
        name: "Gérée, votre client",
        line: "Pourcentage du montant facturé, avec un minimum mensuel. Taux réduit.",
        note: "Détaillé dans la grille tarifaire envoyée avec le dossier d'inscription.",
      },
      {
        name: "Gérée, mission Akemis",
        line: "Pourcentage du montant facturé, taux plus élevé, placement inclus.",
        note: "Convenu pour chaque mission avant que vous ne l'acceptiez.",
      },
      {
        name: "Ledger, logiciel seul",
        line: "Abonnement mensuel fixe. Vous facturez en votre nom, sur votre compte.",
        note: "En développement, bêta privée d'ici la fin de l'année. Inscrivez-vous ci-dessous.",
      },
    ],
    pricingNote: "Pas de marge sur le change, pas de frais d'ouverture, et rien à payer les mois où vous ne facturez pas.",
    eligibilityLabel: "Éligibilité",
    eligibilityTitle: "Cinq questions. Réponse immédiate.",
    eligibilityBody:
      "Rien n'est enregistré tant que vous n'avez pas laissé votre adresse e-mail à la fin. Clients professionnels uniquement, et vous restez responsable de vos propres impôts.",
    trust: [
      { t: "Depuis 2003", b: "Une société de Hong Kong avec vingt ans de missions clients derrière elle." },
      {
        t: "Connaissance client",
        b: "Vérification d'identité pour chaque consultant et chaque client. Cela vous protège aussi.",
      },
      { t: "Des contrats lisibles", b: "Des contrats clairs, envoyés avant signature, les mêmes pour tous." },
      { t: "Un interlocuteur", b: "Le support répond sous un jour ouvré, et connaît votre dossier." },
    ],
    companiesLabel: "Pour les entreprises",
    companiesTitle: "Faites appel à un consultant indépendant sans ouvrir un compte fournisseur pour chacun.",
    companiesBody:
      "Un seul fournisseur, Akemis, pour tous les consultants avec qui vous travaillez via nous. Un contrat, un format de facture, un paiement. Si votre besoin est un logiciel plutôt que des personnes, voyez",
    companiesLink: "Akemis Build",
    companiesCta: "Parlons-en",
    faqLabel: "Questions",
    faqTitle: "Celles qu'on nous pose.",
    faq: [
      [
        "Avec qui suis-je sous contrat ?",
        "Avec Akemis Limited, Hong Kong. Akemis a un contrat de prestation distinct avec votre client. Vous voyez les deux avant de signer.",
      ],
      [
        "Qui facture mon client ?",
        "Akemis, en son nom propre, à partir de la facture que vous préparez et soumettez dans le portail.",
      ],
      [
        "Quand suis-je payé ?",
        "À réception du paiement du client, une fois les fonds rapprochés de votre facture, normalement sous quelques jours ouvrés. Les délais de paiement clients sont de 30 jours en standard, 45 au maximum.",
      ],
      [
        "Dans quelle devise ?",
        "L'une des huit dans lesquelles nous opérons aujourd'hui : EUR, USD, GBP, AED, MAD, TND, XAF et XOF. Le paiement se fait sur un compte à votre nom.",
      ],
      [
        "Qui paie les frais bancaires ?",
        "Les frais bancaires et de transfert sont détaillés sur votre avis de virement, et la grille tarifaire envoyée avec le dossier d'inscription précise qui supporte quoi. La conversion se fait au taux que nous donne notre prestataire de paiement ; nous n'ajoutons pas de marge.",
      ],
      [
        "Et si le client paie en retard ?",
        "Nous relançons. D'abord automatiquement, puis par un suivi personnel. Nous n'avançons pas les fonds avant que le client ait payé.",
      ],
      [
        "Gérez-vous mes impôts ?",
        "Non. Vous restez responsable de vos impôts et cotisations sociales dans votre pays, et vous le confirmez à l'inscription.",
      ],
      [
        "Puis-je garder mes propres clients ?",
        "Oui. Apporter votre client est le cas normal et donne droit à la commission réduite. Les missions qu'Akemis vous apporte sont facturées à un taux plus élevé.",
      ],
      [
        "Puis-je partir ?",
        "Oui, avec le préavis prévu au contrat de prestation. Les missions en cours vont à leur terme selon les conditions en vigueur.",
      ],
      [
        "Que faites-vous de mes pièces d'identité ?",
        "Elles sont conservées de manière sécurisée, utilisées uniquement pour satisfaire nos obligations de connaissance client et les demandes de notre prestataire de paiement, puis supprimées à l'issue de la durée de conservation indiquée dans notre politique de confidentialité.",
      ],
    ],
  },
  build: {
    eyebrow: "Akemis Build",
    title: "Le logiciel dont votre entreprise a besoin, livré en quelques semaines.",
    lede: "Une équipe expérimentée qui utilise le développement assisté par IA, forte de vingt ans de systèmes d'entreprise à Hong Kong. Périmètre fixe, prix fixe, un produit fonctionnel à la fin.",
    ctaPrimary: "Prendre rendez-vous",
    ctaSecondary: "Voir les offres",
    heroAlt: "Analyse de chiffres et travail sur ordinateur portable",
    offersLabel: "Offres",
    offersTitle: "Explorer, construire, exploiter.",
    colStage: "Étape",
    colOffer: "Offre",
    colShape: "Format",
    stages: { discovery: "Exploration", build: "Construction", run: "Exploitation" },
    offers: [
      {
        stage: "discovery",
        name: "Audit des opportunités IA",
        shape:
          "Une semaine. Nous cartographions vos processus, vos données et vos systèmes, puis remettons une liste hiérarchisée d'automatisations avec l'effort et le retour attendus.",
      },
      {
        stage: "discovery",
        name: "Sprint de prototypage",
        shape:
          "Deux semaines. Un produit cliquable sur vos données réelles pour un cas d'usage, afin de décider sur quelque chose de concret.",
      },
      {
        stage: "build",
        name: "Application sur mesure ou outil interne",
        shape:
          "Quatre à huit semaines, périmètre et prix fixes. Application web, base de données, authentification, administration et hébergement. Notre propre plateforme de facturation a été construite ainsi.",
      },
      {
        stage: "build",
        name: "Agents personnalisés",
        shape:
          "Support sur votre propre base de connaissances, qualification commerciale, tâches administratives comme la saisie de documents et le reporting, intégration des nouveaux collaborateurs.",
      },
      {
        stage: "build",
        name: "Intégrations",
        shape:
          "Avec les systèmes que vous utilisez déjà : ERP, CRM, comptabilité, e-commerce. Vos équipes interrogent vos données en langage naturel.",
      },
      {
        stage: "build",
        name: "Automatisation documentaire",
        shape:
          "Contrats, devis et dossiers de conformité générés à partir de vos modèles et de vos données, relus par une personne avant envoi.",
      },
      {
        stage: "run",
        name: "Forfait mensuel",
        shape: "Hébergement, supervision, mises à jour et un backlog d'évolutions que nous traitons avec vous chaque mois.",
      },
      {
        stage: "run",
        name: "Direction technique à temps partagé",
        shape: "Pour les dirigeants sans associé technique : architecture, choix des prestataires, recrutement, un point hebdomadaire.",
      },
    ],
    segmentsLabel: "Pour qui nous construisons",
    segmentsTitle: "Des PME avec un problème précis.",
    segments: [
      [
        "Cabinets de conseil et agences",
        "Des outils de temps, de facturation et de reporting client adaptés à votre façon de travailler.",
      ],
      [
        "Négoce et sourcing",
        "Suivi des commandes, documents fournisseurs, devis, calcul du coût de revient.",
      ],
      [
        "Professions libérales",
        "Prise en charge des demandes, rédaction et suivi des dossiers pour les cabinets juridiques, comptables et de recrutement.",
      ],
      [
        "E-commerce et créateurs",
        "Attribution, analytics et automatisation administrative autour de vos boutiques.",
      ],
    ],
    proofLabel: "Ce que nous avons construit",
    proofTitle: "Nos propres produits d'abord.",
    proof: [
      {
        t: "Akemis Ledger",
        b: "Facturation, rapprochement bancaire et paiements pour des dizaines de consultants en huit devises, avec un portail en libre-service, la génération de contrats et les processus de conformité. Construit et exploité par une équipe de deux personnes.",
      },
      {
        t: "Creator Analytics",
        b: "Une application d'analytics connectée à TikTok : authentification, métriques par vidéo, attribution des liens et données de commandes issues des plateformes partenaires.",
      },
      {
        t: "Vingt ans de systèmes d'entreprise",
        b: "Des projets d'implémentation et d'intégration SAP, Oracle et PeopleSoft depuis 2003. C'est pourquoi les intégrations que nous construisons respectent le fonctionnement réel d'un système d'entreprise.",
      },
    ],
    howLabel: "Notre méthode",
    howTitle: "Périmètre fixe. Démo hebdomadaire. Votre code, vos comptes.",
    how: [
      "Périmètre et prix convenus avant la première ligne de code. Les changements sont chiffrés, jamais absorbés en silence.",
      "Une démo fonctionnelle chaque semaine, sur vos données, dès la deuxième semaine.",
      "Tout vit dans vos dépôts, vos comptes cloud et votre domaine. Aucune dépendance à nous.",
      "Une personne relit chaque élément généré avant qu'il n'atteigne un client ou une comptabilité.",
    ],
    callLabel: "Premier échange",
    callTitle: "Trente minutes. Apportez le problème, pas un cahier des charges.",
    callBody:
      "Dites-nous ce qui prend trop de temps ou casse trop souvent. Nous vous dirons honnêtement si un audit d'une semaine, un prototype de deux semaines, ou rien du tout, est la bonne étape suivante.",
    callNote: "Consultant indépendant plutôt qu'entreprise ?",
    callNoteLink: "Cette page est pour vous",
    callSubmit: "Demander un rendez-vous",
  },
  about: {
    eyebrow: "À propos d'Akemis",
    title: "Une société hongkongaise de vingt ans qui a appris à livrer du logiciel.",
    lede: "Nous avons passé vingt ans à installer des systèmes d'entreprise et à payer les consultants qui faisaient le travail. La seconde partie s'est révélée être un métier à part entière.",
    heroAlt: "Le port et les gratte-ciel de Hong Kong",
    timelineLabel: "Notre parcours",
    timeline: [
      {
        year: "2003",
        t: "Fondation à Hong Kong",
        b: "Conseil en systèmes d'entreprise : implémentation et intégration SAP, Oracle et PeopleSoft pour des clients en Asie, en Europe et au Moyen-Orient.",
      },
      {
        year: "2010s",
        t: "Des consultants, pas des effectifs",
        b: "Des projets menés avec des spécialistes indépendants. Akemis devient la partie contractante entre eux et le client, et apprend l'administratif à la dure.",
      },
      {
        year: "2025",
        t: "Le ledger devient un produit",
        b: "Facturation, rapprochement bancaire et paiements quittent les tableurs pour notre propre plateforme, construite avec le développement assisté par IA par une équipe de deux personnes.",
      },
      {
        year: "2026",
        t: "Ouverture à de nouveaux consultants",
        b: "Le service de contractualisation s'ouvre au-delà de notre réseau, avec un portail en libre-service, et le studio qui l'a construit se met à construire pour d'autres PME.",
      },
    ],
    beliefs: [
      {
        t: "Ce que nous croyons",
        b: "Être indépendant ne devrait pas signifier un administratif amateur. Un consultant mérite la même contractualisation, la même facturation et le même recouvrement qu'une société, sans avoir à en devenir une.",
      },
      {
        t: "Ce que nous ne sommes pas",
        b: "Ni une banque, ni un gestionnaire de paie, ni un employeur de référence. Akemis est la partie contractante de deux contrats de prestation, et un éditeur de logiciel. L'argent circule parce qu'une prestation a été facturée, jamais pour lui-même.",
      },
      {
        t: "Qui la dirige",
        b: "Une petite équipe à Hong Kong et en Europe, dirigée par le fondateur, Philippe Barthelemy. Chaque consultant de la plateforme a un interlocuteur identifié qui connaît son dossier.",
      },
    ],
    linkConsultants: "Pour les consultants",
    linkConsultantsBody: "Contractualisation, facturation, encaissement et paiement.",
    linkBuild: "Pour les entreprises",
    linkBuildBody: "Logiciels sur mesure et agents, construits en quelques semaines.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Une personne vous répond.",
    lede: "Sous un jour ouvré, heure de Hong Kong ou de Paris. Dites-nous qui vous êtes et ce dont vous avez besoin ; le formulaire achemine votre message à la bonne personne.",
    emailLabel: "E-mail",
    companyLabel: "Société",
    companyValue: "Akemis Limited, Hong Kong",
    portalLabel: "Déjà consultant chez nous ?",
    portalBody: "Utilisez le portail et votre interlocuteur habituel, c'est plus rapide que ce formulaire.",
  },
  form: {
    name: "Nom complet",
    email: "E-mail professionnel",
    company: "Société",
    iAm: "Je suis",
    topics: {
      consultant: "consultant indépendant",
      business: "une entreprise qui cherche un consultant",
      build: "une entreprise qui a besoin d'un logiciel",
      other: "autre chose",
    },
    message: "Comment pouvons-nous aider ?",
    submit: "Envoyer le message",
    sending: "Envoi…",
    sentTitle: "Message envoyé.",
    sentBody: "Nous répondons sous un jour ouvré, depuis contact@akemis.com.",
    privacyNote: "Nous utilisons vos coordonnées uniquement pour vous répondre. Voir notre",
    privacyLink: "politique de confidentialité",
    errorGeneric: "Nous n'avons pas pu envoyer votre message. Écrivez-nous à contact@akemis.com.",
    errorNetwork: "Problème de connexion. Écrivez-nous à contact@akemis.com.",
  },
  eligibility: {
    qResidence: "Où résidez-vous ?",
    qStatus: "Comment travaillez-vous aujourd'hui ?",
    qClient: "Où est établi votre client ?",
    qCategory: "Quel est votre métier ?",
    qVolume: "Facturation mensuelle, approximativement",
    choose: "Choisir…",
    otherCountry: "Un autre pays",
    otherCategory: "Autre chose",
    statuses: {
      sole: "En entreprise individuelle ou indépendant",
      company: "Via ma propre société",
      none: "Pas encore installé",
      employee: "Je suis salarié et cherche un portage salarial",
    },
    volumes: {
      lt3k: "Moins de 3 000 USD",
      mid: "3 000 à 10 000 USD",
      high: "10 000 à 25 000 USD",
      top: "Plus de 25 000 USD",
    },
    passTitle: "Vous êtes dans la première vague.",
    passBody:
      "Laissez votre e-mail et nous vous enverrons le dossier d'inscription : les justificatifs nécessaires, le contrat de prestation à lire et la grille tarifaire.",
    failTitle: "Pas encore, mais bientôt.",
    failBodyPrefix: "Parce que",
    failBodySuffix: "Rejoignez la liste d'attente et nous vous préviendrons dès que votre situation sera couverte.",
    reasons: {
      residence: "votre pays de résidence n'est pas dans la première vague",
      client: "le pays de votre client n'est pas dans la première vague",
      employee: "le service s'adresse aux consultants indépendants, pas aux salariés cherchant un portage",
      volume: "les missions sous le minimum de lancement rejoignent la liste d'attente de l'offre logicielle seule",
    },
    emailPlaceholder: "vous@exemple.com",
    emailLabel: "Adresse e-mail",
    submitPass: "Recevoir le dossier d'inscription",
    submitFail: "Rejoindre la liste d'attente",
    thanks: "Merci. Vous aurez de nos nouvelles.",
    error: "L'envoi a échoué. Écrivez-nous à contact@akemis.com.",
  },
  categories: [
    "Applications d'entreprise et ERP",
    "CRM et plateformes clients",
    "Données, décisionnel et analytics",
    "Développement logiciel",
    "IA et automatisation",
    "Cloud et infrastructure",
    "Gestion de projet et de programme",
    "Finance et transformation",
    "SIRH et paie",
    "Formation et conduite du changement",
  ],
  footer: {
    blurb:
      "Contractualisation, facturation et paiement pour les consultants indépendants, et logiciels assistés par IA pour les PME. Hong Kong, depuis 2003.",
    consultants: "Consultants",
    businesses: "Entreprises",
    company: "Société",
    links: {
      how: "Comment ça marche",
      included: "Ce qui est inclus",
      countries: "Pays et devises",
      eligibility: "Vérifier mon éligibilité",
      build: "Akemis Build",
      offers: "Offres",
      proof: "Ce que nous avons construit",
      call: "Prendre rendez-vous",
      about: "À propos",
      contact: "Contact",
      privacy: "Confidentialité",
      creators: "Mentions légales Creator Analytics",
    },
    rights: "Tous droits réservés.",
    since: "Hong Kong · depuis 2003",
  },
  privacy: {
    updated: "Dernière mise à jour le 5 septembre 2026. S'applique à ce site uniquement.",
    sections: [
      {
        h: "Qui nous sommes",
        p: "Ce site est édité par Akemis Limited, société immatriculée à Hong Kong. Pour toute question sur vos données personnelles, écrivez à contact@akemis.com.",
      },
      {
        h: "Ce que ce site collecte",
        p: "Uniquement ce que vous saisissez dans un formulaire : nom, adresse e-mail, société, le sujet choisi, votre message et, pour le test d'éligibilité, les cinq réponses sélectionnées. Les questions d'éligibilité sont traitées dans votre navigateur ; rien ne nous est transmis tant que vous n'avez pas saisi votre e-mail et validé. Le site ne dépose aucun cookie publicitaire ou de suivi. Il conserve votre choix de langue dans un cookie afin de ne pas vous envoyer dans la mauvaise langue à votre prochaine visite.",
      },
      {
        h: "Ce que nous en faisons",
        p: "Les messages sont acheminés vers notre boîte par un prestataire d'envoi d'e-mails et servent à vous répondre. Si vous avez demandé le dossier d'inscription ou rejoint la liste d'attente, nous utilisons votre adresse pour vous l'envoyer ou vous prévenir. Nous ne vendons ni ne partageons vos coordonnées à des fins propres à des tiers.",
      },
      {
        h: "Combien de temps nous les conservons",
        p: "Les messages jusqu'à deux ans après notre dernier échange. Les inscriptions à la liste d'attente jusqu'à votre demande de retrait ou la clôture de la liste. Répondez à n'importe lequel de nos e-mails pour être retiré.",
      },
      {
        h: "Vos droits",
        p: "Vous pouvez demander quelles données nous détenons, en demander la rectification ou l'effacement, et vous opposer à de nouveaux contacts, au titre de l'ordonnance de Hong Kong sur les données personnelles et, lorsqu'il s'applique, du RGPD. Écrivez à l'adresse ci-dessus ; nous répondons sous un mois.",
      },
      {
        h: "Autres produits",
        p: "Le portail consultant et l'application Creator Analytics ont leurs propres conditions et politiques de confidentialité, fournies à l'inscription. Les documents Creator Analytics sont publiés ici :",
      },
    ],
    creatorsLink: "Politique de confidentialité Creator Analytics",
  },
};

export default fr;
