//La fonction est utilisée pour créer le code html du message à envoyer à l'utilisateur si un produit est ajouté au panier ou déjà ajouté
const isProductAdded = (isAdded) =>{

    //la couleur d'arrière-plan de la notification
    let bgColor = '';

    //le message à renvoyer selon le paramètre => isAdded
    let message = '';

    if(isAdded === true)
    {
        bgColor= '	#FFA500';
        message = 'Cet article est déjà ajouté au panier !';
    }
    else if(isAdded === false)
    {
        bgColor= '#90EE90';
        message = 'Cet article a été ajouté au panier !';
    }

    //Le code html de la notification
    let divElt = document.createElement('div');
    let pElt = document.createElement('p');
    pElt.textContent = message;
    pElt.setAttribute("class", "pt-1");
    divElt.setAttribute("class", `modalMessage py-2 mb-3 text-center rounded`);
    divElt.setAttribute("id", "modal");
    divElt.style.backgroundColor = bgColor;
    divElt.appendChild(pElt);

    return divElt;

}