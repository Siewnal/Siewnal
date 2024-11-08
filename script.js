// Manejo del formulario de login y registro

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la validación o el envío de datos a un servidor
    alert(`Iniciaste sesión con el usuario: ${username}`);
});

document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    } else {
        // Aquí puedes agregar la validación o el envío de datos a un servidor
        alert(`Usuario registrado: ${newUsername}`);
    }
});

