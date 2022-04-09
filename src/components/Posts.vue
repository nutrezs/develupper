<template>
  <div class="item">
    <p>POSTS</p>
  
    
    <ul>
      <li v-for="post in posts" :key="post.id"> <router-link :to= "{ path:'/post/'+ post.id, query:{...post}}"> {{post.title}} </router-link> </li> <!--spreed-->
   </ul>
  </div>
   
</template>

<script setup>
import {ref} from 'vue';

const posts = ref(
[
    { id: 1, title : "MongoDB", description : "MongoDB est une base de données orientée documents. En clair, vous bénéficiez de la scalabilité et de la flexibilité que vous voulez, avec les fonctions d’interrogation et d’indexation qu’il vous faut.", text: "` MongoDB stocke les données dans des documents flexibles de type JSON , ce qui signifie que les champs peuvent varier d'un document à l'autre et\
     que la structure des données peut être modifiée au fil du temps.Le modèle de document mappe les objets de votre code d'application , ce qui facilite le traitement des données\
Requêtes ad hoc, indexation et agrégation en temps réel fournissent des moyens puissants d'accéder à vos données et de les analyser.MongoDB est une base de données distribuée, la haute disponibilité, le dimensionnement horizontal, et la distribution géographique sont donc intégrés et faciles à utiliser\
L'utilisation de MongoDB est gratuite. Les versions publiées avant le 16 octobre 2018 sont publiées sous la licence AGPL. Toutes les versions publiées après le 16 octobre 2018, y compris les correctifs pour les versions précédentes, sont publiées sous la Licence publique côté serveur (SSPL) v1.\
", img:'MongoDB.png' },
    { id: 2, title : "MySQL", description : "MySQL Description de l'image MySQL.svg.\
Description de l'image Mysql-screenshot.PNG.\
Informations\
Développé par	MySQL AB, Sun Microsystems et OracleVoir et modifier les données sur Wikidata\
Première version	1994Voir et modifier les données sur Wikidata\
Dernière version	8.0.28 (18 janvier 2022)1Voir et modifier les données sur Wikidata\
Version avancée	8.0 RC1 (25 septembre 2017)2Voir et modifier les données sur Wikidata\
Dépôt	MySQL sur GitHub\
État du projet	En développement permanent\
Écrit en	C++ et CVoir et modifier les données sur Wikidata\
Système d'exploitation	Linux, Microsoft Windows, macOS, FreeBSD, Solaris et type UnixVoir et modifier les données sur Wikidata\
Environnement	Microsoft WindowsVoir et modifier les données sur Wikidata\
Formats lus	MySQL Table Definition Format (d)Voir et modifier les données sur Wikidata\
Formats écrits	MySQL Table Definition Format (d)Voir et modifier les données sur Wikidata\
Langues	Anglais\
Type	Système de gestion de base de données relationnelle (en)\
Serveur logiciel (d)Voir et modifier les données sur Wikidata\
Politique de distribution	Gratuit\
Licence	Licence publique générale GNU version 2 et licence propriétaireVoir et modifier les données sur Wikidata\
Site web	www.mysql.comVoir et modifier les données sur Wikidata\
MySQL (prononcer [maj.ɛs.ky.ɛl]) est un système de gestion de bases de données relationnelles (SGBDR). Il est distribué sous une double licence GPL et propriétaire. Il fait partie des logiciels de gestion de base de données les plus utilisés au monde3, autant par le grand public (applications web principalement) que par des professionnels, en concurrence avec Oracle, PostgreSQL et Microsoft SQL Server.\`", text: "MySQL est un serveur de bases de données relationnelles SQL développé dans un souci de performances élevées en lecture, ce qui signifie qu'il est davantage orienté vers le service de données déjà en place que vers celui de mises à jour fréquentes et fortement sécurisées. Il est multi-thread et multi-utilisateur.\
C'est un logiciel libre7, open source8, développé sous double licence selon qu'il est distribué avec un produit libre ou avec un produit propriétaire. Dans ce dernier cas, la licence est payante, sinon c'est la licence publique générale GNU (GPL) qui s'applique. Un logiciel qui intègre du code MySQL ou intègre MySQL lors de son installation devra donc être libre ou acquérir une licence payante. Cependant, si la base de données est séparée du logiciel propriétaire qui ne fait qu'utiliser des API tierces (par exemple en C# ou php), alors il n'y a pas besoin d'acquérir une licence payante MySQL. Ce type de licence double est utilisé par d'autres produits comme le framework de développement de logiciels Qt (pour les versions antérieures à la 4.5).\
MySQL fonctionne sur de nombreux systèmes d'exploitation différents, incluant AIX, IBM i-5, BSDi, FreeBSD, HP-UX, Linux, Mac OS X, NetWare, NetBSD, OpenBSD, OS/2 Warp, SGI IRIX, Solaris, SCO OpenServer, SCO UnixWare, Tru64 Unix, Windows.\
Les bases de données sont accessibles en utilisant les langages de programmation C, C++, VB, VB .NET, C#, Delphi/Kylix, Eiffel, Java, Perl, PHP, Python, Windev, Ruby et Tcl ; une API spécifique est disponible pour chacun d'entre eux. Une interface ODBC appelée MyODBC est aussi disponible. En Java, MySQL peut être utilisé de façon transparente avec le standard JDO.MySQL supporte deux langages informatiques, le langage de requête SQL et le SQL/PSM (Persistent Stored Modules), une extension procédurale standardisée au SQL incluse dans la norme SQL:20039. SQL/PSM, introduit dans la version 5 de MySQL, permet de combiner des requêtes SQL et des instructions procédurales (boucles, conditions…), dans le but de créer des traitements complexes destinés à être stockés sur le serveur de base de données (objets serveur), par exemple des procédures stockées ou des déclencheurs.\`", img:'MySQL.png' },
    { id: 3,  title : "PHP", description : "PHP (officiellement, ce sigle est un acronyme récursif pour PHP Hypertext Preprocessor) est un langage de scripts généraliste et Open Source, spécialement conçu pour le développement d'applications web. Il peut être intégré facilement au HTML.\`", text: "Au lieu d'utiliser des tonnes de commandes afin d'afficher du HTML (comme en C ou en Perl), les pages PHP contiennent des fragments HTML dont du code qui fait quelque chose (dans ce cas, il va afficher Bonjour, je suis un script PHP !). Le code PHP est inclus entre une balise de début <?php et une balise de fin ?> qui permettent au serveur web de passer en mode PHP.\
Ce qui distingue PHP des langages de script comme le Javascript, est que le code est exécuté sur le serveur, générant ainsi le HTML, qui sera ensuite envoyé au client. Le client ne reçoit que le résultat du script, sans aucun moyen d'avoir accès au code qui a produit ce résultat. Vous pouvez configurer votre serveur web afin qu'il analyse tous vos fichiers HTML comme des fichiers PHP. Ainsi, il n'y a aucun moyen de distinguer les pages qui sont produites dynamiquement des pages statiques.Le grand avantage de PHP est qu'il est extrêmement simple pour les néophytes, mais offre des fonctionnalités avancées pour les experts. Ne craignez pas de lire la longue liste de fonctionnalités PHP. Vous pouvez vous plonger dans le code, et en quelques instants, écrire des scripts simples.\
Bien que le développement de PHP soit orienté vers la programmation pour les sites web, vous pouvez en faire bien d'autres usages. Lisez donc la section Que peut faire PHP ? ou bien le tutoriel d'introduction si vous êtes uniquement intéressé dans la programmation web.\`", img:'PHP.png' },
    { id: 4,title : "Python", description : "Python est un langage de programmation puissant et facile à apprendre. Il dispose de structures de données de haut niveau et permet une approche simple mais efficace de la programmation orientée objet. Parce que sa syntaxe est élégante, que son typage est dynamique et qu'il est interprété, Python est un langage idéal pour l'écriture de scripts et le développement rapide d'applications dans de nombreux domaines et sur la plupart des plateformes.\`", text: "L'interpréteur Python et sa vaste bibliothèque standard sont disponibles librement, sous forme de sources ou de binaires, pour toutes les plateformes majeures depuis le site Internet https://www.python.org/ et peuvent être librement redistribués. Ce même site distribue et pointe vers des modules, des programmes et des outils tiers. Enfin, il constitue une source de documentation.\
L'interpréteur Python peut être facilement étendu par de nouvelles fonctions et types de données implémentés en C ou C++ (ou tout autre langage appelable depuis le C). Python est également adapté comme langage d'extension pour personnaliser des applications.\
Dans ce tutoriel, nous introduisons, de façon informelle, les concepts de base ainsi que les fonctionnalités du langage Python et de son écosystème. Il est utile de disposer d'un interpréteur Python à portée de main pour mettre en pratique les notions abordées. Si ce n'est pas possible, pas de souci, les exemples sont inclus et le tutoriel est adapté à une lecture hors ligne.\
Pour une description des objets et modules de la bibliothèque standard, reportez-vous à La bibliothèque standard. La référence du langage Python présente le langage de manière plus formelle. Pour écrire des extensions en C ou en C++, lisez Extension et intégration de l'interpréteur Python et Manuel de référence de l'API Python/C. Des livres sont également disponibles qui couvrent Python dans le détail.\
L'ambition de ce tutoriel n'est pas d'être exhaustif et de couvrir chaque fonctionnalité, ni même toutes les fonctionnalités les plus utilisées. Il vise, en revanche, à introduire les fonctionnalités les plus notables et à vous donner une bonne idée de la saveur et du style du langage. Après l'avoir lu, vous serez capable de lire et d'écrire des modules et des programmes Python et vous serez prêt à en apprendre davantage sur les modules de la bibliothèque Python décrits dans La bibliothèque standard.\
\`", img:'PYTHON.png' },
    { id: 5,title : "Docker", description : "Docker supprime les tâches de configuration répétitives et banales et est utilisé tout au long du cycle de vie du développement pour un développement d'applications rapide, facile et portable - bureau et cloud. La plate-forme complète de bout en bout de Docker comprend des interfaces utilisateur, des CLI, des API et une sécurité conçus pour fonctionner ensemble tout au long du cycle de vie de la livraison des applications.\
.\`", text: "Prenez une longueur d'avance sur votre codage en tirant parti des images Docker pour développer efficacement vos propres applications uniques sur Windows et Mac. Créez votre application multi-conteneurs à l'aide de Docker Compose.\
Intégrez vos outils préférés tout au long de votre pipeline de développement - Docker fonctionne avec tous les outils de développement que vous utilisez, y compris VS Code, CircleCI et GitHub.\
Empaquetez les applications sous forme d'images de conteneurs portables pour qu'elles s'exécutent dans n'importe quel environnement de manière cohérente, de Kubernetes sur site à AWS ECS, Azure ACI, Google GKE et plus encore.Tirez parti du contenu de confiance Docker, y compris les images officielles Docker et les images des éditeurs vérifiés Docker du référentiel Docker Hub.\
Innovez en collaborant avec les membres de l'équipe et d'autres développeurs et en publiant facilement des images sur Docker Hub.\
Personnalisez l'accès des développeurs aux images avec un contrôle d'accès basé sur les rôles et obtenez des informations sur l'historique des activités avec les journaux d'audit de Docker Hub.Fournissez plusieurs applications sans tracas et faites-les fonctionner de la même manière sur tous vos environnements, y compris la conception, les tests, la mise en scène et la production - de bureau ou natifs du cloud.\
Déployez vos applications dans des conteneurs séparés indépendamment et dans différentes langues. Réduisez les risques de conflits entre langages, bibliothèques ou frameworks.\
Accélérez le développement avec la simplicité de Docker Compose CLI et avec une seule commande, lancez vos applications localement et sur le cloud avec AWS ECS et Azure ACI.", img:'Docker.png' },
]
);

  
</script>
  


<style scoped> 
p{
  color: crimson;
}

</style>
