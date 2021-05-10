//Envoi des données du formulaire de commande au serveur
let form = document.getElementById("form");

form.addEventListener("submit", (e) =>{

    e.preventDefault();

    let arrayCart = JSON.parse(sessionStorage.getItem('products'));

    let idProducts = [];
    
    for(let product of arrayCart){
        idProducts.push(product.id);
    }
    
    fetch("http://localhost:3000/api/cameras/order", {

    method: "POST",
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        contact: {
            firstName: form.elements.firstName.value,
            lastName: form.elements.lastName.value,
            address: form.elements.address.value,
            city: form.elements.city.value,
            email: form.elements.email.value

        },
        products: idProducts
})
      
})
.then(response => response.json())
  
.then(response => document.location.href=`confirmation.html?idCommande=${response.orderId}&pseudo=${form.elements.firstName.value}`);


})

