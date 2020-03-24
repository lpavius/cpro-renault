/**
 * ESLINT
 *
 * Installer et configurer babel pour transpiler son code et assurer la
 * meilleure compatibilité inter-navigateurs.
 *
 * 1. Commencez par créer un dossier de travail. Dans ce dossier, créez un
 * dossier source/ (c'est le dossier dans lequel nous allons programmer en
 * es6+) et un dossier www/build/ (c'est le dossier dans lequel babel mettra
 * le code transpilé en es3).
 *
 * 2. Initialisez un projet node à la racine de votre dossier de travail. Vous
 * devriez donc obtenir un fichier package.json.
 *
 * 3. Installez et configurez eslint pour ce projet en indiquant que le code à
 * valider devra fonctionner au sein d'un navigateur (Browser)
 *
 * 4. Créez un fichier script.js dans le dossier source/ et créez un fichier
 * index.html dans le dossier www/ Le fichier index.html charge le fichier
 * www/build/script.js (ce fichier n'existe pas encore, il sera créé par babel)
 *
 * 5. A la racine de votre dossier de travail, en vous aidant de la
 * documentation (https://babeljs.io/setup - selectionnez l'option cli),
 * installez et configurez babel pour qu'il transpile ce qui se trouve dans
 * source/ vers www/build
 *
 * 6. Dans le fichier source/script.js, écrivez un script ES6+ qui déclare :
 * - une classe Carosse dotée de propriétés et de méthodes de votre choix.
 * - une classe Voiture qui hérite de la classe Carosse et qui possède des
 * propriétés et méthodes propres.
 * - Créez une nouvelle instance de voiture et affichez la dans la console.
 *
 * 7. Utilisez babel via npm pour transpiler le fichier source/script.js vers
 * www/build/script.js et testez le script transpilé dans un navigateur en
 * utilisant le fichier index.html.
 *
 * N.B. : Pensez à vérifier à l'aide de eslint que vous n'avez pas de problème
 * de syntaxe ou de présentation de votre code lors de son écriture.
**/

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
