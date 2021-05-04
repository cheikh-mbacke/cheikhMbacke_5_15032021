//The function is used to notify the user if a product is already added or not
const isProductAdded = (isAdded) =>{

    //the background color of the notification
    let bgColor = '';

    //the message to return according to the parameter => isAdded
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

    //The html code for the notification
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