// Afficher le formulaire
document.getElementById("Confimedbtn").addEventListener("click", () =>{

    document.getElementById("form").style.display = "block";

});



let form = document.getElementById("form");

form.addEventListener("submit", (e) =>{

    e.preventDefault();


    fetch(" https://oc-devweb-p5-api.herokuapp.com", {
      
    // Adding method type
    method: "POST",
    // Adding headers to the request
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      
    // Adding body or contents to send
    body: JSON.stringify({
        name: "cheikh",
        adresse: "10 rue Louis Blériot",
})
      
})
  
// Converting to JSON
.then(response => response.json())
  
// Displaying results to console
.then(json => console.log(json));
})







