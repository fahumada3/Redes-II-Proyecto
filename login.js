document.addEventListener('DOMContentLoaded', () => {
    fetch('info.json')
        .then(response => response.json())
        .then(datosUsuario => {
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();

                const usuarioInput = document.getElementById('usuario').value;
                const contrasenaInput = document.getElementById('contrasena').value;

                // Validación
                const usuarioAutenticado = datosUsuario.find(usuario => 
                    (usuarioInput === usuario.usuario || usuarioInput === usuario.correo) && 
                    contrasenaInput === usuario.contrasena
                );

                if (usuarioAutenticado) {
                    // Almacenar el usuario autenticado en localStorage
                    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));

                    // Redirigir a parqueadero.html
                    window.location.href = 'indexEMMA.html';
                } else {
                    document.getElementById('mensaje').innerText = 'Usuario o contraseña incorrectos.';
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
