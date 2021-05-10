//cette fonction permet de mettre à jour le prix d'un produit en fonction de la quantité définie par l'utilisateur.
const updatePrice = (data, newQuantity, lastQuantity) =>{

    //calculer la différence avec le prix envoyé précédemment
    let diffrence = (data.price) * (newQuantity - lastQuantity);

    //mettre à jour le prix total actuel
    let currentTotalPrice = parseFloat(sessionStorage.getItem('prixTotal'));
    let updatedTotalPrice = currentTotalPrice + diffrence;
    sessionStorage.setItem('prixTotal', updatedTotalPrice);

    //récupérer le nouveau prix et l'insérer dans la page
    let newProductPrice = (data.price) * (newQuantity);
    newProductPrice = priceFormat(newProductPrice);
    document.getElementById(data.name + "_" +data._id).textContent = newProductPrice;
    
    //récupérer le nouveau prix total et l'insérer dans la page
    updatedTotalPrice = priceFormat(updatedTotalPrice);
    document.getElementById('prixTotal').textContent = "TOTAL (TTC) : " + updatedTotalPrice;
}