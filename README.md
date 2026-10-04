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

Comme pour les Modules 2 et 3, le menu du portail ne montre plus que la **vue d'ensemble** et les **4 leçons (cahier)** — les séquences, cours et animations d'origine restent sur disque et sont reliés depuis les leçons via les post-it, plutôt que listés séparément dans la barre latérale.

**Vue d'ensemble du module** (`module1-generalites/vue-ensemble/Module1_Vue_Ensemble.html`)

- Page de cahier unique qui résume les **4 leçons du module** (Définitions, Structure de l'ordinateur, Types de logiciels, Domaines d'application), sur le modèle d'une fiche de synthèse une-page. Chaque leçon est une tuile cliquable qui **zoome** en plein détail ; un bouton « 🔍− Vue d'ensemble » revient à la grille, et chaque détail a son bouton « 🎬 Ouvrir la trace écrite animée complète ».

**Leçon 1 — Définitions et vocabulaire** (`module1-generalites/sequence1-definitions-vocabulaire/Lecon1_Definitions_vocabulaire.html`)

- La trace écrite s'écrit à la main sur une page de cahier Seyès animée. Post-it jaunes vers les animations clés (clavier→écran, image, circuit→bit, 1 To) ; post-it vert vers `TC_M1_L1_definitions.html` avec lien direct vers la bonne notion (`#notion1/2/3`) ; un dernier post-it **« 📚 Compléments »** regroupe en onglets tout le reste de la séquence encore accessible mais pas mis en avant ailleurs : la Leçon 3 (`TC_M1_L3_bit_octet.html`), les 2 cours (`cours_definitions_vocabulaire.html`, `cours_langage_machine_binaire.html`) et les 9 animations restantes (couleur 5×5/8×8, mot SALUT, son, scanner/imprimante, souris/écran, zoom microscope, compteur 1 bit→1 To, RAM vs stockage).

**Leçon 2 — Structure de l'ordinateur** (`module1-generalites/vue-ensemble/Lecon2_Structure_Ordinateur.html`)

- Unité centrale (UAL/Commande/Registres), mémoire RAM/ROM, le bus, entrée/sortie/stockage. Post-it vers les animations et cours des Séquences 2 et 3 (`au_coeur_unite_centrale.html`, `animations_dedans_dehors.html`, `peripheriques.html`, `animations_tri_peripheriques.html`, `cours_unite_centrale_memoire.html`, `cours_peripheriques.html`).

**Leçon 3 — Types de logiciels** et **Leçon 4 — Domaines d'application** (`module1-generalites/vue-ensemble/Lecon3_Types_Logiciels.html`, `Lecon4_Domaines_Application.html`)

- Logiciel de base ≠ application ; grille des domaines d'application. Post-it vers `animations_tri_logiciels.html` et `cours_logiciels_domaines.html` (Séquence 4).

Le **Module 1** est ainsi complet (4 leçons, semaines 1 à 5) ; l'intégralité du contenu d'origine (séquences, cours, animations) reste accessible, rien n'a été supprimé.

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

Même principe que les autres modules : une **vue d'ensemble** (`module4-reseaux-internet/vue-ensemble/Module4_Vue_Ensemble.html`) résume les **4 leçons** du module sur une page de cahier zoomable, et chaque leçon a sa **version cahier animée** (`Lecon1_Notion_Reseau.html`, `Lecon2_Types_Topologies.html`, `Lecon3_Internet_Services.html`, `Lecon4_Usage_Responsable.html`). Le menu ne montre que la vue d'ensemble et les 4 leçons.

- **Leçon 1 — Notion de réseau** : réseau (carte réseau, câble/Wi-Fi, switch, routeur, serveur), protocole (TCP/IP), adresse IP.
- **Leçon 2 — Types et topologies de réseau** : LAN/MAN/WAN, topologies Bus/Étoile/Anneau, avantages et inconvénients.
- **Leçon 3 — Internet et ses services** : Internet et le FAI, décomposition d'une URL (protocole/domaine/chemin), e-mail, chat pédagogique.
- **Leçon 4 — Usage responsable d'Internet** : ce qu'on fait / ne fait pas (données personnelles, sources, respect, liens suspects).

Les post-it des Leçons 1 et 2 ouvrent **`Atelier_Reseau_Informatique.html`** (`module4-reseaux-internet/notion-reseau/`) — atelier en 3 onglets (Ateliers / Aide-mémoire / Mini-défi) sur les réseaux, équipements et topologies, avec démos visuelles animées. Les post-it des Leçons 3 et 4 ouvrent **`Atelier_Reseau_Internet.html`** (`module4-reseaux-internet/reseau-internet/`) — même principe pour Internet (navigation, URL, messagerie, sécurité), avec navigateur/messagerie/chat simulés.

Le **Module 4** est ainsi complet (4 leçons, semaines 27 à 33), ce qui achève l'ensemble du portail : les **4 modules** du programme de Tronc Commun sont désormais intégralement couverts, chacun avec sa vue d'ensemble et ses leçons en version cahier animée.

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
