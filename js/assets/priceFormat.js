const priceFormat = (price) =>{

    //Configurer le formatage
    let config = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR", currencyDisplay: "symbol", maximumFractionDigits: 2});

    //Formater le prix
    let formatedPrice = config.format(price);
    
    return formatedPrice;
}