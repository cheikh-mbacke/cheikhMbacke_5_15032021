// Afficher le formulaire
document.getElementById("Confimedbtn").addEventListener("click", () =>{

    document.getElementById("form").style.display = "block";

});



let form = document.getElementById("form");

form.addEventListener("submit", (e) =>{

    e.preventDefault();


    fetch("http://localhost:3000/api/teddies/order", {
      
    // Adding method type
    method: "POST",
      
    // Adding body or contents to send
    body: JSON.stringify({
        name: "cheikh",
        adresse: "10 rue Louis Blériot",
        produit: [1, 2, 2]
    }),
      
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
  
// Converting to JSON
.then(response => response.json())
  
// Displaying results to console
.then(json => console.log(json));
})







