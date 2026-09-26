# Tronc Commun — Informatique

Portail statique (HTML/CSS/JS, sans dépendances ni build) qui donne accès à l'ensemble des cours, leçons interactives et animations du programme d'informatique de Tronc Commun, organisé en **4 modules** et une progression **semaine par semaine**.

## Structure

Le portail (`index.html`, à la racine) affiche une barre latérale à deux niveaux (Module → Séquence/Leçon) qui ouvre chaque contenu dans un cadre à droite, sans rien fusionner : chaque cours, animation ou atelier reste un fichier HTML indépendant, testable seul.

```
index.html                          ← portail général (page d'accueil)
module1-generalites/
  sequence1-definitions-vocabulaire/   (S1 — complet)
  sequence2-unite-centrale-memoire/    (S2-S3 — à venir)
  sequence3-peripheriques/             (S3 — à venir)
  sequence4-logiciels-domaines/        (S4-S5 — à venir)
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

Les entrées grisées avec un 🔒 dans le portail correspondent à des séances prévues dans la progression mais pas encore rédigées ; cliquer dessus affiche un message « Contenu en préparation » plutôt qu'une page cassée.

## Contenu disponible

### Module 1 — Généralités sur les systèmes informatiques

**Séquence 1 — Définitions et vocabulaire de base** (`module1-generalites/sequence1-definitions-vocabulaire/`)

Leçons interactives "jeu" autonomes : robot guide animé, chrono de séance, phases d'activité (Activité → Je déduis → Trace écrite → Exemple → Exercice), badges, confettis et bilan imprimable avec carte mentale.

- **`TC_M1_L1_definitions.html`** — Leçon 1 : donnée vs information, les 5 notions clés (informatique, information, traitement, automatique, système informatique), unités de mesure — avec une situation-problème progressive, des cartes à révéler, un défi de rangement des unités et une galerie de 5 animations ouvertes en fenêtre modale.
- **`TC_M1_L3_bit_octet.html`** — Leçon 3 : le bit et l'octet, langage binaire, conversion décimal ↔ binaire, unités Ko/Mo/Go/To, code ASCII.

Animations autonomes (`animations/`), aussi accessibles seules depuis le portail :
- `circuit-bit.html` — du circuit électrique au transistor puis au bit/octet
- `clavier-ecran.html` — codage/décodage de la lettre A
- `calcul.html` — codage, calcul (12 + 7) et décodage via l'unité centrale
- `image.html` — codage/décodage d'une image en pixels 0/1
- `combien-1to.html` — compteurs animés (photos, chansons, films, documents dans 1 To)

### Modules 1 (séquences 2 à 4), 2, 3, 4

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
