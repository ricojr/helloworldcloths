// listen for auth status
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    }else {
        console.log('user logged out');
    }
    
})


    // log in
    const loginForm = document.querySelector('#form-signin');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = loginForm['inputEmail'].value;
        const password = loginForm['inputPassword'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
            loginForm.reset();
        })
    })
