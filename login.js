document.addEventListener('DOMContentLoaded', () => {
    fetch('info.json')
        .then(response => response.json())
        .then(datosUsuario => {
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();

                const usuarioInput = document.getElementById('usuario').value;
                const contrasenaInput = document.getElementById('contrasena').value;

                // Validación
                if ((usuarioInput === datosUsuario.usuario || usuarioInput === datosUsuario.correo) && contrasenaInput === datosUsuario.contrasena) {
                    // Redirigir a parqueadero.html
                    window.location.href = 'indexEmma.html';
                } else {
                    document.getElementById('mensaje').innerText = 'Usuario o contraseña incorrectos.';
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
