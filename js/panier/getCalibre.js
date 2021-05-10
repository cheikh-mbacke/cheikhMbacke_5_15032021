//cette fonction permet de récupérer le calibre (lentille) correspondant à un identifiant qui lui est envoyé
const getCalibre = (idProduct) =>{

    let calibreValue = '';
    
    let arrayCart = JSON.parse(sessionStorage.getItem('products'));

    for (let product of arrayCart){
        if(product.id === idProduct){
            calibreValue = product.value;
        }
    }   

    return calibreValue;
}