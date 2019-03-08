Pour ajouter des photos dans le slider image, il faut:

    - 1 - Ajouter la photo au dossier /img avec un nom de type "photo_nomDeLaPhoto"
    - 2 - Créer une miniature, par exemple via paint, d'une taille 60*39
    - 3 - Enregistrer la minuiature dans le dossier /img/thumbs/ avec un nom de type "thumb_nomDeLaPhoto"
    - 4 - Ajouter les images dans le fichier /index.html > partie slider > reprendre un bloc <li> en adaptant les chemins d'accès aux fichiers et le nom de la photo dans la balise <span>
    
    - 5 - Modifier le fichier index.js > partie slider > changer valeur thumbItem au nouveau nombre de photos