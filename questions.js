var CreationTableauLangages = function () {
  // Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"
  var langages = ['Html', 'CSS', 'Java', 'PHP'];
  return langages;
}

var CreationTableauNombres = function () {
  //Créer un tableau "nombres" contenant les nombres de 0 à 5
    var nombres = [0,1,2,3,4,5];
    return nombres;
}

var RemplacementElement = function (langages) {
  //Remplacer le troisième élément du tableau par "Javascript"
  langages[2]='Javascript';
  return langages;
}

var AjoutElementLangages = function (langages) {
  // Ajouter "Ruby" et "Python" à la fin du tableau
  langages.push("Ruby","Python");

  return langages;
}

var AjoutElementNombres = function (nombres) {
  //  Ajouter "-2" et "-1" au début du tableau nombres
  nombres.unshift(-2,-1)
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  //Supprimer le premier élément du tableau langages
  langages.splice(0,1);
  return langages;
}

var SuppressionDernierElement = function (langages) {
  // Supprimer le dernier élément du tableau langages
  langages.pop()
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  // Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"
  var reseaux_sociaux = reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
  //Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule
  var langages = langages.join();
  return langages;
}

var TriTableau = function (reseaux_sociaux) {
  // Trier le tableau "reseaux_sociaux"
  var reseaux_sociaux = reseaux_sociaux.sort()
  return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
  // Bonus : Inverser le tableau "langages"
  var reseaux_sociaux = reseaux_sociaux.reverse()
  return reseaux_sociaux;
}
