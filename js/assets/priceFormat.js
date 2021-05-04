const priceFormat = (price) =>{

    //Configure formatting
    let config = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR", currencyDisplay: "symbol", maximumFractionDigits: 2});

    //Format the price
    let formatedPrice = config.format(price);
    
    return formatedPrice;
}