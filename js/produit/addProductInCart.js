/*
- cette fonction permet d'ajouter un produit au panier
- productProductData: correspond aux données du produit, son nom, son identifiant, son prix, etc.
- idElem: c'est l'identifiant de l'élément html contenant le produit
*/

const addProductInCart = (productData, idElem) =>{

    let arrayCart = [];
    let isAdded = false;

    //Ajouter un produit si le panier est vide
    if (sessionStorage.getItem('products') === null)
    {
        arrayCart = [{value: document.getElementById(idElem).value, id: productData._id}]
        sessionStorage.setItem('products', JSON.stringify(arrayCart));
        sessionStorage.setItem('prixTotal', productData.price);
    }

    //Ajouter un produit si le panier n'est pas vide
    else
    {   
        arrayCart = JSON.parse(sessionStorage.getItem('products'));

        //Vérifier si le prdouit est déjà ajouté au panier ou pas
        for(let product of arrayCart)
        {
            if(product.id === productData._id){
                isAdded = true;
            }
        }

        //ajouter le produit au panier s'il ne l'est pas
        if(!isAdded)
        {
            arrayCart.push(({
                value: document.getElementById(idElem).value,
                id: productData._id
                }));
                sessionStorage.setItem('products', JSON.stringify(arrayCart));

            let prixActu =  parseFloat(sessionStorage.getItem('prixTotal')) + productData.price;
            sessionStorage.setItem('prixTotal', prixActu);

        }

    }

    //Aficher un message de notification en cas de succès ou de l'echec de l'ajout au panier
    displayMessage(isAdded);
    
}

const displayMessage = (isAdded) =>{

    modalElt = isProductAdded(isAdded);
    if(document.getElementById('modal') !== null)
    {
        document.getElementById("productsContainer").replaceChild(modalElt, document.getElementById('modal'))
    }
    else
    {
        document.getElementById("productsContainer").insertAdjacentElement('afterbegin', modalElt);
    }
}