document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Simpan username dan password ke localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Sign Up Berhasil! Silakan login.');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ambil username dan password dari localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if(username === storedUsername && password === storedPassword) {
        alert('Login Berhasil!');
    } else {
        alert('Username atau Password salah.');
    }
});
