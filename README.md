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
  lecon1-systeme-exploitation/         (S6-S8 — à venir)
  lecon2-traitement-texte/             (S9-S14 — à venir)
  lecon3-tableur/                      (S14-S17 — à venir)
module3-algo-programmation/
  algorithmique-scratch/               (S18-S23 — à venir)
  programmation-python/                (S23-S26 — à venir)
module4-reseaux-internet/
  notion-reseau/                       (S27-S28 — à venir)
  reseau-internet/                     (S29-S33 — à venir)
archive-ancien-site/                ← ancien site générique à 7 modules (conservé, non lié depuis le portail)
```

Les entrées grisées avec un 🔒 dans le portail correspondent à des séances prévues dans la progression mais pas encore rédigées ; cliquer dessus affiche un message « Contenu en préparation » plutôt qu'une page cassée. Le plan détaillé du Module 1 (quels cours et animations sont prévus, séquence par séquence) suit le blueprint fourni pour ce module.

## Contenu disponible

### Module 1 — Généralités sur les systèmes informatiques

**Séquence 1 — Définitions et vocabulaire de base** (`module1-generalites/sequence1-definitions-vocabulaire/`)

- Leçons interactives "jeu" autonomes (robot guide animé, chrono, phases Activité → Je déduis → Trace écrite → Exemple → Exercice, badges, bilan imprimable) : **`TC_M1_L1_definitions.html`** (donnée vs information, notions clés, unités de mesure) et **`TC_M1_L3_bit_octet.html`** (bit, octet, binaire, ASCII).
- 2 cours prévus (🔒 à venir) : définitions et vocabulaire, langage machine et binaire.
- 14 animations prévues, dont 5 disponibles dans `animations/` : `image.html` (codage/décodage lettre T), `clavier-ecran.html` (lettre A), `calcul.html` (12 + 7), `circuit-bit.html` (circuit → transistor → bit), `combien-1to.html` (unités dans 1 To). Les 9 autres (codage couleur, mot SALUT, son, scanner/imprimante, souris/écran, zoom microscope, compteur bit→To, RAM vs stockage) sont encore 🔒 à venir.

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

Séquences 2 à 4 sont complètes ; la Séquence 1 a son contenu principal (2 leçons interactives + 5 animations) et 11 emplacements 🔒 réservés pour compléter le plan.

### Modules 2, 3, 4

Structure posée dans le portail avec la progression hebdomadaire prévue, contenu à rédiger.

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
