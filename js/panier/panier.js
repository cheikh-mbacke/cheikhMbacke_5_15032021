//vérifier si des produits sont ajoutés au panier d'achat
  if (sessionStorage.getItem('products') !== null) {
   
    let arrayCart = JSON.parse(sessionStorage.getItem('products'));

    for(let product of arrayCart){
        fetch("http://localhost:3000/api/cameras/" +product.id)
        .then(response => response.json())
        .then(response => {

            createProductCart(response);

    
        })
        .catch(error => alert("Erreur : " + error));
    }

    //Code HTML de la partie "confirmer la commande"
    let divLivraison = document.createElement('div');
    let divPrice = document.createElement('div');
    let divConfirmer = document.createElement('div');
    
    divLivraison.setAttribute("class", "d-flex mb-3");
    let h5DivLivraison = document.createElement('h5');
    h5DivLivraison.setAttribute("class", "me-5");
    h5DivLivraison.appendChild(document.createTextNode("Frais de Livraison"));
    let divLivraisonStrong = document.createElement('strong');
    divLivraisonStrong.appendChild(document.createTextNode("Gratuit"));
    divLivraison.appendChild(h5DivLivraison);
    divLivraison.appendChild(divLivraisonStrong);
    document.getElementById("finalisation").appendChild(divLivraison);

    let h6DivPrice = document.createElement('h6');
    h6DivPrice.setAttribute("id", "prixTotal");

    //Formatez le prix total puis insérez-le dans la page
    let prixTotal = priceFormat(sessionStorage.getItem('prixTotal'));
    h6DivPrice.appendChild(document.createTextNode("TOTAL (TTC) : "+prixTotal));
    divPrice.appendChild(h6DivPrice);
    document.getElementById("finalisation").appendChild(divPrice);
    let divConfirmerDiv = document.createElement('div');
    divConfirmerDiv.setAttribute("class", "col-auto");
    let divConfirmerDivDiv = document.createElement('div');
    divConfirmerDivDiv.setAttribute("class", "btn btn-submit mb-3");
    divConfirmerDivDiv.addEventListener("click", () =>{
        document.getElementById('form').style.display = "block";
    })
    divConfirmerDivDiv.appendChild(document.createTextNode("Confirmer"));
    divConfirmerDiv.appendChild(divConfirmerDivDiv);
    divConfirmer.appendChild(divConfirmerDiv);
    document.getElementById("finalisation").appendChild(divConfirmer);

}

else{
    document.getElementById('finalisation').innerHTML = '<h2 class="text-center" id="panierVide">Votre panier est vide</h2>';
}
