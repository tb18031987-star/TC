# Découvrir l'Informatique — Cours interactif

Un cours interactif d'introduction à l'informatique, en français, sous forme de site web statique (HTML/CSS/JS, sans dépendances ni build).

## Contenu

7 modules, chacun avec une leçon, un mini-outil interactif et un quiz noté :

1. **Qu'est-ce que l'informatique ?** — matériel vs logiciel (exercice de classification)
2. **Comment fonctionne un ordinateur** — CPU, RAM, binaire (convertisseur binaire interactif)
3. **Réseaux et Internet** — IP, DNS, HTTP(S) (simulation animée d'une requête DNS)
4. **Algorithmique** — notion d'algorithme (visualiseur de tri à bulles pas à pas)
5. **Programmation : les bases** — variables, conditions, boucles (bac à sable JavaScript exécutable dans le navigateur)
6. **Structures de données** — tableaux (manipulation interactive push/pop/shift)
7. **Sécurité informatique** — mots de passe, phishing (testeur de robustesse de mot de passe)

Une page **Propositions** liste des idées de modules à ajouter (Python, bases de données, développement web, IA, cybersécurité avancée, systèmes d'exploitation).

## Fonctionnement

- Navigation par ancre (`#/`, `#/module/<id>`, `#/propositions`), pas de framework.
- Le contenu du cours est défini dans `js/course-data.js` — ajouter un module à ce tableau suffit pour qu'il apparaisse dans le menu et le suivi de progression.
- La progression (modules terminés + scores de quiz) est enregistrée dans `localStorage` du navigateur.
- Le bac à sable de code exécute le JavaScript de l'utilisateur dans un `<iframe sandbox>` isolé, pour ne jamais toucher à l'état de l'application.

## Lancer le site en local

Aucune installation nécessaire : c'est du HTML/CSS/JS statique.

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Le site est aussi compatible avec un hébergement statique (GitHub Pages, Netlify, etc.) sans configuration supplémentaire.

## Étendre le cours

Pour ajouter un module, il suffit d'ajouter un objet dans `COURSE.modules` (`js/course-data.js`) avec :
- `id`, `icon`, `title`, `summary`, `content` (HTML de la leçon), `quiz` (liste de questions)
- `widget.type` optionnel pour associer un outil interactif existant (`binary`, `sort`, `playground`, `password`, `array`, `classify`, `dns`) ou pour en créer un nouveau dans `js/app.js`.
