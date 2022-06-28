var i=0;
var somme=0;
var moyenne=0;
var nb_notes=0;
var prenoms="";
var statut="";
var absent;
var présent;
var retard;

prenoms=prompt("Entrez le prenom", "Prenom");
document.write(prenoms);
document.write("</br></br>")
nb_notes=prompt("Combien de note souhaitez-vous saisir ?","Nb de Notes");
nb_notes=parseInt(nb_notes);
notes = new Array(nb_notes);
for(i=1;i<=nb_notes;i++)
{
    note_i=prompt("Entrez la note");
    notes[i-1]=parseInt(note_i);
    somme+=notes[i-1];
}
moyenne=(somme/nb_notes);
document.write("Notes : ", notes, "</br></br>");
document.write("La moyenne de l'élève est de : "+moyenne.toFixed(2), "/20");

document.write("</br></br>");

if (moyenne < 10) {
document.write("vous n'avez pas la moyenne, revenez l'an prochain!");
}

else if (moyenne >= 10 && moyenne < 13){
    document.write("vous êtes admis, Félicitations! ");
    document.write("</br></br>");
    document.write("mention assez bien");
}

else if (moyenne >= 13 && moyenne < 16){
    document.write("vous êtes admis, Félicitations! ");
    document.write("</br></br>");
    document.write("mention bien");
}

else if (moyenne >= 16) {
    document.write("vous êtes admis, Félicitations! ");
    document.write("</br></br>");
    document.write("mention très bien");
    
}


document.write("</br></br>");

statut=prompt("Entrez le statut", "statut");

document.write("</br></br>");

switch (statut) {
 
    case "absent" : document.write("élève absent");
    break;

    case "présent" : document.write("élève présent");
    break;

    case "retard" : document.write("élève est arrivé en retard");
    break;
};