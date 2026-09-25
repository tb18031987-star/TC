/* Contenu du cours : modules, leçons et quiz.
   Ajouter un module ici suffit pour qu'il apparaisse dans la navigation et le suivi de progression. */

const COURSE = {
  title: "Découvrir l'Informatique",
  subtitle: "Un cours interactif pour comprendre les fondamentaux de l'informatique, pas à pas.",
  modules: [
    {
      id: "intro",
      icon: "💡",
      title: "Qu'est-ce que l'informatique ?",
      summary: "Définitions, histoire rapide, matériel vs logiciel.",
      content: `
        <p>L'<strong>informatique</strong> est la science du traitement automatique de l'information. Le mot vient de la contraction de "information" et "automatique".</p>
        <p>On distingue généralement deux grandes familles :</p>
        <ul>
          <li><strong>Le matériel (hardware)</strong> : les composants physiques — processeur, mémoire, disque dur, écran, clavier...</li>
          <li><strong>Le logiciel (software)</strong> : les programmes qui indiquent au matériel quoi faire — système d'exploitation, applications, jeux...</li>
        </ul>
        <p>Un ordinateur, aussi puissant soit-il, ne sait rien faire sans instructions. Ces instructions, écrites par des humains, forment des <strong>programmes</strong>.</p>
        <div class="callout">
          <strong>À retenir :</strong> Matériel = le corps. Logiciel = les instructions que le corps exécute.
        </div>
      `,
      widget: { type: "classify" },
      quiz: [
        {
          q: "Le disque dur d'un ordinateur fait partie...",
          options: ["du logiciel", "du matériel", "d'Internet", "d'un algorithme"],
          correct: 1,
          explain: "Le disque dur est un composant physique : il fait partie du matériel (hardware)."
        },
        {
          q: "Un programme comme un navigateur web est...",
          options: ["du matériel", "un composant électronique", "du logiciel", "un protocole réseau"],
          correct: 2,
          explain: "Un navigateur est une suite d'instructions exécutées par l'ordinateur : c'est du logiciel."
        },
        {
          q: "Que signifie le mot \"informatique\" à l'origine ?",
          options: [
            "Information + automatique",
            "Internet + pratique",
            "Instruction + magnétique",
            "Interface + tactique"
          ],
          correct: 0,
          explain: "\"Informatique\" est la contraction de \"information\" et \"automatique\"."
        }
      ]
    },

    {
      id: "architecture",
      icon: "🖥️",
      title: "Comment fonctionne un ordinateur",
      summary: "Processeur, mémoire, stockage et... le binaire.",
      content: `
        <p>À l'intérieur d'un ordinateur, plusieurs composants collaborent :</p>
        <ul>
          <li><strong>CPU (processeur)</strong> : le "cerveau" qui exécute les instructions.</li>
          <li><strong>RAM (mémoire vive)</strong> : une mémoire rapide mais temporaire, utilisée pendant que les programmes tournent.</li>
          <li><strong>Stockage (disque dur / SSD)</strong> : une mémoire lente mais durable, qui garde les données même hors tension.</li>
        </ul>
        <p>Tout ce que traite un ordinateur — texte, image, son — est finalement converti en une longue suite de <strong>0 et de 1</strong> : c'est le <strong>binaire</strong>. Chaque 0 ou 1 s'appelle un <strong>bit</strong>. Un groupe de 8 bits forme un <strong>octet</strong> (byte).</p>
        <p>Essayez le convertisseur ci-dessous pour voir comment un nombre décimal se transforme en binaire !</p>
      `,
      widget: { type: "binary" },
      quiz: [
        {
          q: "Quel composant est le \"cerveau\" de l'ordinateur ?",
          options: ["La RAM", "Le disque dur", "Le CPU", "L'écran"],
          correct: 2,
          explain: "Le CPU (processeur) exécute les instructions : c'est le composant central de calcul."
        },
        {
          q: "Un octet est composé de combien de bits ?",
          options: ["2", "4", "8", "16"],
          correct: 2,
          explain: "Un octet (byte) est constitué de 8 bits."
        },
        {
          q: "Pourquoi la RAM est-elle dite \"volatile\" ?",
          options: [
            "Elle chauffe beaucoup",
            "Elle perd son contenu quand l'ordinateur s'éteint",
            "Elle est très rapide",
            "Elle ne peut pas être remplacée"
          ],
          correct: 1,
          explain: "La RAM perd toutes ses données dès que l'alimentation est coupée, contrairement au stockage."
        }
      ]
    },

    {
      id: "reseaux",
      icon: "🌐",
      title: "Réseaux et Internet",
      summary: "Comment les ordinateurs communiquent entre eux.",
      content: `
        <p>Internet est un immense réseau de réseaux qui relie des milliards d'appareils. Pour qu'ils se comprennent, ils utilisent des règles communes appelées <strong>protocoles</strong>.</p>
        <ul>
          <li><strong>IP (Internet Protocol)</strong> : donne une adresse unique à chaque appareil connecté.</li>
          <li><strong>HTTP/HTTPS</strong> : le protocole utilisé pour consulter des pages web (le "S" signifie sécurisé, donc chiffré).</li>
          <li><strong>DNS</strong> : l'annuaire qui traduit un nom de domaine (ex. wikipedia.org) en adresse IP.</li>
        </ul>
        <p>Quand vous tapez une adresse dans votre navigateur :</p>
        <ol>
          <li>Le navigateur interroge le DNS pour obtenir l'adresse IP du serveur.</li>
          <li>Il envoie une requête HTTP(S) à ce serveur.</li>
          <li>Le serveur répond avec les données de la page (HTML, images, etc.).</li>
          <li>Le navigateur affiche la page.</li>
        </ol>
      `,
      widget: { type: "dns" },
      quiz: [
        {
          q: "Quel est le rôle du DNS ?",
          options: [
            "Chiffrer les données",
            "Traduire un nom de domaine en adresse IP",
            "Afficher une page web",
            "Stocker des fichiers en ligne"
          ],
          correct: 1,
          explain: "Le DNS fonctionne comme un annuaire : il convertit des noms lisibles en adresses IP."
        },
        {
          q: "Que signifie le \"S\" dans HTTPS ?",
          options: ["Simple", "Système", "Sécurisé", "Serveur"],
          correct: 2,
          explain: "HTTPS chiffre la communication entre le navigateur et le serveur : le \"S\" veut dire sécurisé."
        }
      ]
    },

    {
      id: "algorithmique",
      icon: "🧩",
      title: "Algorithmique",
      summary: "Penser étape par étape pour résoudre un problème.",
      content: `
        <p>Un <strong>algorithme</strong> est une suite finie et ordonnée d'instructions permettant de résoudre un problème. C'est une recette de cuisine appliquée à l'informatique !</p>
        <p>Exemple : un algorithme pour trouver le plus grand nombre dans une liste :</p>
        <ol>
          <li>Prendre le premier nombre comme "plus grand actuel".</li>
          <li>Regarder le nombre suivant : s'il est plus grand, il devient le nouveau "plus grand actuel".</li>
          <li>Répéter jusqu'à la fin de la liste.</li>
          <li>Le "plus grand actuel" est la réponse.</li>
        </ol>
        <p>Le <strong>tri</strong> est un grand classique de l'algorithmique. Essayez le visualiseur de tri à bulles ci-dessous pour voir un algorithme "en action", étape par étape.</p>
      `,
      widget: { type: "sort" },
      quiz: [
        {
          q: "Un algorithme doit être...",
          options: [
            "Infini et flou",
            "Fini et ordonné",
            "Écrit uniquement en Python",
            "Toujours graphique"
          ],
          correct: 1,
          explain: "Un algorithme est une suite finie (qui se termine) et ordonnée d'étapes précises."
        },
        {
          q: "Le tri à bulles fonctionne en...",
          options: [
            "Choisissant un pivot aléatoire",
            "Comparant et échangeant des éléments adjacents",
            "Triant uniquement les nombres pairs",
            "Supprimant les doublons"
          ],
          correct: 1,
          explain: "Le tri à bulles compare des paires d'éléments voisins et les échange s'ils sont mal ordonnés."
        }
      ]
    },

    {
      id: "programmation",
      icon: "⌨️",
      title: "Programmation : les bases",
      summary: "Variables, conditions, boucles — et du vrai code à exécuter.",
      content: `
        <p>Programmer, c'est écrire des instructions dans un langage que l'ordinateur peut comprendre. Voici trois briques essentielles, illustrées en JavaScript :</p>
        <ul>
          <li><strong>Variable</strong> : une boîte nommée qui stocke une valeur. <code>let age = 16;</code></li>
          <li><strong>Condition</strong> : exécuter du code seulement si une situation est vraie. <code>if (age >= 18) { ... }</code></li>
          <li><strong>Boucle</strong> : répéter une action plusieurs fois. <code>for (let i = 0; i < 5; i++) { ... }</code></li>
        </ul>
        <p>Utilisez le bac à sable ci-dessous pour modifier et exécuter du vrai code JavaScript directement dans votre navigateur !</p>
      `,
      widget: { type: "playground" },
      quiz: [
        {
          q: "Que fait cette ligne : let score = 10; ?",
          options: [
            "Elle affiche 10 à l'écran",
            "Elle crée une variable nommée score contenant 10",
            "Elle compare score à 10",
            "Elle supprime la variable score"
          ],
          correct: 1,
          explain: "\"let\" déclare une variable, ici nommée score, et lui attribue la valeur 10."
        },
        {
          q: "Une boucle sert à...",
          options: [
            "Stocker une seule valeur",
            "Comparer deux textes",
            "Répéter une action plusieurs fois",
            "Se connecter à Internet"
          ],
          correct: 2,
          explain: "Une boucle (comme \"for\" ou \"while\") permet de répéter un bloc d'instructions."
        },
        {
          q: "Quelle instruction permet d'exécuter du code seulement sous condition ?",
          options: ["for", "if", "let", "print"],
          correct: 1,
          explain: "\"if\" exécute un bloc de code uniquement si la condition entre parenthèses est vraie."
        }
      ]
    },

    {
      id: "structures",
      icon: "📦",
      title: "Structures de données",
      summary: "Organiser des informations : tableaux et listes.",
      content: `
        <p>Une <strong>structure de données</strong> est une façon d'organiser des informations pour les manipuler efficacement.</p>
        <p>La plus simple est le <strong>tableau (array)</strong> : une liste ordonnée d'éléments, chacun accessible par sa position (son <em>index</em>), en commençant à 0.</p>
        <pre><code>let fruits = ["pomme", "banane", "cerise"];
fruits[0]; // "pomme"
fruits[1]; // "banane"
fruits.length; // 3</code></pre>
        <p>Les tableaux permettent d'ajouter, retirer ou parcourir des éléments avec des boucles — une combinaison très puissante avec ce que vous avez appris au module précédent !</p>
      `,
      widget: { type: "array" },
      quiz: [
        {
          q: "Dans le tableau [\"pomme\", \"banane\", \"cerise\"], quel est l'index de \"banane\" ?",
          options: ["0", "1", "2", "3"],
          correct: 1,
          explain: "Les index commencent à 0 : pomme=0, banane=1, cerise=2."
        },
        {
          q: "Que renvoie fruits.length pour un tableau de 3 éléments ?",
          options: ["2", "3", "0", "undefined"],
          correct: 1,
          explain: "\"length\" renvoie le nombre d'éléments du tableau, ici 3."
        }
      ]
    },

    {
      id: "securite",
      icon: "🔒",
      title: "Sécurité informatique",
      summary: "Mots de passe, phishing et bonnes pratiques.",
      content: `
        <p>La sécurité informatique protège les données et les systèmes contre les usages malveillants. Quelques notions clés :</p>
        <ul>
          <li><strong>Mot de passe fort</strong> : long, varié (majuscules, minuscules, chiffres, symboles), unique par site.</li>
          <li><strong>Phishing (hameçonnage)</strong> : technique visant à voler des informations en se faisant passer pour un service de confiance (email, site imité...).</li>
          <li><strong>Mises à jour</strong> : elles corrigent des failles de sécurité connues — il faut les installer.</li>
          <li><strong>Double authentification (2FA)</strong> : un second code (SMS, application) en plus du mot de passe.</li>
        </ul>
        <p>Testez la robustesse d'un mot de passe avec l'outil ci-dessous.</p>
      `,
      widget: { type: "password" },
      quiz: [
        {
          q: "Qu'est-ce que le phishing ?",
          options: [
            "Un virus qui ralentit l'ordinateur",
            "Une technique pour voler des informations en usurpant une identité de confiance",
            "Un type de mot de passe",
            "Un protocole réseau sécurisé"
          ],
          correct: 1,
          explain: "Le phishing consiste à tromper la victime en imitant un service légitime pour lui voler des informations."
        },
        {
          q: "Pourquoi utiliser un mot de passe différent pour chaque site ?",
          options: [
            "Pour aller plus vite à la connexion",
            "Pour que la fuite d'un site n'expose pas tous vos comptes",
            "Ce n'est pas utile",
            "Pour respecter la loi"
          ],
          correct: 1,
          explain: "Si un site est piraté et que vous réutilisez le même mot de passe partout, tous vos comptes sont exposés."
        }
      ]
    }
  ],

  // Propositions pour la suite du cours — modules envisageables à ajouter.
  proposals: [
    {
      title: "Python pour débutants",
      desc: "Une introduction pratique à la programmation avec Python : syntaxe, fonctions, mini-projets guidés."
    },
    {
      title: "Bases de données",
      desc: "Comprendre les tables, le langage SQL (SELECT, INSERT, JOIN) avec une base de données simulée dans le navigateur."
    },
    {
      title: "Développement web",
      desc: "HTML, CSS et JavaScript expliqués via un éditeur en direct pour construire sa première page web."
    },
    {
      title: "Intelligence artificielle : les bases",
      desc: "Qu'est-ce que le machine learning ? Démonstrations interactives de classification simple."
    },
    {
      title: "Cybersécurité avancée",
      desc: "Chiffrement, attaques courantes (injection, force brute) et défenses, avec des simulations sans danger."
    },
    {
      title: "Systèmes d'exploitation",
      desc: "Comment un OS gère les processus, la mémoire et les fichiers, avec des animations pédagogiques."
    }
  ]
};
