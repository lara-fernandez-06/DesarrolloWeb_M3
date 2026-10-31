Misión M3 · React Core — Web Development I.

## Cómo probarlo
Ejecuta 'npm run dev' para ver la página en el navegador. Inmeadiatamente, tendrás todas las runas a tu disposición con sus nombres y significados. Si quieres buscar
una runa en concreto o un significado en concreto, puedes hacer uso del buscador, que al darle al enter te enseñará las runas que coinciden. Haz click en cualquier
tarjeta para darle la vuelta y ver su uso práctico y un verso de un poema antiguo relacionado con ella.

## Uso de IA
Usé Gemini como pareja de programación: como trabajaba sobre una web ya creada por mi de la M2, Gemini me ha ayudado a comprender conceptos del react y sobre todo el funcionamiento de los hooks.
También le he pedido consejo para temas de limpieza y buenas prácticas del código, así como para identificar errores-

Ejemplo de prompt real: "the infoCards are recieving their info well, i can see it on the debugger, but the info isnt being rendered on the cards. any ideas?"

Hice a mano: la organización de los archivos, y separar las funciones en las formas que más me convenían, a parte de escribir el código que no
le especifiqué a la ia, porque tampoco le di todos los datos, y principalmente en las consultas de js le pedía cosas o hacía preguntas concretas
en vez de pedirle que me hiciese funciones o archivos enteros, porque yo quería entender lo que hacía.

## Autopsia
Al principio intente importar todas las funciones que tenia hechas de la misión dos para poder reutlizarlas, pero eso significaba que cada vez que el usuario hace 
una búsqueda se tiene que llamar a una función asíncrona, la cual gestiono desde un useEffect, que obliga a poner la función que recoge el valor del input de la
barra de búsqueda en la lista de dependencias. En lugar de eso, Gémini sugirió hacer el useEffect menos veces, y sacar el filter al propio componente, lo cual
mejoraba el rendimiento y aumentaba la legibilidad.
