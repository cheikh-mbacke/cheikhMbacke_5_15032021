//this function allows you to retrieve the caliber corresponding to an id sent to it
const getCalibre = (idProduct) =>{

    let calibreValue = null;
    
    let calibreArray = sessionStorage.getItem('calibre').replace("undefined", "");
    calibreArray = calibreArray.split(';');
    calibreArray.pop();

    for (let calibreObject of calibreArray){
        calibreObject = JSON.parse(calibreObject);
        if(calibreObject.id === idProduct){
            calibreValue = calibreObject.value;
        }
    }   

    return calibreValue;
}