//cette fonction permet de créer le code html d'un produit dont les données lui sont envoyées
const createProduct = (data) =>{

    //divisez la valeur du prix par 100 car c'est trop
    data.price = data.price / 100;

    //formater le prix
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

//récupération de produit à partir de l'API
fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    
    for (let value of response) {
        
        let product = createProduct(value);

        document.getElementById("productsContainer").innerHTML += product;
        
    }

})
.catch(error => alert("Erreur : " + error));

