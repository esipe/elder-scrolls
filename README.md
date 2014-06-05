
**Découvrir en live : http://esipe.geonef.fr/elder-scrolls/**

Cette carte est la reproduction de celles des jeux "The Elders Scrolls IV & V (Oblivion et Skyrim) Elle les situe par rapport à l'ensemble des jeux The Elders Scrolls en détaillant surtout le 4ème et le 5ème. Grâce à cette carte, vous pouvez visualiser les emplacements de plusieurs endroits importants des deux jeux ainsi que les types de terrains (eaux,forêts,montagnes, neige).


Visualiser en WMS sous QGIS
---------------------------

...ou tout autre [client WMS](http://fr.wikipedia.org/wiki/Web_Map_Service).
Procédure pour [QGIS](http://www.qgis.org/) :

 * *Couche* -> *Ajouter une couche WMS*
 * cliquer sur *Nouveau* pour ajouter ce serveur WMS :
   * Nom : *elder-scrolls* (ou autre)
   * URL : *http://mapserver.esipe.geonef.fr/elder-scrolls/map?*
 * cliquer *OK* puis de retour à la fenêtre précédente, cliquer en bas sur *Ajouter* puis *Fermer*
 * c'est prêt : la couche devrait apparaître sous quelques secondes, navigable évidemment. Enjoy!


Installation
------------
Le [tutoriel du cours](http://www.geonef.fr/doc/cours/mapserver-et-wms/installation-systeme)
vous guide dans la mise en place de l'environnement sur une machine virtuelle
VirtualBox, donc utilisable depuis Windows, Mac ou Linux.

La machine installée est une *Debian GNU/Linux* exploitant
*MapServer* en FastCGI derrière le serveur HTTP *Nginx*.

Il est bien-sûr possible d'utiliser d'autres environnements comme par
exemple Apache sur Windows.

Après avoir cloné localement ce dépôt Git, il faut récupérer l'archive :
http://esipe.geonef.fr/elder-scrolls/extra-data.tar.bz2
et la désarchiver dans le même dossier, en faisant :
```
curl http://esipe.geonef.fr/elder-scrolls/extra-data.tar.bz2 | tar xjv
```


Auteurs
-------

Projet réalisé par Rémy Lallemand <rlalle01@etudiant.univ-mlv.fr>,
étudiant IG2 de
[l'École Supérieure D'Ingénieurs de l'Université Paris-Est Marne-la-Vallée (ESIPE)](http://esipe.u-pem.fr/),
dans le cadre du cours *[Serveurs cartographiques](http://www.geonef.fr/doc/cours/mapserver-et-wms/)*.


Licence
-------

Les fichiers présents dans ce dépôt sont distribués sous les termes de
la licence CeCILL 2.1 contenue dans le fichier [LICENSE](LICENSE) et dont l'original
est disponible à l'URL http://www.cecill.info/licences/Licence_CeCILL_V2.1-fr.html
