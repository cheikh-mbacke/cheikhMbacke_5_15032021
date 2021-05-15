//récupérer l'identifiant de la commande et le pseudo utilisateur
const params = new URLSearchParams(window.location.search);
let idCommande = params.get('idCommande');
let pseudo = params.get('pseudo');

let prixTotal = priceFormat(sessionStorage.getItem('prixTotal'))
document.getElementById('prixToatl').textContent = prixTotal;

document.getElementById('numeroCommande').textContent = idCommande;
document.getElementById('pseudo').textContent ="merci " +pseudo+ ",";

//Vider le panier
sessionStorage.clear();
