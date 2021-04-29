
//this function is used to create the html code of a product whose data is sent to it
const cadrProduct = (data) =>{

    //divide the value of the price by 100 because it is too many
    data.price = data.price / 100;

    //format the price
    let price = priceFormat(data.price);

    return `<div class="card card-produit" id="${data._id}">
                    <img src="${data.imageUrl}" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">
                        ${data.description}
                    </p>
                    <h6>Prix : ${price}</h6>
                    <a href="produit.html?idProduct=${data._id}" class="btn btn-basket w-100 ">Acheter</a>
                    </div>
                </div>`

}

//product recovery from the API
fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    
    for (let value of response) {
        
        let product = cadrProduct(value);

        document.getElementById("productsContainer").innerHTML += product;
        
    }

})
.catch(error => alert("Erreur : " + error));


