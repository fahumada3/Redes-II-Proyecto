document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                localStorage.setItem('username', user.username);
                window.location.href = 'main.html';
            } else {
                alert('Usuario o contraseña incorrectos.');
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
