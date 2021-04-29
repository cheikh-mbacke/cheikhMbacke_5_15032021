function shoping (data){
    //Fonction de création des div
    const createElt = (elt) =>{
        return document.createElement(elt);
    }
    //Formatage du prix
    let intl = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR", currencyDisplay: "symbol", maximumFractionDigits: 2});
    let price = intl.format(data.price);

    //Création des éléments div
    let div1Elt = createElt('div');
    let div2Elt = createElt('div');
    let div3Elt = createElt('div');
    let div4Elt = createElt('div');
    let div5Elt = createElt('div');
    let div6Elt = createElt('div');

    //Définition de l'élément div1
    div1Elt.setAttribute("class", "d-flex justify-content-between m-auto bg-light single-product mb-3");
    div1Elt.setAttribute("id", data._id)

    //Création de l'élément image
    let imgElt = createElt('img');
    imgElt.setAttribute("class", "productImg");
    imgElt.setAttribute("src", data.imageUrl);
    div2Elt.setAttribute("class", "d-flex");
    div2Elt.appendChild(imgElt);

    //Création de l'élément p et son contenu
    let pElt = createElt('p');
    pElt.setAttribute("class", "ms-2");

        //L'élément strong
        let pStrongElt = createElt('strong');
        let pBrElt = createElt('br');
        pStrongElt.appendChild(document.createTextNode(data.name +" " +sessionStorage.getItem('calibre')));
        pStrongElt.appendChild(pBrElt);
        pElt.appendChild(pStrongElt);

    pElt.appendChild(document.createTextNode(data.description));

    div2Elt.appendChild(pElt);

    //insertion de l'élément div2
    div1Elt.appendChild(div2Elt);

    //L'élément div4
    div4Elt.setAttribute("class", "align-self-end cursor-pointer");
    div4Elt.addEventListener('click', (e) =>{
        document.getElementById('products').removeChild(document.getElementById(data._id));
        let prixActu =  parseFloat(sessionStorage.getItem('prixTotal')) - data.price;
        sessionStorage.setItem('prixTotal', prixActu);

        prixActu = intl.format(prixActu);
        document.getElementById('prixTotal').textContent = "TOTAL (TTC) : " + prixActu;
        sessionStorage.removeItem(data.name);


        
        if (document.getElementsByClassName('single-product').length === 0) {

    
            for(let elt of document.getElementsByClassName("panierRempli")){
                document.getElementById('finalisation').removeChild(elt);
                document.getElementById('panierVide').style.display = "block";
            }
        
            
        }    



        
    });
        //Icone supprimer
        let iElt = createElt('i');
        iElt.setAttribute("class", "far fa-trash-alt");
    div4Elt.appendChild(iElt);
    div3Elt.appendChild(div4Elt);


    //Création de l'élément form et son contenu
    let formElt = createElt('form');

        //L'élément input
        let inputElt = createElt('input');
        inputElt.style.width = '3em';
        inputElt.setAttribute("type", "number");
        inputElt.setAttribute("min", 1);
        inputElt.setAttribute("max", 100);
        inputElt.setAttribute("value", 1);
        inputElt.addEventListener('change', (e) =>{
            newPrice = data.price * e.target.value;
            newPrice = intl.format(newPrice);
            document.getElementById("price").textContent = newPrice;

        });

    formElt.appendChild(inputElt);

    //Définition de la div6

        //Création de l'élément div6Strong
        let div6StrongElt = createElt('strong');
        div6StrongElt.setAttribute("id", "price")
        div6StrongElt.appendChild(document.createTextNode(price));

    div6Elt.appendChild(div6StrongElt);

    //Définition de la div5
    div5Elt.setAttribute("class", "d-flex justify-content-between define-qte");
    div5Elt.appendChild(formElt);
    div5Elt.appendChild(div6Elt);
    div3Elt.setAttribute("class", "d-flex flex-column justify-content-between p-3");
    div3Elt.appendChild(div5Elt);

        //insertion de l'élément div3
        div1Elt.appendChild(div3Elt);

        document.getElementById('products').insertAdjacentElement('afterbegin', div1Elt);







    
    // return `
    //         <div class="d-flex justify-content-between m-auto bg-light single-product mb-3">

    //             <div class="d-flex me-5 p-3">
    //                 <img src="./images/img-test-4-copie.jpg" alt="">
    //                 <p>
    //                     <strong>Appareil photo Hybride Nikon Z5 + 24-50mm</strong> <br />
    //                     Capturez les instants les plus forts de votre vie avec une qualité
    //                     ultra détaillée grâce au Nikon Z5 + 24-50mm.
    //                 </p>
    //             </div>

    //             <div class="d-flex flex-column justify-content-between p-3">
    //                 <div class="align-self-end cursor-pointer"><i class="far fa-trash-alt"></i></div>
    //                     <div class="d-flex justify-content-between define-qte">
    //                         <form >
    //                         <input type="number" min="1" max="100" value="1">
    //                         </form>
    //                         <div>
    //                             <strong>4922 £</strong>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    // `
}