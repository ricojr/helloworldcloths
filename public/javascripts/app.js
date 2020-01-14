firebase.auth.Auth.Persistence.LOCAL;

//login
const loginForm = document.querySelector('#login-form');
const btnLogin = document.querySelector('#btn-login');
btnLogin.addEventListener('click', e => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
    });

    if (email != '' && password != '') {
        const result = auth.signInWithEmailAndPassword(email, password);

        result.catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            alert('Message: ' + errorMessage);
        });
    } else {
        alert('Please fill out all fields.');
    }
});

//sign up
const signupForm = document.querySelector('#signup-form');
const btnSignup = document.querySelector('#btn-signup');
btnSignup.addEventListener('click', e => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    });
});