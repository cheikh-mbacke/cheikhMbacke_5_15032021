//this function checks if the id of a product already exists or not in the sessionStorage
const productId_Exists = (id) =>{

    let response = null;

    if(sessionStorage.getItem('products') !== null)
    {
        let productList = sessionStorage.getItem('products').replace("undefined", "");
        productList = productList.split(' ');
        productList = productList.filter(x => x !== "");

        response = productList.includes(id);
    }

    return response;
    
}

/*
- this function allows you to add a product to the basket
- productProductData : matches to the data of the product, its name, id, price etc.
- idElem : this is the id of the html element containing the product
*/
const addProductInCart = (productData, idElem) =>{

    //We check if the product has not already been added to the basket

    //The case where the product is not added to the basket
    let responseValue = productId_Exists(productData._id);
    if (!responseValue || responseValue === null)
    {
        
        isAdded = false;

        //I store the product id in sessionStorage
        sessionStorage.products += `${productData._id} `;

        //I also store in sessionStorage the caliber chosen by the user
        sessionStorage.calibre += `{"value": \"${document.getElementById(idElem).value}\", "id": \"${productData._id}\"}` + ";";

        //Si la session "prixTotal" a déjà été créée, je la met à jour en y additionnant le prix du produit en traitement
        if(sessionStorage.getItem('prixTotal') !== null){
            let prixActu =  parseFloat(sessionStorage.getItem('prixTotal')) + productData.price;
            sessionStorage.setItem('prixTotal', prixActu);
        }
        //otherwise, I initialize a session variable to store the total price of products added by the user to the cart
        else{
            sessionStorage.setItem('prixTotal', productData.price);
        }

        //it returns an html element which contains a message specifying that the product is added now
        modalElt = isProductAdded(isAdded);

        //I display the returned message in the page
        document.getElementById("productsContainer").insertAdjacentElement('afterbegin', modalElt);
    
    }

    //the case where the product is already added to the basket
    else
    {
        isAdded = true;

        //it returns an html element which contains a message specifying that the product has been already added
        modalElt = isProductAdded(isAdded);
        
        /*If a notification message is already displayed on the page and the user still clicks on "add product",
        I replace this message with the new one generated*/
        if(document.getElementById('modal') !== null)
        {
            document.getElementById("productsContainer").replaceChild(modalElt, document.getElementById('modal'))
        }
        //otherwise I directly display the message
        else
        {
            document.getElementById("productsContainer").insertAdjacentElement('afterbegin', modalElt);
        }
    }
}