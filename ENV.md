VARIABLES D'ENVIRONNEMENT:

Les variables d'environnement sont des variables de developpement dynamique
permet de mettre tous les renseignements de notre hébergement mutualisé ainsi que des paramètres et sera déposé en production sur le serveur

Lorsque vous utilisez un outil de construction comme Webpack ou Browserify, le mode de production sera déterminé par process.env.NODE_ENV dans le code source de Vue, et il sera en mode développement par défaut. Les deux outils de construction fournissent des moyens d'écraser cette variable pour activer le mode de production de Vue, et les avertissements seront supprimés par les minificateurs pendant la construction. Tous les modèles vue-cli les ont préconfigurés pour vous,

Exécutez votre commande de regroupement avec la variable d'environnement NODE_ENV réelle définie sur "production". Cela indique à vueify d'éviter d'inclure le code lié au rechargement à chaud et au développement.
Appliquez une transformation globale envify à votre bundle. Cela permet au minificateur de supprimer tous les avertissements du code source de Vue enveloppés dans des blocs conditionnels de variable env.


MISE EN PRODUCTION / DEPLOIEMENT:


Déploiement de production #

Développement vs Production #

Pendant le développement, Vue fournit un certain nombre de fonctionnalités pour améliorer l'expérience de développement :

Avertissement pour les erreurs courantes et les pièges
Validation des accessoires / événements
Crochets de débogage de réactivité
Intégration des outils de développement
Cependant, ces fonctionnalités deviennent inutiles en production. Certaines des vérifications d'avertissement peuvent également entraîner une légère surcharge de performances. Lors du déploiement en production, nous devons supprimer toutes les branches de code inutilisées et réservées au développement pour réduire la taille de la charge utile et améliorer les performances.

SansBuildTools#

Si vous utilisez Vue sans outil de génération en le chargeant à partir d'un CDN ou d'un script auto-hébergé, assurez-vous d'utiliser la version de production (fichiers dist se terminant par .prod.js) lors du déploiement en production. Les versions de production sont pré-minifiées avec toutes les branches de code de développement uniquement supprimées.

Si vous utilisez une construction globale (accès via Vue global) : utilisez vue.global.prod.js.
Si vous utilisez la version ESM (accès via des importations ESM natives) : utilisez vue.esm-browser.prod.js.
Consultez le guide des fichiers dist pour plus de détails.

AvecBuildTools #

Les projets échafaudés via create-vue (basé sur Vite) ou Vue CLI (basé sur webpack) sont préconfigurés pour les versions de production.

Si vous utilisez une configuration personnalisée, assurez-vous que :

vue se résout en vue.runtime.esm-bundler.js.
Les indicateurs de fonctionnalité de compilation sont correctement configurés.
process.env.NODE_ENV est remplacé par "production" lors de la construction.
Références supplémentaires :

Guide de construction de production rapide
Guide de déploiement rapide
Afficher le guide de déploiement de la CLI
Suivi des erreurs d'exécution#

Le gestionnaire d'erreurs au niveau de l'application peut être utilisé pour signaler des erreurs aux services de suivi :

importer { createApp } à partir de 'view'

const app = createApp(...)

app.config.errorHandler = (erreur, instance, info) => {
  // signale l'erreur aux services de suivi
}
Des services tels que Sentry et Bugsnag fournissent également des intégrations officielles pour Vue.

Un objet littéral afin de configurer le routing(defini par un composant et un chemin qui seront affichés dans le router-view) des pages de notre application.

Il faut créer les liens entre les pages(router-link)

les informations sur la route sont au niveau de l'objet $router

les URL etants dynamiques permettent les échanges des data entre pages 

pour la partie front end, grace à Vue.js et Axios la gestion et l échanges vers le serveur sont effectifs
Les requettes sont gérée via la mise en place d'une API REST et d'un framework coté serveur.