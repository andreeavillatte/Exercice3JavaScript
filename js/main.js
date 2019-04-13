// J'ai declaré la variable lastName en  utilisant la commande prompt. La saisie qui est faite dans la boite de dialog me serve a stocker le prénom dans ma variable lastName. 
var lastName = prompt('Saisir votre prénom');
// je verifie ca la saisie était faite
// J'affiche le message en utilisant la commande alert et entre parantheses je mets entre simple cotes le mesagge suivi par + pour concatener mon message avec la variable  lastName
if (lastName) {
    alert('Bonjour, ' + lastName);
    // Si la saisie n'était pas faite je fais une alerte pour dire que la personne n'a pas introduit le prénom, et je remetts la boite de dialogue pour permettre la saisie du prénom et aussi je remetts l'alerte Bjr, prénom.
    // peut-etre plus tard on va apprendre a comment faire pour ne pas repéter la lignie 11 et 12
}else{
    alert('Vous n\'avez pas saisi votre prénom');
    var lastName = prompt('Saisir votre prénom');
    alert('Bonjour, ' + lastName);
}
// Toujours en javascript je mets ; a la fin de mes commandes
