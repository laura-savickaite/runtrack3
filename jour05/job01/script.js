// .MATCH

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);




document.addEventListener('DOMContentLoaded', function loaded() {

    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let pass2 = document.getElementById('pass2');

    let error = document.getElementsByClassName('error');
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    prenom.addEventListener('focusout', function(){
        let prenomValue = this.value;
        if(prenomValue === '')
        {
            error[0].style.display = 'block'
            error[0].innerHTML = 'Veuillez rentrer un prénom';
        }
        else 
        {
            error[0].style.display = 'none'
        }
    })

    nom.addEventListener('focusout', function(){
        let nomValue = this.value;
        if(nomValue === '')
        {
            error[1].style.display = 'block'
            error[1].innerHTML = 'Veuillez rentrer un nom';
        }
        else 
        {
            error[1].style.display = 'none'
        }
    })

    email.addEventListener('focusout', function(){
        let emailValue = this.value;

        const found = emailValue.match(regexEmail);

        console.log(found)

        if(emailValue === '')
        {
            error[2].style.display = 'block'
            error[2].innerHTML = 'Veuillez rentrer un email';
        }
        else 
        {  
            if(found === null)
            {
                error[2].style.display = 'block'
                error[2].innerHTML = 'Veuillez rentrer un email valide';
                console.log(error[2])
            }
            else 
            {
                error[2].style.display = 'none'
            }
        }
    })


    pass.addEventListener('focusout', function(){
        let passValue = this.value;
        if(passValue === '')
        {
            error[3].style.display = 'block'
            error[3].innerHTML = 'Veuillez rentrer un mot de passe';
        }
        else 
        {
            error[3].style.display = 'none'
        }
    })


    pass2.addEventListener('focusout', function(){
        let pass2Value = this.value;
        if(pass2Value === '')
        {
            error[4].style.display = 'block'
            error[4].innerHTML = 'Veuillez faire une confirmation de mot de passe';
        }
        else 
        {
            error[4].style.display = 'none'
        }
    })


})