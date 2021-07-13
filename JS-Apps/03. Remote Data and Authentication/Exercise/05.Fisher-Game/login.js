let registerFormElement = document.getElementById('register-form');
let loginFormElement = document.querySelector('#login-form');

registerFormElement.addEventListener('submit', registerUser);
loginFormElement.addEventListener('submit', loginUser);

async function registerUser(e) {
    e.preventDefault();

    let formData = new FormData(registerFormElement);


    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    Array.from(registerFormElement.querySelectorAll('input'))
        .forEach(x => x.value = '');

    if (password !== rePass) {
        console.error('Passwords don\'t match!');
        return;
    }

    if (email === '') {
        console.error('Invalid email!');
        return;
    }

    if (password === '') {
        console.error('Invalid password!');
        return;
    }

    let registrationReq = await fetch('http://localhost:3030/users/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

    let registrationResponse = await registrationReq.json();
    localStorage.setItem('token', registrationResponse.accessToken);
    localStorage.setItem('userId', registrationResponse._id);
    location.assign('./index.html');
}

async function loginUser(e) {
    e.preventDefault();

    let formData = new FormData(loginFormElement);
    let email = formData.get('email');
    let password = formData.get('password');

    Array.from(loginFormElement.querySelectorAll('input'))
        .forEach(x => x.value = '');

    if (email === '') {
        console.error('Invalid email!');
        return;
    }

    if (password === '') {
        console.error('Invalid password!');
        return;
    }

    let loginRequest = await fetch('http://localhost:3030/users/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })


    let loginResponse = await loginRequest.json();

    if (loginRequest.status !== 200) {
        console.error('Invalid user data!');
        return;
    }

    localStorage.setItem('token', loginResponse.accessToken);
    localStorage.setItem('userId', loginResponse._id);

    location.assign('./index.html');
}

