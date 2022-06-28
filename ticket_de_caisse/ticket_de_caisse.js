var totalht;
var tva;
var totalttc;
var prix_plat;
var prix_boisson;
var prix_supplément; 
var stock_boisson = 5;
var stock_plat = 4;
var stock_supplément = 4;
var quantité_boisson;
var quantité_plat;
var quantité_supplément;
var stock_restant_boisson;
var stock_restant_plat;
var stock_restant_supplément; 

//BOISSON
var prix_boisson = prompt("prix boisson");
document.write ("le prix de votre boisson est de: ");
document.write (prix_boisson);
document.write (" € ");
document.write ("</br></br>");
document.write ("la quantité de boisson est de: ");
var quantité_boisson = prompt("quantité_boisson");
document.write (quantité_boisson);
document.write ("</br></br>");
 while (quantité_boisson > stock_boisson)
 {
    alert ("stock insuffisant");
    document.write ("</br></br>");
    document.write ("ERREUR ");
    document.write ("</br></br>");
document.write ("stock restant: ");
document.write (stock_boisson);
document.write ("</br></br>");
var quantité_boisson = prompt("quantité_boisson");
document.write ("la quantité de boisson est de: ");
document.write (quantité_boisson);
}
document.write ("</br></br>");
var prix_boisson = (prix_boisson * quantité_boisson);
document.write ("le prix de(s) boisson(s) est de: ");
document.write (prix_boisson);
document.write (" € ");
document.write ("</br></br>");
document.write ("</br></br>");

//PLAT
var prix_plat = prompt("prix_plat");
document.write ("le prix de votre plat est de: ");
document.write (prix_plat);
document.write (" € ");
document.write ("</br></br>");
document.write ("la quantité de plat est de: ");
var quantité_plat = prompt("quantité_plat");
document.write (quantité_plat);
document.write ("</br></br>");
 while (quantité_plat > stock_plat)
 {
    alert ("stock insuffisant");
    document.write ("</br></br>");
    document.write ("ERREUR");
    document.write ("</br></br>");
document.write ("stock restant: ");
document.write (stock_plat);
document.write ("</br></br>");
var quantité_plat = prompt("quantité_plat");
document.write ("la quantité de plat est de: ");
document.write (quantité_plat);
}
document.write ("</br></br>");
var prix_plat = (prix_plat * quantité_plat);
document.write("le prix de(s) plat(s) est de: ");
document.write (prix_plat);
document.write (" € ");
document.write ("</br></br>");
document.write ("</br></br>");

//SUPPLEMENT
var prix_supplément = prompt("prix_supplément");
document.write ("le prix de votre supplément est de: ");
document.write (prix_supplément);
document.write (" € ");
document.write ("</br></br>");
document.write ("la quantité de supplément est de: ");
var quantité_supplément = prompt("quantité_supplément");
document.write (quantité_supplément);
document.write ("</br></br>");
 while (quantité_supplément > stock_supplément)
 {
    alert ("stock insuffisant");
    document.write ("</br></br>");
    document.write ("ERREUR ");
    document.write ("</br></br>");
document.write ("stock restant: ");
document.write (stock_supplément);
document.write ("</br></br>");
var quantité_supplément = prompt("quantité_supplément");
document.write ("la quantité de supplément est de: ");
document.write (quantité_supplément);
}
document.write ("</br></br>");
var prix_supplément = (prix_supplément * quantité_supplément);
document.write("le prix de(s) supplément(s) est de: ");
document.write (prix_supplément);
document.write (" € ");
document.write ("</br></br>");

//TOTAUX
document.write ("---------------------------------------------------");
document.write ("</br></br>");
var totalht = (prix_boisson + prix_plat + prix_supplément);
document.write ("le total HT est de: ");
document.write (totalht);
document.write (" € ");
document.write ("</br></br>");
var tva= prompt ("entrer tva");
var totalttc = (totalht * parseFloat(tva));
document.write ("le total à payer est de: ");
document.write (totalttc.toFixed(2));
document.write (" € ");
document.write ("</br></br>");

//STOCK
document.write ("---------------------------------------------------");
document.write ("</br></br>");
var stock_restant_boisson = (stock_boisson - quantité_boisson);
document.write ("stock de boisson restant: ");
document.write (stock_restant_boisson);
document.write ("</br></br>");
var stock_restant_plat = (stock_plat - quantité_plat);
document.write ("stock de plat restant: ");
document.write (stock_restant_plat);
document.write ("</br></br>");
var stock_restant_supplément = (stock_supplément - quantité_supplément);
document.write ("stock de supplément restant: ");
document.write (stock_restant_supplément);
document.write ("</br></br>");
document.write ("---------------------------------------------------");
document.write ("</br></br>");
document.write ("BONNE JOURNEE ET A BIENTOT CHEZ SEBASTOPOL");
