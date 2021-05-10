//cette fonction permet de créer le code html d'un produit dont les données lui sont envoyées
const createProduct = (data) =>{

    //divisez la valeur du prix par 100 car c'est trop
    data.price = data.price / 100;

    //formater le prix
    let price = priceFormat(data.price);

    //création du code html affichant le produit
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

     //Générer dynamiquement les lentilles disponibles
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

     //l'événement qui gère l'ajout au panier
     aElt.addEventListener("click", () => {
       
        addProductInCart(data, idSelect);

     });
     secondDivElt.appendChild(aElt);

    firstDivElt.appendChild(secondDivElt);

    //renvoyer le code produit après tous les réglages
    return firstDivElt
}