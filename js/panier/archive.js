const user = {
    first_name: 'John',
    last_name: 'Lilly',
    job_title: 'Software Engineer'
};
 
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
}
 
fetch('http://localhost:3000/api/teddies/order', options)
    .then(res => res.json())
    .then(res => console.log(res));

    // var commande = new FormData();
    // commande.append("couleur", "rouge");
    // commande.append("pointure", "43");
    // // Envoi de l'objet FormData au serveur
    // ajaxPost("http://localhost:3000/api/teddies/order", commande,
    //     function (reponse) {
    //         // Affichage dans la console en cas de succès
    //         console.log(response);
    //     }
    // );


    // // Exécute un appel AJAX POST
// // Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// function ajaxPost(url, data, callback) {
//     var req = new XMLHttpRequest();
//     req.open("POST", url);
//     req.addEventListener("load", function () {
//         if (req.status >= 200 && req.status < 400) {
//             // Appelle la fonction callback en lui passant la réponse de la requête
//             callback(req.responseText);
//         } else {
//             console.error(req.status + " " + req.statusText + " " + url);
//         }
//     });
//     req.addEventListener("error", function () {
//         console.error("Erreur réseau avec l'URL " + url);
//     });
//     req.send(data);
// }


//Malick

fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 'cheikh', b: 'mbacke'})
}).then(response =>{console.log(response);})
.catch(e => console.log(e))