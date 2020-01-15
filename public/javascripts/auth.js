

/* document.addEventListener('DOMContentLoaded', function () { */

const Form = document.querySelector('#form-signup');
   
    Form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // et user info
        //const name = Form['name'].value;
        const email = Form['email'].value;
        const password = Form['password'].value;
       // const passwordR = Form['repeat-password'].value;

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            //console.log(cred);
            Form.reset(); 
        })
       // console.log(name, email, password, passwordR)
    })

    // log out

/*
signupForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(signupForm)
   /*  // get user info
    const email = signupForm['signup-email'].value;
    const password =  signupForm['signup-password'].value;
    const repeatPassword = signupForm['signup-repeat-password'].value;
    console.log(email)

})
})
*/