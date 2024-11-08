// Validación de formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, completa todos los campos.');
        e.preventDefault();
    }
});

// Validación de formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirmPassword) {
        alert('Por favor, completa todos los campos.');
        e.preventDefault();
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        e.preventDefault();
    }
});
