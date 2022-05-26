# # Proyecto Final
Este proyecto se basa en una red social de películas en la que los usarios pueden interacturar buscando películas, interactuando entre ellos, calorando peliculas, hablaando por un chat en directo y más funciones

## # Mejoras de esta versión:

### ## Nueva librería de estilos
En principio comence usando bootstrap en este proyecto pero investigando por internet descubrí que la librería de estilos por excelencia en REACT es **MUI (Material-UI)** por lo que he implementado esta librería en el proyecto y todas las mejoras visuales que se han hecho han sido a partir de la misma.

### ## Chat en directo
En esta versión del proyecto hemos implementado un chat en directo el cual permite a los usuarios en tiempo real y actualizandose de forma contínua, la mayor novedad que contiene este chat en directo es que ha sido diseñado mediante las **bases de datos en tiempo real de firebase**.

------------

**Firebase Realtime Database Es Una Base De Datos Nosql Alojada En La Nube Que Te Permite Almacenar Y Sincronizar Datos Entre Tus Usuarios En Tiempo Real**

### ## Sistema de comentarios y valoraciones de películas

Otro mejora implementada ha sido el sistema de comentarios y rating de películas, mediante este los usuarios pueden comentar las películas y ponerles una valoración que va entre las 1 y 5 estrellas.

------------
Para acceder a este sistema tendremos que estar logeados y después pinchar en una película cualquiera, en la parte inferior de la pantalla veremos el formulario con el campo de texto y las estrellas que nos permitirá valorar y comentar. Una vez hecho el submit el comentario será desplegado abajo del formulario


### ## Sistema de gestión de usarios completado (registro de nuevos usuarios, avatar....)
En la anterior versión dejamos a medias el sistema de login, para esta versión esta completamente terminado, habiéndose añadido un sistema de registro, un avatar auto generado para cada usuario (en avatar se genera con la primera letra del nombre de usuario) y y un botón para hacer log-out.


URL despliegue:
https://front-end-reactv3.vercel.app/

URL back end:
https://apirestmoviex.herokuapp.com/
