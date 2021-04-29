//check if products are added to the shoping cart
  if (sessionStorage.getItem('products') !== null) {
   
    //retrieve product ids and put them in an array
    let idProductList = sessionStorage.getItem('products').replace("undefined", "");
    idProductList = idProductList.split(' ');
    idProductList = idProductList.filter(x => x !== "");
    
    //retrieve from the API the products added to the shoping cart
    for(let idValue of idProductList){
        fetch("http://localhost:3000/api/cameras/" +idValue)
        .then(response => response.json())
        .then(response => {
    
            createProductCart(response);
            
            //In case the shoping cart is empty
            if (document.getElementsByClassName('single-product').length === 0) {
    
                for(let elt of document.getElementsByClassName("panierRempli")){
                    document.getElementById('finalisation').removeChild(elt);
                    document.getElementById('panierVide').style.display = "block";
                }
            
                
            }
    
        })
        .catch(error => alert("Erreur : " + error));
    }

    
}

//Format the total price then insert it in the page
let prixTotal = priceFormat(sessionStorage.getItem('prixTotal'));
document.getElementById('prixTotal').textContent = "TOTAL (TTC) : " + prixTotal

