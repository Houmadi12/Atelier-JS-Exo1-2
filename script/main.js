// Une fonction de validation de formulaire
let age = 0;

let response = document.getElementById("respons");

form.onsubmit = () => {
    age = Number.parseInt(document.getElementById("age").value);

    if(age <= 0){
        respons.textContent ="L'age négatie n'existe pas Mr!";
    }else if( (age >0) && (age < 18) ){
        respons.textContent = "Mr t'est mineur !";
    } else if ((age > 18) && (age < 50)){
        respons.textContent = "Mr t'est majeur !";
    } else {
        respons.textContent = "Mr t'est senior !";
    }

    // respons.textContent = nb1+nb2;

    return false;
} 



