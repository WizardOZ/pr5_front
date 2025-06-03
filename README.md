#### Cookies en Server-side + useEffect en el Cliente

#### Objetivo

Crear una página en Deno Fresh que realice lo siguiente:

1.  Cree una ruta llamada profile.tsx dentro de la carpeta routes.
2.  En el handler de la ruta:

    *   Lea la cookie username usando getCookies() de la librería estándar de Deno.
    *   Si la cookie no existe, envíe al componente de página la información indicando que no hay un nombre almacenado.
    *   Si la cookie existe, envíe al componente de página el nombre leído de la cookie.

1.  Permita al usuario establecer o actualizar el valor de la cookie mediante un formulario HTML:

    *   Si no existe la cookie username, el componente debe renderizar un formulario con un campo de texto para ingresar el nombre y un botón para enviar.
    *   El formulario debe enviar la información mediante un POST a la misma ruta (/profile).
    *   En el handler del POST, almacene el valor recibido en la cookie username usando setCookie() y redirija al usuario nuevamente a la ruta /profile.

1.  En el cliente, dentro del componente de la página, implemente un useEffect que haga lo siguiente:

    *   Al cargar la página, inicialice un estado con un color de fondo (por ejemplo, blanco).
    *   Cada segundo, cambie el color de fondo de la página, alternando entre varios colores predeterminados (pueden ser colores suaves y agradables para evitar distracciones).
    *   El useEffect debe limpiar el intervalo al desmontarse el componente.

1.  El diseño debe ser claro: si el usuario tiene una cookie username, debe mostrarse un mensaje como "Hola, \[nombre\]", con el nombre que esté en la cookie. Si no tiene cookie, debe mostrarse el formulario para ingresar el nombre.

Resultado esperado: Al entrar a la ruta /profile, si no existe la cookie username, se muestra el formulario para ingresar el nombre. Al enviar el formulario, se guarda la cookie y la página se actualiza para mostrar el saludo con el nombre. Además, el fondo de la página cambia de color automáticamente cada segundo.

  

La práctica se realizará en parejas, ambos participantes deberán entregar una release de GitHub directamente ejecutable al ser clonada, sin subdirectorios ni otros cambios por el estilo.

Ambos participantes en la entrega deben indicar a los dos participantes de la práctica. 

La práctica se entregará como un enlace de deno.deploy desplegado y funcional.

No cumplir cualquiera de estas indicaciones significará una evaluación automática con un 0.