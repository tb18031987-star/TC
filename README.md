# Tronc Commun — Informatique

Portail statique (HTML/CSS/JS, sans dépendances ni build) qui donne accès à l'ensemble des cours, leçons interactives et animations du programme d'informatique de Tronc Commun, organisé en **4 modules** et une progression **semaine par semaine**.

## Structure

Le portail (`index.html`, à la racine) affiche une barre latérale à deux niveaux (Module → Séquence/Leçon) qui ouvre chaque contenu dans un cadre à droite, sans rien fusionner : chaque cours, animation ou atelier reste un fichier HTML indépendant, testable seul.

```
index.html                          ← portail général (page d'accueil)
module1-generalites/
  sequence1-definitions-vocabulaire/   (S1 — complet)
  sequence2-unite-centrale-memoire/    (S2-S3 — complet)
  sequence3-peripheriques/             (S3 — complet)
  sequence4-logiciels-domaines/        (S4-S5 — complet)
module2-logiciels/
  lecon1-systeme-exploitation/         (S6-S8 — complet)
  lecon2-traitement-texte/             (S9-S14 — complet)
  lecon3-tableur/                      (S14-S17 — complet)
module3-algo-programmation/
  algorithmique-scratch/               (S18-S23 — complet)
  programmation-python/                (S23-S26 — complet)
module4-reseaux-internet/
  notion-reseau/                       (S27-S28 — complet)
  reseau-internet/                     (S29-S33 — complet)
archive-ancien-site/                ← ancien site générique à 7 modules (conservé, non lié depuis le portail)
```

Les 4 modules sont désormais intégralement rédigés : plus aucune entrée 🔒 « Contenu en préparation » dans le portail. Le mécanisme reste disponible dans le code (`{ soon: true, ... }` dans `index.html`) pour toute extension future.

## Contenu disponible

### Module 1 — Généralités sur les systèmes informatiques

**Séquence 1 — Définitions et vocabulaire de base** (`module1-generalites/sequence1-definitions-vocabulaire/`)

- Leçons interactives "jeu" autonomes (robot guide animé, chrono, phases Activité → Je déduis → Trace écrite → Exemple → Exercice, badges, bilan imprimable) : **`TC_M1_L1_definitions.html`** (donnée vs information, notions clés, unités de mesure) et **`TC_M1_L3_bit_octet.html`** (bit, octet, binaire, ASCII).
- **`Lecon1_Definitions_vocabulaire.html`** — version alternative de la Leçon 1 : la trace écrite s'écrit à la main, lettre par lettre, sur une page de cahier Seyès animée (date du jour, schémas qui se dessinent, numéros de notion en marge). Des post-it jaunes ouvrent en fenêtre les animations liées à chaque définition, et des post-it verts ouvrent `TC_M1_L1_definitions.html` en fenêtre avec un lien direct vers la bonne notion (`#notion1/2/3`). Navigation clavier (← → Espace, Fin, Début, Échap) en plus des boutons.

**Vue d'ensemble du module** (`module1-generalites/vue-ensemble/`)

- **`Module1_Vue_Ensemble.html`** — une page de cahier unique qui résume les **4 leçons du module** (Définitions, Structure de l'ordinateur, Types de logiciels, Domaines d'application), sur le modèle d'une fiche de synthèse une-page. Chaque leçon est une tuile cliquable qui **zoome** en plein détail (schémas repris du programme : unité centrale/mémoire/bus, logiciel de base vs application, grille des 10 domaines d'application) ; un bouton « 🔍− Vue d'ensemble » revient à la grille. Chaque détail a son bouton « 🎬 Ouvrir la trace écrite animée complète » qui ouvre la leçon correspondante en fenêtre.
- **`Lecon2_Structure_Ordinateur.html`**, **`Lecon3_Types_Logiciels.html`**, **`Lecon4_Domaines_Application.html`** — même principe que `Lecon1_Definitions_vocabulaire.html` : trace écrite animée sur une page de cahier, avec schémas qui se dessinent (unité centrale ⇄ mémoire + bus, périphériques entrée/sortie/stockage, logiciel de base ≠ application, grille des 10 domaines d'application qui apparaît notion par notion). Les post-it jaunes ouvrent les animations déjà existantes (Séquences 2, 3 et 4 : au cœur de l'unité centrale, dedans/dehors, les périphériques, trie les périphériques, logiciel de base ou d'application), avec plusieurs onglets quand une notion a plusieurs animations liées ; les post-it verts ouvrent les cours correspondants (`cours_unite_centrale_memoire.html`, `cours_peripheriques.html`, `cours_logiciels_domaines.html`).

Avec ces 3 ajouts, les **4 leçons du module** ont désormais leur version « cahier » animée complète.
- 2 cours interactifs complets (même moteur que les cours des Séquences 2 à 4 : chrono 50 min, 5 chapitres, badges, cahier de traces écrites, bilan imprimable avec carte mentale) : **`cours_definitions_vocabulaire.html`** (information, traitement, informatique, ordinateur et système informatique) et **`cours_langage_machine_binaire.html`** (langage machine, bit, codage ASCII, conversions décimal ↔ binaire).
- 14 animations, toutes disponibles dans `animations/` : `image.html` (codage/décodage lettre T), `couleur-5x5.html` (image couleur 5×5, 4 couleurs sur 2 bits), `clavier-ecran.html` (lettre A), `mot-salut.html` (le mot SALUT, lettre par lettre), `son.html` (échantillonnage et décodage d'un son), `scanner-imprimante.html` (scanner → unité centrale → imprimante), `souris-ecran.html` (codage de la position x/y de la souris), `calcul.html` (12 + 7), `circuit-bit.html` (circuit → transistor → bit), `couleur-8x8.html` (image couleur 8×8 sur tablette, 8 couleurs sur 3 bits), `zoom-microscope.html` (zoom carte mémoire → puce → circuits → transistor), `combien-1to.html` (unités dans 1 To), `ram-stockage.html` (RAM vs stockage : capacité, vitesse, volatilité), `compteur-bit-to.html` (le compteur qui s'emballe, de 1 bit à 1 To).

**Séquence 2 — Unité centrale et mémoire** (`module1-generalites/sequence2-unite-centrale-memoire/`)

- **`cours_unite_centrale_memoire.html`** — cours interactif complet (chrono 50 min, 5 chapitres : unité centrale, mémoire RAM/ROM, unités de mesure, synthèse, défis de groupe ; badges, cahier de traces écrites, bilan imprimable avec carte mentale).
- **`au_coeur_unite_centrale.html`** — exploration interactive du boîtier ouvert : 8 composants cliquables (carte mère, processeur, RAM, carte d'extension, alimentation, lecteur-graveur, disque dur, lecteur de cartes), chacun avec son animation, ses réglages et ses explications.
- **`animations_dedans_dehors.html`** — jeu de tri : dans l'unité centrale ou périphérique dehors ?

**Séquence 3 — Les périphériques** (`module1-generalites/sequence3-peripheriques/`)

- **`cours_peripheriques.html`** — cours interactif complet (chrono 50 min, 5 chapitres : qu'est-ce qu'un périphérique, entrée, sortie, synthèse entrée/sortie/mixte, défis de groupe ; badges, cahier de traces écrites, bilan imprimable avec carte mentale).
- **`peripheriques.html`** — scène interactive à onglets : accueil, terminologie (voyage animé d'une information), 10 périphériques à trouver et détailler, ordinateur portable et smartphone en coupe avec pastilles cliquables, 2 exercices notés.
- **`animations_tri_peripheriques.html`** — jeu de tri en 3 catégories : entrée, sortie, mixte.

**Séquence 4 — Logiciels et domaines d'application** (`module1-generalites/sequence4-logiciels-domaines/`)

- **`cours_logiciels_domaines.html`** — cours interactif complet (chrono 50 min, 5 chapitres : logiciels de base, logiciels d'application, les deux familles, domaines d'application de l'informatique, défis de groupe ; badges, cahier de traces écrites, bilan imprimable avec carte mentale).
- **`animations_tri_logiciels.html`** — jeu de tri : logiciel de base ou logiciel d'application ?

Le **Module 1** est ainsi complet (4 séquences, semaines 1 à 5), avec la Séquence 1 au complet : 2 leçons interactives + 2 cours + 14 animations.

### Module 2 — Les logiciels

Même principe que le Module 1 : une **vue d'ensemble** (`module2-logiciels/vue-ensemble/Module2_Vue_Ensemble.html`) résume les **4 leçons** du module sur une page de cahier, chacune zoomable en détail, et chaque leçon a sa **version cahier animée** (`Lecon1_Systeme_Exploitation.html`, `Lecon2_Traitement_Texte.html`, `Lecon3_Tableur.html`, `Lecon4_Raccourcis_Clavier.html`) — trace écrite qui s'écrit à la main, avec post-it vers les projets d'origine.

**Leçon 1 — Le système d'exploitation** (`module2-logiciels/lecon1-systeme-exploitation/`)

- **`Module2_Lecon1_Interactif.html`** — leçon jeu autonome en 6 ateliers (découvrir le S.E., fenêtres et applications avec une vraie fenêtre manipulable, interface graphique avec bureau/barre des tâches simulés, personnalisation, fichiers et dossiers avec explorateur simulé, organiser ses fichiers), synthèse à trous débloquant la trace écrite complète, défi final noté, espace professeur protégé par mot de passe avec fiche pédagogique imprimable. Reliée depuis la Leçon 1 (cahier) via le post-it « Activités ».

**Leçon 2 — Le traitement de texte** (`module2-logiciels/lecon2-traitement-texte/`)

- **`Projet_TraitementTexte_Virtuel.html`** — projet en 2 onglets : « Le projet » (choix d'un thème, cahier des charges à cocher au fur et à mesure du travail dans Word) et « Aide-mémoire » (où trouver chaque fonction dans le ruban Word, avec pour chaque fonction une version texte et un bouton « 🎬 Version visuelle » qui simule le ruban Word et anime l'effet obtenu — gras/italique, couleur, alignement, interligne, listes…). Reliée depuis la Leçon 2 (cahier).

**Leçon 3 — Le tableur** (`module2-logiciels/lecon3-tableur/`)

- **`Projet_Tableur_Virtuel.html`** — même principe que la Leçon 2 (projet + aide-mémoire), pour Excel : thème, cahier des charges (saisie et mise en forme, formules et calculs, tri et graphique, mise en page, finalisation), et pour chaque fonction une démo visuelle du ruban Excel qui anime l'effet réel obtenu (fusionner/centrer, somme automatique avec compteur animé, avant/après tri, barres de graphique qui poussent…). Reliée depuis la Leçon 3 (cahier).

**Leçon 4 — Raccourcis clavier essentiels** (nouvelle, uniquement en version cahier)

- Ctrl+S, Ctrl+C/V/X, Ctrl+Z, F4 (référence absolue Excel) ; post-it « Activités » ouvrant, à onglets, les 3 projets ci-dessus pour réviser l'ensemble du module.

Le **Module 2** est ainsi complet (Leçons 1 à 4, semaines 6 à 17). Dans le menu du portail, seules la vue d'ensemble et les 4 leçons (cahier) apparaissent désormais pour ce module — les anciens fichiers restent disponibles sur disque et sont reliés depuis chaque leçon via les post-it, plutôt que listés séparément dans la barre latérale.

### Module 3 — Algorithmique et programmation

Même principe que les Modules 1 et 2 : une **vue d'ensemble** (`module3-algo-programmation/vue-ensemble/Module3_Vue_Ensemble.html`) résume les **4 leçons** du module sur une page de cahier zoomable, et chaque leçon a sa **version cahier animée** (`Lecon1_Notion_Algorithme.html`, `Lecon2_Instructions_Base.html`, `Lecon3_Structures_Controle.html`, `Lecon4_Programmation_Python.html`) — trace écrite qui s'écrit à la main, avec blocs de code façon pseudocode/Python, reliée aux ateliers d'origine via post-it.

**Algorithmique (Scratch)** (`module3-algo-programmation/algorithmique-scratch/`)

- **`Atelier_Algorithme_Scratch.html`** — atelier en 3 onglets : « Ateliers » (qu'est-ce qu'un algorithme, les 4 familles de briques Scratch à révéler, remise en ordre des étapes d'une recette, structures de contrôle avec 2 QCM), « Aide-mémoire » (variables, capteurs, opérateurs, contrôle, apparence — chaque brique avec sa version texte et une démo visuelle simulant la palette Scratch et animant l'effet réel : variable qui change, comparaison vraie/fausse, si/alors/sinon qui bascule de branche…) et « Mini-défi » (thème + cahier des charges à cocher). Reliée depuis les Leçons 1 à 3 (cahier) via le post-it « Activités ».

**Programmation (Python)** (`module3-algo-programmation/programmation-python/`)

- **`Atelier_Programmation_Python.html`** — même principe (Ateliers / Aide-mémoire / Mini-défi), pour Python : variables et types, mots-clés de base (`print`, `input`, `if/elif/else`, `=` vs `==`) à révéler, remise en ordre de lignes de code, structure conditionnelle avec QCM. L'aide-mémoire montre un éditeur de code simulé avec coloration syntaxique et une console animée (résultat de `type()`, `print()`, comparaison True/False, bascule if/else selon la condition). Reliée depuis la Leçon 4 (cahier).

Le **Module 3** est ainsi complet (Scratch + Python, semaines 18 à 26). Comme pour le Module 2, le menu du portail ne montre plus que la vue d'ensemble et les 4 leçons (cahier) pour ce module — les ateliers Scratch et Python restent pleinement disponibles, reliés depuis chaque leçon via les post-it.

### Module 4 — Réseaux et Internet

**Notion de réseau informatique** (`module4-reseaux-internet/notion-reseau/`)

- **`Atelier_Reseau_Informatique.html`** — même principe que les ateliers des Modules 2 et 3 (Ateliers / Aide-mémoire / Mini-défi) : qu'est-ce qu'un réseau, types de réseaux (LAN/MAN/WAN) et leurs équipements à découvrir, remise en ordre, QCM. L'aide-mémoire couvre LAN/MAN/WAN, équipements (switch, routeur, câble, Wi-Fi…) et topologies, chaque notion avec sa version texte et une démo visuelle animée (schémas de topologie, trajets de données entre appareils).

**Réseau Internet** (`module4-reseaux-internet/reseau-internet/`)

- **`Atelier_Reseau_Internet.html`** — même principe (Ateliers / Aide-mémoire / Mini-défi), pour Internet : navigation, adresse URL, moteur de recherche, messagerie, réseaux sociaux et sécurité de base à découvrir, remise en ordre, QCM. L'aide-mémoire simule un navigateur, une messagerie et un chat, avec pour chaque notion une démo visuelle animée montrant concrètement comment ça marche.

Le **Module 4** est ainsi complet (Notion de réseau + Internet, semaines 27 à 33), ce qui achève l'ensemble du portail : les **4 modules** du programme de Tronc Commun sont désormais intégralement couverts.

## Ancien site (`archive-ancien-site/`)

Version précédente du site : un cours générique à 7 modules avec quiz et mini-outils, plus les mêmes leçons L1/L3. Conservée pour référence mais non reliée depuis le nouveau portail. Elle reste ouvrable directement (`archive-ancien-site/index.html`).

## Lancer le site en local

Aucune installation nécessaire : c'est du HTML/CSS/JS statique.

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Compatible avec un hébergement statique (GitHub Pages, Netlify, etc.) sans configuration supplémentaire.

## Étendre le portail

Pour ajouter un contenu (cours, animation, atelier) :
1. Déposer le fichier HTML autonome dans le bon dossier `moduleX-.../sequenceY-.../`.
2. Dans `index.html`, remplacer l'entrée `{ soon: true, ... }` correspondante par `{ file: "nom-du-fichier.html", ic: "…", label: "…", sem: "S…" }` (ou ajouter une nouvelle entrée dans le groupe `items`).
