//this allows you to remove products from the shopping cart
const deleteProduct = (data, productQuantity) =>{

    //delete the html code of the product from the shopping cart page
    document.getElementById('products').removeChild(document.getElementById(data._id));

    //delete the product from sessionStorage
    sessionStorage.products = sessionStorage.getItem('products').replace("undefined", "")
    sessionStorage.products = sessionStorage.getItem('products').replace(data._id, " ");

    //Update the total price of products purchased
    let currentPrice =  parseFloat(sessionStorage.getItem('prixTotal')) - (data.price * productQuantity);
    sessionStorage.setItem('prixTotal', currentPrice);

    //Format the updated total price before insertion in the page
    currentPrice = priceFormat(sessionStorage.getItem('prixTotal'));
    document.getElementById('prixTotal').textContent = "TOTAL (TTC) : " + currentPrice;

}
