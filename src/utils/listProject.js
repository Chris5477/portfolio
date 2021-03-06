import logoReservia from "../assets/projects/reservia/Reservia.svg";
import reservia from "../assets/projects/reservia/reservia.png";
import reservia2 from "../assets/projects/reservia/reservia2.png";

import logoOhmyfood from "../assets/projects/ohmyfood/logoOhmyfood.png";
import ohmyfood from "../assets/projects/ohmyfood/ohmyfood.png";
import ohmyfood2 from "../assets/projects/ohmyfood/ohmyfood2.png";
import ohmyfood3 from "../assets/projects/ohmyfood/ohmyfood3.png";
import animation from "../assets/projects/ohmyfood/animation.webm";

import logoGameOn from "../assets/projects/gameOn/logoGameOn.png";
import GameOn from "../assets/projects/gameOn/gameOn.png";
import GameOn2 from "../assets/projects/gameOn/gameOn2.png";

import logoFishEye from "../assets/projects/FishEye/logoFishEye.png";
import FishEye from "../assets/projects/FishEye/fishEye.png";
import FishEye2 from "../assets/projects/FishEye/fishEye2.png";
import FishEye3 from "../assets/projects/FishEye/fishEye3.png";
import FishEye4 from "../assets/projects/FishEye/fishEye4.png";

import logoPlats from "../assets/projects/petitPlats/logoPlats.png";
import plats from "../assets/projects/petitPlats/plats.png";
import plats2 from "../assets/projects/petitPlats/plats2.png";
import plats3 from "../assets/projects/petitPlats/plats3.png";

import logoBilled from "../assets/projects/billed/logoBilled.png";
import billed from "../assets/projects/billed/billed.png";
import billed2 from "../assets/projects/billed/billed2.png";
import billed3 from "../assets/projects/billed/billed3.png";
import billed4 from "../assets/projects/billed/billed4.png";
import billed5 from "../assets/projects/billed/billed5.png";

import logolearnAtHome from "../assets/projects/learnAtHome/logolearnAtHome.png";
import learnAtHome from "../assets/projects/learnAtHome/learnAtHome.png";
import learnAtHome2 from "../assets/projects/learnAtHome/learnAtHome2.png";
import learnAtHome3 from "../assets/projects/learnAtHome/learnAtHome3.png";
import learnAtHome4 from "../assets/projects/learnAtHome/learnAtHome4.png";
import learnAtHome5 from "../assets/projects/learnAtHome/learnAtHome5.png";
import learnAtHome6 from "../assets/projects/learnAtHome/learnAtHome6.png";

import logoKasa from "../assets/projects/kasa/logoKasa.png";
import kasa from "../assets/projects/kasa/kasa.png";
import kasa2 from "../assets/projects/kasa/kasa2.png";
import kasa3 from "../assets/projects/kasa/kasa3.png";

import logoSportsee from "../assets/projects/sportSee/logoSportsee.png";
import sportSee from "../assets/projects/sportSee/sportSee.png";
import sportSee2 from "../assets/projects/sportSee/sportSee2.png";
import sportSee3 from "../assets/projects/sportSee/sportSee3.png";

import logoArgentBank from "../assets/projects/argentBank/logoArgentBank.png";
import argentBank from "../assets/projects/argentBank/argentBank.png";
import argentBank2 from "../assets/projects/argentBank/argentBank2.png";
import argentBank3 from "../assets/projects/argentBank/argentBank3.png";
import argentBank4 from "../assets/projects/argentBank/argentBank4.png";

import logoCompany from "../assets/projects/Hrnet/logoCompany.png";
import hrnet from "../assets/projects/Hrnet/hrnet.png";
import hrnet2 from "../assets/projects/Hrnet/hrnet2.png";
import hrnet3 from "../assets/projects/Hrnet/hrnet3.png";
import hrnet4 from "../assets/projects/Hrnet/hrnet4.png";

import logoCLG from "../assets/projects/coverLetter/logoCLG.png";
import coverLetter1 from "../assets/projects/coverLetter/coverLetter1.png";
import coverLetter2 from "../assets/projects/coverLetter/coverLetter2.png";
import coverLetter3 from "../assets/projects/coverLetter/coverLetter3.png";
import coverLetter4 from "../assets/projects/coverLetter/coverLetter4.png";
import coverLetter5 from "../assets/projects/coverLetter/coverLetter5.png";
import coverLetter6 from "../assets/projects/coverLetter/coverLetter6.png";
import coverLetter7 from "../assets/projects/coverLetter/coverLetter7.png";
import coverLetter8 from "../assets/projects/coverLetter/coverLetter8.png";

export const projects = [
	{
		id: 1,
		title: "R??s??rvia",
		description: "Cr??er un site web d'une agence de voyage.",
		illustrations: [logoReservia, reservia, reservia2],
		article: `Pour ce premier projet, nous devions cr??er une page HTML statique pour une agence de voyage, R??s??rvia. Pour sauvegarder et pouvoir r??cup??rer d'??ventuelles versions, j'ai d?? prendre en main Github ainsi que les commandes basiques de git pour versionner mon code (image 2 et 3). Pour la maquette, il est important de prendre le temps de l'analyser afin de localiser les diff??rentes zones pour faire les bons choix de balises HTML. Le HTML va repr??senter le squelette de notre site. Cependant, il y a des conventions ?? respecter (les normes W3C), qui vont nous permettre de s'assurer d'avoir de bonnes pratiques et pouvoir am??liorer le r??f??rencement de notre site. L'orque nous utilisons des balises s??mantiques HTML, le navigateur va les traduire pour l'afficher sur notre ??cran. Par cons??quent, si nous utilisons une balise header, alors le navigateur comprendra qu'il s'agit d'un en-t??te de page. Pour obtenir un meilleur r??f??rencement sur les moteurs de recherche, il est donc important d'apporter une importance particuli??re ?? la s??mantique. Pour ajouter du style ?? la page, nous devions utiliser le CSS. Le CSS va nous permettre d'ajouter des couches de styles (couleurs, positionnements animations, etc... ). Le CSS poss??de des bon outils pour la gestion des positions des ??l??ments dans leurs conteneurs. Il y a flexbox ou encore CSS grid et ces outils vont nous faciliter la t??che. Auparavant, on utilisait souvent les positions relatives et absolues. Dans la majorit?? des cas, j'ai privil??gi?? flex-box. Il faut comprendre que le placement des ??l??ments dans un conteneur selon un axe principal et secondaire et de rendre les conteneurs flexibles et nous aide fortement pour le responsiv design. Le responsiv design va nous permettre d'adapter nos sites web ou applications en fonction de la taille d'??cran de nos utilisateurs. En CSS, il existe les medias queries, qui vont nous permettre d'appliquer les r??gles CSS uniquement en fonctions de la taille de l'??cran.`,
		skillWorked: ["HTML", "CSS", "Git"],
		github: "https://github.com/Chris5477/Petitcolaschristopher_2_15-03-2021",
	},
	{
		id: 2,
		title: "Oh my food",
		description: "Cr??er un site web mobile-fisrt pour une start-up qui souhaite s'imposer dans la restauration.",
		illustrations: [logoOhmyfood, ohmyfood, ohmyfood2, ohmyfood3, animation],
		article:
			"Oh my food est un site web mobile-first, qui permet aux utilisateurs de pouvoir acc??der au menu d'un restaurant et d'avoir la possibilit?? de commander rapidement (image suivante). Pour remplir ?? bien cette mission, je disposai d'un cahier des charges avec les crit??res pour respecter la maquette, comme les couleurs ou la police ?? utiliser. Nous avons aussi le choix d'utiliser Sass. Sass est un pr??-processeur qui va nous offrir des fonctionnalit??s suppl??mentaires pour compiler des fichiers .scss ou .sass et ainsi les compiler en CSS. Dans un premier temps, il est important de respecter le 'don't repeat yourself', moins on se r??p??te, plus le code sera l??ger, lisible et rend le code plus maintenable. L'avantage de Sass est de nous permettre de stocker des valeurs dans des variables. On peut mettre des couleurs par exemple, ce qui nous facilite la t??che si on d??cide de changer la couleur plus tard. Il y a aussi les mixins pour pouvoir cr??er des snippets de code pour gagner en productivit??. Il reste encore beaucoup d'avantages de ce langage et je vous invite ?? vous rendre sur la documentation de Sass (image 3 et 4). Comme dans le premier projet , j'ai d'abord d??fini les diff??rents ??l??ments de la maquette et placer chacun d'entre eux avec flexbox. Le site ??tant mobile-first , j'ai donc commenc?? ?? coder avec une condition de taille d'??cran. C'??tait aussi l'occasion de pouvoir s'exercer sur la navigation HTML. En cliquant sur un restaurant, on change de page pour se rendre sur le menu que propose ce dernier. Il ??tait demand?? d'ajouter des animations CSS comme un petit effet de fondu pour l'arriv??e des diff??rents plats ou encore de manipuler des pseudos-class comme :checked pour lancer une animation quand lorsque l'on s??lectionne un plat(image suivante). Pour conclure, nous devions cr??er un spinner pour lancer une animation d??s qu'un utilisateur lance l'application. Pour cela, l'animation devait ??tre performante et fluide. Gr??ce ?? l'onglet performance de la console, il est possible de capturer les animations pour les analyser. On peut voir la fluidit?? de notre animation , comme le frame rate, dans l'id??al une animation qui fait 60 images par seconde est recommand??e. Nous pouvons voir ??galement le calcul de layout ou encore de painting qui sont co??teux en ressources. En r??gle g??n??rale, la propri??t?? transform est id??ale pour bouger les ??l??ments et opacity pour r??duire le painting",
		skillWorked: ["HTML", "CSS", "Sass", "Animation CSS", "Git"],
		github: "https://github.com/Chris5477/PetitcolasChristopher_3_07-04-2021",
	},
	{
		id: 3,
		title: "Game on",
		description: "Cr??er une landing page avec Javascript.",
		illustrations: [logoGameOn, GameOn, GameOn2],
		article:
			"Le but de ce projet ??tait de revoir le formulaire afin de corriger les nombreux bugs pr??sents et d'ajouter une validation des donn??es pour s'assurer que tout se passe correctement. Un syst??me d'issue sur Github nous permet de nous indiquer les diff??rentes t??ches ?? effectuer pour accomplir cette mission (image suivante). Dans un premier temps, nous devions forker un dossier existant sur github, afin de pouvoir travailler sur une copie du dossier. Puis, j'ai d?? travailler le HTML et le CSS afin de corriger les erreurs du c??t?? HTML pour respecter les normes W3C et de relire le CSS pour retirer le code non utilis?? pour am??liorer les performances. Cette ??tape ??tait importante, car cela nous apprend ?? lire du code ??crit d'une mani??re diff??rente que le n??tre. Nous serons toujours confront??s ?? cet exercice quand on int??gre une entreprise (image suivante). Pour la partie formulaire, nous devions reprendre un script existant afin d'ajouter une validation formulaire. Pour r??ussir cette validation, j'ai appris ?? manipuler le DOM pour pouvoir cibler les ??l??ments HTML. Cr??er et convertir des fonctions en ES6, via des fonctions fl??ch??es ou encore utiliser les structures conditionnelles, avec l'aide des regex.  Les regex ou encore expression r??guli??re, est un code interpr??table par la majorit?? des langages de programmation afin de pouvoir agir en fonction de celle-ci, pour v??rifier par exemple, si tout les champs du formulaire sont remplis afin d'envoyer les donn??es. ",
		skillWorked: ["HTML", "CSS", "Javascript", "Regex", "Git"],
		github: "https://github.com/Chris5477/GameOn-website-FR",
	},
	{
		id: 4,
		title: "FishEye",
		description:
			"FishEye est un site web qui permet aux photographes ind??pendants de pr??senter leurs meilleurs travaux.",
		illustrations: [logoFishEye, FishEye, FishEye2, FishEye3, FishEye4],
		article:
			"Dans ce projet, je devais apprendre des notions d'accessibilit?? pour rendre mon site utilisable au clavier ou encore lisible par les lecteurs d'??cran. Ce qui nous oblige ?? r??fl??chir sur l'utilisation du site. Par exemple, il faut penser ?? respecter les contrastes entre la couleur du texte et son fond, ou encore apporter une attention importante au respect des normes W3C et des balises s??mantique HTML pour que le navigateur puisse comprendre le r??le de chaque ??l??ment et ainsi rendre notre site interpr??table par les lecteurs d'??cran. Il faut aussi essayer de garder une certaine coh??rence de la structure du site pour ??viter de demander des efforts aux utilisateurs ayant des probl??mes de concentration, ou encore de penser aux personnes ??tant touch??es par des handicaps affectant leur motricit??. Pour ce cas-l??, il est pr??f??rable de cr??er des grandes zones cliquable par exemple pour rendre la rendre plus accessible (image suivante). Pour la page d'accueil , il ??tait demand?? de voir tous les photographes ainsi que leurs informations et de pouvoir acc??der ?? leurs travaux en cliquant sur dessus. Il y avait ??galement un syst??me de filtrage des photographes avec des tags pour pouvoir afficher uniquement les photographes qui nous int??resse. Pour parvenir a afficher les photographes, nous avions ?? disposition, un fichier JSON pour r??cup??rer les donn??es de chacun d'entre eux (image 3 et 4). Voici la page d'un des photographes, nous pouvons y voir des informations sur lui, et la possibilit?? de pouvoir le contacter via un formulaire. Puis la partie des travaux. Un syst??me de like est pr??sent. Les travaux peuvent ??tre des images ou encore des vid??os. Pour les vid??os, il y a un syst??me de sous-titre qui permet de d??crire les vid??os pour les mal-entendant et d'augmenter les fonctionnalit??s d'accessibilit?? (image suivante). Quand on clique sur un m??dia, un lightbox est affich?? pour pourvoir naviguer avec la souris en cliquant sur les boutons, ou encore le clavier pour les utilisateurs ayant des probl??mes de motricit??. Le site ?? ??galement une version mobile, avec une mise en page diff??rente. ",
		skillWorked: ["HTML", "CSS", "JSON", "Javascript"],
		github: "https://github.com/Chris5477/PetitcolasChristopher_6_19-05-2021",
	},
	{
		id: 5,
		title: "Les petits plats",
		description: "Comprendre et cr??er un algorithme de recherche.",
		illustrations: [logoPlats, plats, plats2, plats3],
		article:
			"L'objectif de ce projet est de travailler sur deux algorithmes diff??rents pour faire la m??me t??che afin de comparer lequel des deux est le plus performant (image suivante). Pour cela, j'ai cr???? un algorithme ant??rieur ?? l'ES6 et l'autre utilisant les am??liorations ES6. Il s'av??re que l'ES6 apporte de meilleure performance (image suivante). Pour les algorithmes, nous avons deux fa??ons de faire une recherche, le premier avec le champ principal qui va filtrer toutes les recettes restante et afficher les recettes qui correspondent au mot saisi par l'utilisateur, ou par le biais des inputs secondaires pour rechercher par ingr??dients ou appareils, Lors du remplisage d'un input secondaire, dans ce cas, ingr??dients. Alors une liste d'ingr??dients s'affiche, en fonction du mot saisi par l'utilisateur, des ingr??dients pr??sent dans le fichier JSON contenant l'int??gralit?? des recettes(image suivante). Quand l'utilisateur clique sur l'??l??ment souhait?? dans la liste, cela affiche un tag et affiche uniquement les recettes contenant l'ingr??dient s??lectionn??, si nous ajoutons un ??l??ment dans le champ principal, un autre filtrage s'effectue",

		skillWorked: ["HTML", "CSS", "Javascript", "JSON"],
		github: "https://github.com/Chris5477/PetitcolasChristopher-7-14-06-2021",
	},
	{
		id: 6,
		title: "Billed",
		description: "Tester un syst??me SaaS avec Jest.",
		illustrations: [logoBilled, billed2, billed, billed3, billed4, billed5],
		article:
			"Billed est une application SasS ?? une entreprise de pouvoir g??rer les notes de frais des employ??s. Il y a un espace pour les employ??s pour qu'ils puissent r??diger leurs notes de frais et une partie RH pour les consulter, les accepter ou les refuser(image suivante). Si un employ?? se connecte avec ses identifiants, il sera redirig?? sur son compte et va pouvoir visualiser l'ensemble de ses notes de frais (image suivante). Il peut ??galement en cr??e une avec le bouton d??di?? (image suivante). Voici la partie RH, ou l'ensemble des notes de frais envoy??s par les employ??s de l'entreprise est consultable. Il est possible de consulter chaque note de frais et d'agir en fonction de la pertinence de chacune d'entre elles. Comme j'ai pu le pr??ciser pr??c??demment, le but de ce projet ??tait d'int??grer des tests avec le runner de test Jest (image suivante). Le but des tests est d'automatiser les v??rifications du code et s'assurer que tout fonctionne ou non, et si des tests ne passent pas, alors sans chercher, nous savons o?? se trouve le probl??me et quel bloc de code pose probl??me. De mani??re g??n??rale, lorsqu'on r??dige un test on s'assure de sa pertinence, en essayant un cas qui doit marcher et un qui doit ??chouer. Jest permet aussi de savoir le taux de couverture des tests, le coverage montre le pourcentage global d'un fichier test?? . Le nombre de tests est ??galement indiqu?? un peu plus bas. Pour tester un fichier, nous pouvons cibler une partie ?? tester, ce que l'on appelle un test unitaire. Ou alors de r??aliser des tests d'int??gration, en simulant des actions utilisateurs comme le clique sur un bouton ou encore le remplissage d'un champs de formulaire.",

		skillWorked: ["Javascript", "Jest"],
		github: "https://github.com/Chris5477/Billed-app-FR",
	},
	{
		id: 7,
		title: "Learn at home",
		description: "D??finir les besoins pour une app de soutien scolaire.",
		illustrations: [logolearnAtHome, learnAtHome5, learnAtHome6, learnAtHome3, learnAtHome, learnAtHome2, learnAtHome4],
		article:
			"Le but de ce projet est de nous donner le r??le de lead d??veloppeur sur un projet utilisant les m??thodes agiles et d??finir les besoins du projet. En r??gle g??n??rale, lors d'un entretien avec le client, on fait en sorte de poser un maximum de questions afin d'??tre s??r de comprendre les besoins de celui-ci, et les questions doivent aussi s'orienter sur les utilisateurs potentiels du client. Il important d'imager chaque besoin ou fonctionnalit?? afin d'??tre s??r que les t??ches soient bien comprises par les ??quipiers (image suivante). Il y a les personnas, qui permettent de mettre un visage et de d??crire chaque type d'utilisateurs et d'inventer une petite histoire qui r??sume l'utilit?? de l'application pour chacun d'entre eux (image suivante). Nous avons aussi le story-boards pour rendre concret l'objectif du projet. Pas besoin d'??tre un grand dessinateur, il faut juste que la BD soit compr??hensible. G??n??ralement fait sous forme de BD. Il y a aussi les users stories, souvent associ??s a des outils comme kanban ou Trello (image 5). Elles permettent, par le biais d'une simple phrase courte et claire, de comprendre le but d'une fonctionnalit??. Par exemple, pour ajouter une t??che sur un calendrier, la user Story donnerait en tant qu'utilisateur, j'aimerais pouvoir ajouter un rendez-vous sur un calendrier pour ne pas l'oublier (image 3 et 4). Il y aussi Figma. Figma est un outil qui va nous permettre de cr??er des maquettes. Ce qui est pratique pour obtenir un visuel sur des esquisses. Nous pouvons m??me cr??er des composants r??utilisables pour dupliquer des ??l??ments facilement, offrant ainsi un confort d'utilisation. Cet outil offre la possibilit?? de pouvoir afficher les r??gles CSS comme les couleurs, la police utilis??e ainsi que la taille de celle-ci. Il est m??me possible de les copier pour gagner du temps (image suivante). Dernier outil du projet, le diagramme ULM. Ce diagramme permet de sch??matiser les fonctionnalit??s ainsi que les acteurs de celles-ci. Nous pouvons voir les acteurs qui sont situ??s aux extr??mit??s du diagramme. Nous pouvons voir au milieu un rectangle aux bords noir. ?? l'int??rieur, on y place le syst??me avec chaque fonctionnalit?? et ce qui r??sulte de celles-ci.",

		skillWorked: ["M??thodologie agile", "Figma", "Personna", "user story", "Diagramme ULM", "Trello"],
		github: "Aucun repository github.",
	},
	{
		id: 8,
		title: "Kasa",
		description: "Cr??er un site web d'une agence de voyage.",
		illustrations: [logoKasa, kasa, kasa2, kasa3],
		article:
			"Kasa est une application qui permet ?? des particuliers de mettre en location leur bien immobilier. Pour chaque annonce, on peut voir les photos, la location, les atouts, la description ou encore le propri??taire ainsi que la note du bien. Pour le d??veloppement de ce projet (image suivante), j'ai utilis?? React, avec des composants de type class. Contrairement aux sites classiques. Lors de la requ??te au serveur, React demande lui demande de r??cup??rer l'int??gralit?? de l'application. Cela permet de b??n??ficier d'une application SPA (single-page), c'est-??-dire qu'il n'y a aucun rechargement de page quand on clique sur des liens. Pour g??rer cette navigation, on fait appel aux routers pour cr??er des routes et assurer le redirection de l'utilisateur sur les bonnes pages (image suivante). React fonctionne sur un syst??me de composant r??utilisable ??crit avec un format sp??cial, le JSX. Le JSX est un parfait m??lange entre du HTML et du Javascript. Pour faire simple un composant s'??crit comme une balise HTML dans laquelle nous pouvons placer des props, Les props sont similaires ?? des param??tres dans des fonctions pour pouvoir reutiliser des composants dans d'autres circonstances. Si nous avons besoin de logique dans notre composant, on peut injecter du JavaScript qui est mi entre accolades. Les composants ont un cycle de vie qui se compose de trois phases. La phase de montage, React s'occupe de cr??er un DOM virtuel. Il va d'abord lire l'??tat local des composants (les donn??es qui sont propres au composant) et la structure du composant avant de rendre le DOM et d'afficher les composants. La phase de mise ?? jour. Quand l'??tat local change, dans cette condition cela va relancer la phase de montage en prenant compte des donn??es qui ont chang??es. Puis la phase de d??montage. Cette phase supprime tout simplement un composant s'il n'est plus pr??sent dans le DOM lib??rant ainsi de la m??moire. Grace au router, nous pouvons naviguer ?? l'int??rieur de notre application. En effet, au moment du clique sur le lien, la page s'est directement affich??e. Nous pouvons afficher toutes les informations relatives ?? une annonce immobili??re. Toutes ces donn??es sont contenues dans un fichier JSON (image suivante). Pour r??cup??rer les annonces d'une annonce particuli??re, nous pla??ons dans la route, un param??tre id qui nous v??rifions au moment du chargement de la page (image suivante). Ici, je vais ??voquer la gestion d'??tat local et d'??v??nement pour la page ?? propos. Pour les ??v??nements, on injecte directement les ??v??nements dans les ??l??ments HTML. Pour d??terminer si on affiche la totalit?? du bloc. On peut initialiser un state avec un boolean (false). Puis afficher le texte suppl??mentaire si cette valeur passe ?? true. Dans la fonction, on utilise la m??thode setState pour modifier la valeur de notre booleen et ainsi forcer le composant ?? se recharger et d'afficher le texte.",
		skillWorked: ["React", "JSX", "Cycle de vie"],
		github: "https://github.com/Chris5477/Petitcolaschristopher_11_20-09-2021",
	},
	{
		id: 9,
		title: "Sportsee",
		description: "D??veloppez un tableau de bord d'analytics avec React.",
		objectif: "Cr??er une nouvelle version de la page de profil et assurer un suivi des s??ances sportive",
		illustrations: [logoSportsee, sportSee, sportSee2, sportSee3],
		article:
			"SportSee est une application web qui va permettre aux utilisateurs de pouvoir b??n??ficier d'un suivi de leur activit?? sportive. Dans les projets pr??c??dents, j'ai ??t?? confront?? ?? un probl??me. Le passage de donn??es avec les props. Un des probl??mes avec le syst??me de composant et que nous devons faire en sorte d'essayer de placer les donn??es dans le composant le plus haut afin de rendre les donn??es disponibles dans l'ensemble de l'application. Mais cette pratique impose de placer ces donn??es en tant que props et de faire ??a jusqu'au composant souhait??, on appelle ??a le Prop Drilling. C'est l?? qu'intervient le state manager Redux (image suivante). Redux va nous permettre de rendre les donn??es disponibles dans l'ensemble de l'application gr??ce ?? un store. Plus besoin de placer les donn??es dans le composant le plus haut et de faire du Prop Drilling. Le syst??me du store va nous permettre de stocker les donn??es et de pouvoir agir dessus. En effet, on a besoin d'action et de reducer pour cr??er un store. Les actions sont g??n??ralement cr????es dans des fonctions. Ces fonctions retournent des objets avec un type qui contient une cha??ne de caract??re expliquant le but de l'action (INCREMENT par exemple). Puis nous devons avoir un reducer qui va prendre 2 param??tres, un state initial et notre fameuse action. Le contenu du reducer va tout simplement v??rifier quel type d'action est utilis?? et appliqu?? la modification du state. Enfin, on utilise ce store pour cr??er notre store, qui viendra englober notre application via un provider qui aura le store comme valeur. Nous avons plusieurs m??thodes pour r??cup??rer notre state et celle que j'ai utilis?? est useSelector. Cette m??thode r??cup??re l'??tat local et le rend utilisable dans le composant. Dans ce cas d'utilisation, j'ai utilis?? Redux pour g??rer les appels API. Mon store va donc contenir les donn??es que j'ai besoin (image suivante). Sachant qu'un appel API est une promesse et va mettre un certain temps pour se r??soudre. Sur l'image, j'ai fait un loader, qui va s'afficher tant que nous n'avons pas obtenu les donn??es (image suivante). Une fois les donn??es r??cup??r??es, nous les affichons pour l'utilisateur. L'utilisateur dispose ??galement de graphiques pour visualiser rapidement son ??volution sportive. La libraire Recharts m'a permis de g??n??rer ses graphiques. La documentation de Recharts est plut??t bien ??crite et m'a permis de cr??er les graphiques assez simplement (image suivante). Pour terminer, j'ai ??galement utilis?? les propTypes pour s??curiser les props et ??tre s??r d'avoir le bon type de valeur retourn??. Enfin, afin de rendre mon travail compr??hensible par d'autres, j'ai d?? apprendre ?? r??aliser une documentation. J'ai utilis?? le markdown dans le fichier Readme pour expliquer comment installer et utiliser l'application. Des exemples sont pr??sents pour ??tre le plus complet. J'ai ??galement utilis?? la JS Doc avec des cartouches ou commentaires dans mon code.",
		skillWorked: ["React", "JSX", "Hook", "Redux", "Recharts", "PropTypes", "Markdown"],
		github: "https://github.com/Chris5477/PetitcolasChristopher_12_11-10-2021",
	},
	{
		id: 10,
		title: "ArgentBank",
		description: "Cr??er une appication banciare avec une API.",
		illustrations: [logoArgentBank, argentBank, argentBank2, argentBank3, argentBank4],
		article:
			"Argent Bank est un nouvel acteur qui essaye de s'imposer dans le secteur bancaire. Pour la r??alisation de ce projet, L'??quipe back-end a travaill?? sur une API qui est mise ?? notre disposition. Nous devions installer MongoDB pour collecter une banque de donn??es et de pouvoir les manipuler (image suivante). Nous avons la page d'accueil, elle ne poss??de pas grand-chose ormis un menu de navigation dynamique, c'est-??-dire qui s'adapte si l'utilisateur ?? une session de connection active. Autrefois pour g??rer les sessions utilisateurs on utiliser les cookies. Les tokens (jeton d'authentification) remplacent petit ?? petit les cookies, car il lib??re de la m??moire sur les serveurs. Quand l'utilisateur s'authentifie, les serveurs lui retourne un token qui va lui servir d'autorisation pour faire des requ??tes comme modifier son nom par exemple (image suivante). Nous avons ici le formulaire qui va s'occuper de v??rifier l'email saisit est pr??sente dans notre base de donn??es. Si c'est le cas on v??rifie le password associ??. Si tout est valid??, alors le serveur nous retourne une jeton token pour authentifier l'utilisateur et le retourne sur son compte. Les authentifications sont r??alises avec des op??rations basiques appartenant aux API (CRUD), les m??thodes POST et GET. Sachant que l'API n'est pas de la m??me origine que l'application. Il a fallu ??galement g??rer les probl??mes de CORS pour que les requ??tes soit accept??es. Une fois l'authentification termin??e, l'utilisateur est redirig?? sur son compte (image suivante). Cette page affiche les donn??es relatives ?? l'utilisateur et un bouton pour modifier ses informations de compte. Nous pouvons voir que le header prend en compte la session utilisateur, le token est placer dans le localStorage et n'a donc plus besoin de se loguer tant que le token est pr??sent dans le local storage, le token est supprim?? que si l'utilisateur se d??connecte avec le bouton d??di?? (image suivante). Si l'utilisateur clique sur le bouton, alors il aura la possibilit?? de pouvoir changer ses informations de comptes, comme son nom ou pr??nom et modifi?? directement la base de donn??es pour conserver ces changements. La m??thode API utilis??e est PUT.",
		skillWorked: ["React", "Redux", "MongoDB", "API", "CRUD", "Markdown"],
		github: "https://github.com/Chris5477/argent-bank",
	},
	{
		id: 11,
		title: "HRnet",
		description: "HRNET permet ?? une entreprise de pouvoir recenser tout ses employ??s",
		illustrations: [logoCompany, hrnet, hrnet4, hrnet2, hrnet3],
		article:
			"HRNET est une application qui permet ?? une application de pouvoir lister ses employ??s. Le code initial de l'application est en Jquery et retourne des probl??mes de performances et les utilisateurs remontent beaucoup de bugs. Le but de ce dernier projet est donc de convertir le code existant en React. Nous devions coder les diff??rentes pages de l'application en React ainsi que les plugins Jquery (image suivante). Pour les pages, j'ai utilis?? des composants de type fonctions avec l'aide de Redux pour g??rer les donn??es au sein de l'application (image suivante). J'ai ??galement utilis?? Redux-persist pour pouvoir stocker les donn??es dans le local storage. Une particularit?? exig??e, la cr??ation d'un package NPM de l'un de ces plugins Jquery et de l'installer en tant que d??pendance au sein du projet. J'ai d??cid?? de faire le menu d??roulant pour le package. C'est un ??l??ment HTML select classique avec des options. Pour publier sur NPM, il suffit de se cr??er un compte sur NPM. de s'authentifier, de pousser le travail et d'ajouter la version du package. Chaque ??tape est bien d??crite. Il reste plus qu'a installer le package avec npm install dans notre projet (image suivante). Il y avait le plugin d'une fen??tre modale. Pour ce faire avec React, il suffit de cr??er un portal qui va nous ermettre de sortir de notre conteneur HTML pour cibler son body. L'int??r??t de faire un portal est pouvoir positionner de mani??re absolue notre fenetre modale en fonction des dimensions du body et s'arrurer qu'elle s'affiche correctement. En effet, si notre composant App, qui contient toute notre application, prend la moiti?? de la fenetre du navigateur. Alors notre modal se basera sur ces dimensions (image suivante). Dernier plugin demand??, un calendrier pour s??lectionner des dates sur les inputs concern??s Quand je focus l'un de ces inputs, un calendrier va s'afficher. J'ai cr???? un composant dans lequel j'utilise l'Objet Date pour manipuler les dates. Quand toutes les donn??es du formulaire sont remplies, la modale nous informe que l'employ?? est bien cr??er. Enfin pour finir, Nous devons cr??er des tests d'int??grations et unitaires (image suivante). Sur la deuxi??me page, nous r??cup??rons la liste de tous les employ??s. Je r??cup??re les donn??es gr??ce au store de Redux pour pouvoir les manipuler. Sur cette page, il est possible de faire une recherche pour trouver un nom ou d??partement. Il est possible de trier les donn??es en cliquant sur ce qu'on veut trier ou encore de pouvoir afficher le nombre d'employ??s ?? afficher. Une pagination est ??galement pr??sente en fonction du nombre d'employ??s.",
		skillWorked: ["React", "NPM", "Redux"],
		github: "https://github.com/Chris5477/HRnet",
	},
	{
		id: 12,
		title: "Cover letter generator",
		description: "Cr??er des lettres de motivation rapidement ",
		illustrations: [logoCLG, coverLetter1, coverLetter2, coverLetter3, coverLetter4, coverLetter5, coverLetter6, coverLetter7, coverLetter8],
		article: `Le but de ce projet est de cr??er des lettres de motivation rapidement et adapt??es aux annonces. J'ai d??cid?? de me lancer dans ce projet pour me faire gagner du temps et de pouvoir aider les personnes en recherche d'emploi sur Linkedin. J'ai eu la volont?? d'en savoir plus sur la partie back-end avec Node alors j'ai cr???? une partie Back-end et une base de donn??es avec MongoDb pour cr??er des comptes utilisateurs. Nous pouvons cr??er un compte afin de pouvoir conserver les donn??es (page2). Nous pouvons voir sur Robot 3T que la donn??e est bien pousser vers notre base de donn??es. Les mots de passe sont hash??s pour la s??curit?? (page 3). Une fois authentifi??, nous pouvons ajouter une nouvelle carte via un formulaire et d??finir son type. Un code couleur lui sera alors donn??e et elle sera rang?? dans un espace pour gagner du temps pour la conception de la lettre de motivation (image 4). Il est possible de visualiser le contenu de la carte en la survolant (image 5). Lors du clique, on rempli la lettre du contenu de la carte (image 6). Nous avons la possibilit?? de modifier la lettre comme mettre des sauts de ligne ou encore copi?? son contenu via un bouton copier (image 7). Notre lettre de motivation est cr????e en quelques secondes et est donc pr??te ?? ??tre envoy??e. Il est possible de se d??connecter en supprimant le token re??u par le serveur pour ne plus ??tre authentifi?? en allant sur l'application. Enfin, pour finir, il est ??galement possible de supprimer son compte (image 8). Chaque action comme ajouter une donn??e ou encore supprimer son compte doit ??tre authentifi?? par token pour assurer la s??curit?? des requ??tes.`,
		skillWorked: ["React", "Redux", "Node", "MongoDB", "Express"],
		github: "https://github.com/Chris5477/cover-letter",
	},
];
