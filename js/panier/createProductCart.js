const createProductCart = (data) => {

    //divisez la valeur du prix par 100 car c'est trop
    data.price = data.price / 100;

    //formater le prix
    let price = priceFormat(data.price);

    //création du code html affichant les produits dans le panier
    let divContainer = document.createElement('div');
    let divItem_1 = document.createElement('div');
    let divItem_2 = document.createElement('div');
    let divIconDelete = document.createElement('div');
    let divContainsFom = document.createElement('div');
    let divContainsPrice = document.createElement('div');
    


    divContainer.setAttribute("class", "d-flex justify-content-between m-auto bg-light single-product mb-3 divContainer");
    divContainer.setAttribute("id", data._id)

    let imgElt = document.createElement('img');
    imgElt.setAttribute("class", "productImg");
    imgElt.setAttribute("src", data.imageUrl);
    divItem_1.setAttribute("class", "d-flex divItem_1");
    divItem_1.appendChild(imgElt);

    let pElt = document.createElement('p');
    pElt.setAttribute("class", "ms-2");
    let pStrongElt = document.createElement('strong');
    pStrongElt.setAttribute("id", data._id + "pp")
    let pBrElt = document.createElement('br');
    pStrongElt.appendChild(document.createTextNode(data.name + " " + getCalibre(data._id)));
    pStrongElt.appendChild(pBrElt);
    pElt.appendChild(pStrongElt);
    pElt.appendChild(document.createTextNode(data.description));
    divItem_1.appendChild(pElt);
    divContainer.appendChild(divItem_1);

    divIconDelete.setAttribute("class", "align-self-end cursor-pointer");
    divIconDelete.addEventListener('click', (e) =>{

    //Supprimer le produit sur lequel l'utilisateur a cliqué
    let dataValue = document.getElementById(data.name + "053kx" + data._id).dataset.element;
        deleteProduct(data, dataValue);   
    });

    //Création de l'icône "supprimer"
    let deleteIcone = document.createElement('i');
    deleteIcone.setAttribute("class", "far fa-trash-alt");
    divIconDelete.appendChild(deleteIcone);
    divItem_2.appendChild(divIconDelete);

    //Créer l'élément de formulaire et son contenu
    let formElt = document.createElement('form');

    //Cet élément permet d'augmenter ou de diminuer la quantité d'un produit
    let adjustQuantity = document.createElement('input');
    adjustQuantity.style.width = '3em';
    adjustQuantity.setAttribute("type", "number");
    adjustQuantity.setAttribute("id", data.name + "053kx" + data._id);
    adjustQuantity.setAttribute("min", 1);
    adjustQuantity.setAttribute("max", 100);
    adjustQuantity.setAttribute("value", 1);
    adjustQuantity.setAttribute("data-element", 1)

    //Modifier le prix du produit en fonction du nombre d'articles achetés
    adjustQuantity.addEventListener('change', (e) =>{
        updatePrice(data, e.target.value, e.target.dataset.element)
        e.target.dataset.element = e.target.value
    });

    formElt.appendChild(adjustQuantity);

    let divcontainspriceStrongElt = document.createElement('strong');
    divcontainspriceStrongElt.setAttribute("id", data.name + "_" +data._id)
    divcontainspriceStrongElt.appendChild(document.createTextNode(price));

    divContainsPrice.appendChild(divcontainspriceStrongElt);

    divContainsFom.setAttribute("class", "d-flex justify-content-between define-qte");
    divContainsFom.appendChild(formElt);
    divContainsFom.appendChild(divContainsPrice);
    divItem_2.setAttribute("class", "d-flex flex-column justify-content-between p-3 divItem_2");
    divItem_2.appendChild(divContainsFom);

    divContainer.appendChild(divItem_2);
    document.getElementById('products').insertAdjacentElement('afterbegin', divContainer);

   
}
