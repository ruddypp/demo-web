function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

document.getElementById('login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = getUser();

    if (user && username === user.username && password === user.password) {
        Swal.fire({
            title: 'Login Successful!',
            text: `Welcome back, ${username}!`,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href =  '../page3/blank.html'; // Redirect to blank page
        });
    } else {
        Swal.fire({
            title: 'Login Failed!',
            text: 'Incorrect username or password.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }
});

function saveUser(username, password) {
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
}

document.getElementById('register').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !password || !confirmPassword) {
        Swal.fire({
            title: 'Error!',
            text: 'All fields are required.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            title: 'Error!',
            text: 'Passwords do not match.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    saveUser(username, password);
    Swal.fire({
        title: 'Registration Successful!',
        text: 'You can now log in.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = '../page1/index.html'; // Redirect to login page
    });
});