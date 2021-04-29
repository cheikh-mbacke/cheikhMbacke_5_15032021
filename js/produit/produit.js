//retrieve the product id sent by index.html
const params = new URLSearchParams(window.location.search);
let idProduct = params.get('idProduct');

let url = "http://localhost:3000/api/cameras/" + idProduct;

fetch(url)
.then(response => response.json())
.then(response => {

    let product = createProduct(response);
    document.getElementById("productsContainer").appendChild(product);

})
.catch(error => document.location.href="../erreur.html");
