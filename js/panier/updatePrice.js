//this function allows to update the price of a product according to the quantity defined by the user.
const updatePrice = (data, newQuantity, lastQuantity) =>{

    //calculate the difference with the price sent previously
    let diffrence = (data.price) * (newQuantity - lastQuantity);
    //update current total price
    let currentTotalPrice = parseFloat(sessionStorage.getItem('prixTotal'));
    let updatedTotalPrice = currentTotalPrice + diffrence;
    sessionStorage.setItem('prixTotal', updatedTotalPrice);

    //retrieve the new price and insert it in the page
    let newProductPrice = (data.price) * (newQuantity);
    newProductPrice = priceFormat(newProductPrice);
    document.getElementById(data.name + "_" +data._id).textContent = newProductPrice;
    
    //retrieve the new total price and insert it in the page
    updatedTotalPrice = priceFormat(updatedTotalPrice);
    document.getElementById('prixTotal').textContent = "TOTAL (TTC) : " + updatedTotalPrice;
}