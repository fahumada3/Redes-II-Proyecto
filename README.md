En caso de que no sepan usar GitHub:

SOLO SE TIENE QUE HACER UNA VEZ!
1. Ir a la página oficial de Git y descargar la versión correspondiente a su sistema operativo (https://git-scm.com/downloads)
2. Seguir las instrucciones del instalador, y aceptar las configuraciones por defecto
3. En la terminal de VSCode, ejecuta los siguientes comandos para configurar tu nombre y correo de Git (usa el correo que tienes registrado en GitHub):
4. git config --global user.name "Tu nombre de usuario de GitHub"
5. git config --global user.email "tuemail@ejemplo.com"
6. Se te abriara una ventana en el navegador pidiendote que inicies sesion

SE HACE CADA VEZ QUE TRABAJES EN EL PROYECTO! (PASENME SUS USUARIOS AL WHATSAPP PARA AGREGARLOS Y QUE PUEDAN EDITAR LOS ARCHIVOS)
1. En la terminal de VSCode descarga la ultima version del proyecto con:
2. git clone https://github.com/fahumada3/Redes-II-Proyecto.git C:\Users\TuUsuario\Desktop\Redes-II-Proyecto
3. Abre la carpeta en VSCode
3. Realiza los cambios que quieras al proyecto y cuando termines coloca en la terminal de VSCode:
4. git checkout -b nombre-de-tu-rama
5. git add .
6. git commit -m "Resumen de los cambios"
7. git push origin nombre-de-tu-rama
8. Ve a la página del repositorio en GitHub, verás un botón que dice "Compare & pull request". Haz clic en él.
9. Añade un título y descripción para tu solicitud de extracción y haz clic en "Create pull request".
10. Espera unos segundos a que se suban los cambios
11. Para seguier trabajando en proyecto siempre descarga la ultima version con:
12. git pull origin main

