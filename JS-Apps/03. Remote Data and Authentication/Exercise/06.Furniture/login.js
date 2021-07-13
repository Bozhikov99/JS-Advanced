let forms = document.querySelectorAll('.col-md-12 form');
let registerFormElement = forms[0];
let loginFormElement = forms[1];

registerFormElement.addEventListener('submit', register);

loginFormElement.addEventListener('submit', login);

function register(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');
    let rePassword = formData.get('rePass');

    Array.from(e.target.querySelectorAll('input'))
        .forEach(i => i.value = '');

    if (email == '' || password == '' || rePassword == '') {
        console.error('Invalid field!');
        return;
    }

    if (password != rePassword) {
        console.error('Passwords don\'t match!');
        return;
    }

    fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json())
        .then(function (res) {
            localStorage.setItem('auth_token', res.accessToken);
            localStorage.setItem('userId', res._id);

            location.assign('./homeLogged.html');
        })
        .catch(err => console.error(err));
}

function login(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');

    Array.from(e.target.querySelectorAll('input'))
        .forEach(i => i.value = '');

    if (email == '' || password == '') {
        console.error('Invalid field!');
        return;
    }

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json())
        .then(function (res) {
            localStorage.setItem('auth_token', res.accessToken);
            localStorage.setItem('userId', res._id);

            if (localStorage.getItem('auth_token')=='undefined') {
                console.error('Invalid user!');
                return;
            }
            location.assign('./homeLogged.html');
        })
        .catch(err => console.error(err));
}
