//cela permet de supprimer des produits du panier
const deleteProduct = (data, productQuantity) =>{
    //supprimer le code html du produit de la page du panier
    document.getElementById('products').removeChild(document.getElementById(data._id));

    //supprimer le produit de la sessionStorage
    let arrayCart = JSON.parse(sessionStorage.getItem('products'));
    for (let product of arrayCart){
        if(product.id === data._id){
            arrayCart = arrayCart.filter(x => x !== product);
        }
    }
    sessionStorage.setItem('products', JSON.stringify(arrayCart)); 

    //Mettre à jour le prix total des produits achetés
    let currentPrice =  parseFloat(sessionStorage.getItem('prixTotal')) - (data.price * productQuantity);
    sessionStorage.setItem('prixTotal', currentPrice);

    //Mettre en forme le prix total mis à jour avant l'insertion dans la page
    currentPrice = priceFormat(sessionStorage.getItem('prixTotal'));
    document.getElementById('prixTotal').textContent = "TOTAL (TTC) : " + currentPrice;

    //Vider la sessionStorage si tous les produits sont supprimés du panier
    if(JSON.parse(sessionStorage.getItem('prixTotal')) == 0){
        sessionStorage.clear();
        document.location.reload();
    }
}
