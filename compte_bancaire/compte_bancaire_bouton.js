var retrait;
var crédit = 0;
var solde = 600;
var code = 1608;
var reponse;
var dépôt;
var menu = "";
var crédit_voiture = 4000;
var crédit_maison = 154000;
var remboursement;
var remboursement_restant;
var rib = "";
var menu;



var code = prompt("veuillez taper votre code");

while (code != 1608) {
    alert("ERREUR CODE INCORRECT!")
    var code = prompt("veuillez réessayer")

};


    



function compte(solde) {
    var solde = 600;
    document.write("votre solde est de: ");
    document.write(solde);
    document.write(" € ");
    
    
};


function retrait(retrait) {
    var solde = 600
    document.write("votre solde est de: ");
    document.write(solde);
    document.write(" € ");
    document.write("</br></br>");
    document.write("Combien souhaitez-vous retirer?");
    document.write("</br></br>");
    var retrait = prompt("Combien souhaitez-vous retirer?");
    document.write("vous allez retirer ");
    document.write(retrait);
    document.write(" € ");
    document.write("</br></br>");
    if (retrait > solde) {
        alert("Attention votre solde est insuffisant")
        document.write("</br></br>")
    };
    var solde = (solde - retrait);
    document.write("votre solde sera de: ");
    document.write(solde);
    document.write(" € ");
    document.write("</br></br>");
};


function a(crédit) {

    
    var crédit_voiture = 4000;
    var crédit_maison = 154000;
    var remboursement;
    var remboursement_restant;
    alert(crédit_maison + crédit_voiture)
    document.write("vous avez actuellement ");
    var crédit = (crédit_maison + crédit_voiture);
    document.write(crédit);
    document.write(" € ");
    document.write("de crédit ");
    document.write("</br></br>");
    document.write("combien souhaitez-vous rembourser? ");
    var remboursement = prompt("combien souhaitez-vous rembourser?");
    document.write("</br></br>");
    document.write("vous avez remboursé ");
    document.write(remboursement);
    document.write(" € ");
    document.write("</br></br>");
    document.write("il vous reste donc ");
    var remboursement_restant = (crédit - remboursement);
    document.write(remboursement_restant);
    document.write(" € ");
    document.write("a remboursé ");
   
};

function dépôt(dépôt) {
    var solde = 600;

    alert("votre solde est de: ");
    alert(solde);
    document.write("votre solde est de: ");
    document.write(solde);
    document.write(" € ");
    document.write("</br></br>");
    document.write("combien voulez-vous déposer sur votre compte? ");
    document.write("</br></br>");
    var dépôt = prompt("combien voulez-vous déposer sur votre compte? ");
    document.write("</br></br>");
    document.write("vous avez deposer ");
    document.write(dépôt);
    document.write(" € ");
    document.write("sur votre compte ");
    document.write("</br></br>");
    var solde = (parseInt(solde) + parseInt(dépôt));
    document.write("votre solde est maintenant de: ");
    document.write (solde);
    document.write(" € ");
};

function relevé(rib) {
    var rib = "";
    var rib = prompt("voulez-vous imprimer un rib? ")
    document.write("voulez-vous imprimer un rib? ")
    document.write("</br></br>");
   
    switch (rib) {

case "oui":
    document.write("rib en cours d'impression... ")
    break;
    
case "non":
    alert("bonne journée à bientôt! ")
}
function retour(reset) {
    
}
}




