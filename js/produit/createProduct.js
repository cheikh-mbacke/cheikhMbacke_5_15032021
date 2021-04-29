//this function is used to create the html code of a product whose data is sent to it
const createProduct = (data) =>{

    //divide the value of the price by 100 because it is too many
    data.price = data.price / 100;

    //format the price
    let price = priceFormat(data.price);

    //creation of the html code displaying the product
    let firstDivElt = document.createElement('div');
    let secondDivElt= document.createElement('div');
    let imgElt = document.createElement('img');
    let h5Elt = document.createElement('h5');
    let h6Elt = document.createElement('h6');
    let pElt = document.createElement('p');
    let selectElt = document.createElement('select');
    let firstOptionElt = document.createElement('option');
    let aElt = document.createElement('a');

    firstDivElt.setAttribute("class", "card mb-3 productCard");
    firstDivElt.setAttribute("id", data._id);

    imgElt.setAttribute("src", data.imageUrl);
    firstDivElt.appendChild(imgElt);

    secondDivElt.setAttribute("class", "card-body");

    h5Elt.setAttribute("class", "card-title");
    h5Elt.textContent = data.name;
    secondDivElt.appendChild(h5Elt);

    pElt.setAttribute("class", "card-text");
    pElt.textContent = data.description;
    secondDivElt.appendChild(pElt);

    selectElt.setAttribute("class", "form-select form-select-sm mb-3");
    selectElt.setAttribute("aria-label", ".form-select-sm");
    let idSelect = data._id + "xf34";
    selectElt.setAttribute("id", idSelect);

     //Dynamically generate the available calibers
     data.lenses.map(elt => {

        let optionElt = document.createElement('option');
        optionElt.setAttribute("value", elt);
        optionElt.textContent = elt;
        selectElt.appendChild(optionElt);

     })

     secondDivElt.appendChild(selectElt);

     h6Elt.setAttribute("class", "mb-3");
     h6Elt.textContent = 'Prix : ' + price;
     secondDivElt.appendChild(h6Elt);

     let isAdded = null;
     let modalElt = null;
     aElt.setAttribute("href", "#");
     aElt.setAttribute("class", "btn btn-basket w-100");
     aElt.textContent = "Ajouter au panier";

     //the event that manages the addition to the cart
     aElt.addEventListener("click", () => {
       
        addProductInCart(data, idSelect);

     });
     secondDivElt.appendChild(aElt);

    firstDivElt.appendChild(secondDivElt);

    //return the product code after all the settings

    return firstDivElt

    // //Insérer le code html du produit envoyé
    // document.getElementById("productsContainer").appendChild(firstDivElt);

}