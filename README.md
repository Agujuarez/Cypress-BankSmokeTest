# Cypress Tests for zero.webappsecurity.com

Este repositorio contiene pruebas automatizadas utilizando Cypress para la aplicación web zero.webappsecurity.com. Estas pruebas están diseñadas para verificar el correcto funcionamiento y la seguridad de la aplicación mediante la simulación de interacciones del usuario.

## Requisitos previos

Asegúrese de tener Node.js y npm instalados en su sistema antes de ejecutar las pruebas.

## Configuración

Clone este repositorio en su máquina local:

~~~
git clone https://github.com/tu-usuario/repo-cypress-zero-webappsecurity.git
~~~

## Instale las dependencias del proyecto:

~~~
cd repo-cypress-zero-webappsecurity
npm install
~~~

## Ejecutar las pruebas

Para ejecutar las pruebas, utilice el siguiente comando en el directorio del proyecto:

~~~
npm run test
~~~

Esto iniciará Cypress y ejecutará las pruebas en el navegador especificado en la configuración.

## Configuración del entorno

El archivo cypress.json contiene la configuración de Cypress. Asegúrese de revisar y ajustar las siguientes configuraciones según sea necesario:

* baseUrl: La URL base de la aplicación web.
* defaultCommandTimeout: El tiempo de espera predeterminado para los comandos de Cypress.

## Estructura del proyecto

El repositorio está estructurado de la siguiente manera:

* cypress/e2e: Contiene los archivos de prueba Cypress.
* cypress/support: Contiene archivos de soporte como comandos personalizados y configuración.
* cypress/reports/mochawesome: Contiene lor reportes de los test en formato json.