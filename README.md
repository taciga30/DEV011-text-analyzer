# Proyecto 1: "Text Analyzer"
En el siguiente enlace podrás acceder a la visualización del proyecto:

https://taciga30.github.io/DEV011-text-analyzer/src/index

En el siguiente enlace podrás acceder a la visualización del proyecto:

https://taciga30.github.io/DEV011-text-analyzer/src/index

## Introducción

Este proyecto se desarrolló dentro del contexto del Bootcamp de Desarrollo Web de Laboratoria de DEV011 como proyecto inicial denominado "Text Analyzer" donde a través del desarrollo de este se abarcan unos objetivos de aprendizaje planteados para adquirir unos conocimientos necesarios en HTML, CSS, JavaScript, Web APIs, Git y GitHub, y unos requerimientos mínimos de aceptación.

## 1. Generalidades

* Este proyecto se resolvió de manera individual.
* El proyecto se completó en 3 Sprints (1 semana por Sprint).

## 2. Acerca del Proyecto

### Resumen del proyecto

Aplicación web donde la usuaria puede analizar un texto en el navegador ingresado por ella 
mostrándole unas métricas específicas sobre caracteres, letras, números, etc. 

### Funcionalidades

1. La aplicación permite a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: Cuenta el número de palabras en el texto de entrada y muestra este recuento a la usuaria.
    - **Recuento de caracteres**: Cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y     muestra este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**: Cuenta el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y muestra este recuento a la usuaria.  
    - **Recuento de números**: Cuenta cúantos números hay en el texto de entrada y muestra este recuento a la usuaria.
    - **Suma total de números**: Suma todos los números que hay en el texto de entrada y muestra el resultado a la usuaria.
    - **Longitud media de las palabras**: Calcula la longitud media de las palabras en el texto de entrada y lo muestra a la usuaria.

3. La aplicación limpia el contenido de la caja de texto haciendo clic en el botón "Limpiar".

### Criterios de aceptación mínimos del proyecto

Estos son los criterios de aceptación mínimos del proyecto cumplidos, relacionados con cada objetivo de aprendizaje.

### HTML

* **Uso de HTML semántico**

  ✅ La aplicación tiene un encabezado conformado por un `<header>` padre de un `<h1>` con texto `Analizador de texto`. sin atributos `id`, ni `name`, ni `class`.
  
  ✅ La aplicación usa un `<textarea>` con el atributo `name` en el valor `user-input` para permitir a la usuaria ingresar un texto, sin atributos `id`, ni `class`.
  
  ✅ La aplicación usa un `<ul>` con 6 hijos `<li>`, cada uno para mostrar cada métrica, sin atributos `id` ni `name` ni hijos.
  
  ✅ El `<li>` para mostrar el _recuento de palabras_ tiene un atributo `data-testid` con valor `word-count`.
  
  ✅ El `<li>` para mostrar el _recuento de caracteres_ tiene un atributo `data-testid` con valor `character-count`.
  
  ✅ El `<li>` para mostrar el _recuento de caracteres excluyendo espacios y signos de puntuación_ tiene un atributo
  `data-testid` con valor `character-no-spaces-count`.

  ✅ El `<li>` para mostrar el _recuento de números_ tiene un atributo `data-testid` con valor `number-count`.

  ✅ El `<li>` para mostrar la _suma total de números_ tiene un atributo `data-testid` con valor `number-sum`.

  ✅ El `<li>` para mostrar la _longitud media de palabras_ tiene un atributo `data-testid` con valor `word-length-average`.

  ✅ La aplicación tiene un pie de página conformado por un `<footer>` que es padre de un `<p>` que tiene como texto el nombre de la estudiante desarrolladora de la aplicación, sin atributos `id`, ni `name`, ni `class`.

  ✅ La aplicación usa un `<button>` con el atributo `id` en el valor `reset-button` que le permite a la usuaria, mediante un clic, 
  limpiar el contenido de la caja de texto.

### CSS

* **Uso de selectores de CSS**  

  ✅ La aplicación usa `selectores CSS de tipo` para darle estilo al `<header>` y al `<footer>`.
  
  ✅ La aplicación usa `selectores CSS de class` para darle estilo a los `<li>`.
  
  ✅ La aplicación usa `selectores de atributo` para darle estilo al `<textarea>` usando el atributo `name`.

  ✅ La aplicación usa `selectores CSS de ID` para darle estilo al `<button>` con el atributo `id` en el valor `reset-button`.

* **Modelo de caja (box model): border, margen, padding**

  ✅ Las `clases css` de los `<li>` hijos del `<ul>` definen un estilo usando las propiedades del modelo de caja. (`background`,
  `border`, `margin`, `padding`).

### Web APIs

* **Uso de selectores del DOM**

  ✅ La aplicación usa el `selector del DOM querySelector`.

  ✅ La aplicación usa el `selector del DOM getElementById`.
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  ✅ La aplicación registra un Event Listener para escuchar el evento `keyup` del `<textarea>` para actualizar las métricas
  cuando se escriba en el cuadro de texto.

  ✅ La aplicación registra un Event Listener para escuchar el evento `click` del `<button>` que limpia el contenido de la
  caja de texto.

* **Manipulación dinámica del DOM**
  ✅ La aplicación actualiza el atributo `innerHTML` de los `<li>` que mostrar las métricas del texto.

### JavaScript

* **Tipos de datos primitivos**

  ✅ La aplicación convierte valores tipo `string` a tipo `number`.

* **Strings (cadenas de caracteres)**

  ✅ La aplicación usa métodos para manipular strings como `split` y `replace`.

* **Variables (declaración, asignación, ámbito)**

  ✅ La aplicación declara variables con `let` y `const`.

  ✅ La aplicación NO declara variables con  `var`.

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  ✅ La aplicación usa el statement `if..else` para evaluar condiciones.

* **Uso de bucles/ciclos (while, for, for..of)**

  ✅ La aplicación usa el statement `for` para crear un bucle.

* **Funciones (params, args, return)**

  ✅ El objeto `analyzer` contiene un método `getWordCount` para calcular el recuento de palabras de un texto.

  ✅ El objeto `analyzer` contiene un método `getCharacterCount` para calcular el recuento de caracteres de un texto.

  ✅ El objeto `analyzer` contiene un método `getCharacterCountExcludingSpaces` para calcular el recuento de caracteres 
  excluyendo espacios y signos de puntuación de un texto.

  ✅ El objeto `analyzer` contiene un método `getNumbersCount` para contar cúantos números hay en un texto.

  ✅ El objeto `analyzer` contiene un método `getNumbersSum` para la suma longitud media de los números en un texto.

  ✅ El objeto `analyzer` contiene un método `getAverageWordLength` para calcular la longitud media de las palabras en un texto.

* **Pruebas unitarias (unit tests)**

  ✅ Se pasan todas las pruebas unitarias.

* **Módulos de ECMAScript (ES Modules)**

  ✅ La aplicación usa `import` y `export` para importar y exportar valores desde un modulo JavaScript.

* **Uso de linter (ESLINT)**

  ✅ Al ejecutar el linter no se muestran errores de formato y estilo.

* **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

  ✅ En el código se utilizan identificadores descriptivos para variablesy funciones.

### Control de Versiones (Git y GitHub)

* **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  ✅ La estudiante creó una cuenta en Github.

  ✅ La estudiante configuró su cuenta de Github con una llave SSH.

* **Git: Control de versiones con git (clone, add, commit, push)**

  ✅ La estudiante creó un _fork_ para su proyecto.

  ✅ La estudiante clonó su repositorio usando una llave SSH.

  ✅ La estudiante creó _commits_ y los guardó en Github.

* **GitHub: Despliegue con GitHub Pages**

  ✅ La aplicación está desplegada en Github Pages.

### Centrado en la usuaria

  ✅ Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro.

### Diseño de producto

* **Diseñar en distintos niveles de fidelidad**

  ✖️ La estudiante creó prototipos de baja fidelidad para la UI (interfaz gŕafica).

* **Seguir los principios básicos de diseño visual**

  ✅ Se tuvieron en cuenta las reglas básica del diseño visual para diseñar la UI (interfáz gráfica)

## Pruebas

Se corrieron los 3 conjuntos de pruebas para conocer si se cumplían los criterios mínimos de aceptación.

### Pruebas unitarias

Las pruebas unitarias de este proyecto ejecutaron los métodos `getWordCount`, `getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`, `getNumbersSum` y `getAverageWordLength` con diferentes argumentos y se confirmó que los valores retornados fueran los esperados.

Estas pruebas se realizaron con el comando `npm run test`.

### Pruebas de criterios mínimos de aceptación

Estas pruebas analizaron los archivos `index.html`, `index.js`, `analyzer.js` y `style.css` para verificar que se cumpliera con los
criterios minimos de aceptacion, cada uno relacionado con un objetivo de aprendizaje.

Estas pruebas se realizaron con el comando `npm run test:oas`.

También se ejecutaron las pruebas de cada grupo de objetivos de aprendizaje de manera individual con los siguientes comandos:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Estas pruebas se realizaron con el comando `npm run test:e2e`.

## 3. Objetivos de aprendizaje

A continuación se enlistan los objetivos de aprendizaje propuestos para este proyecto.
### HTML

- Uso de HTML semántico

### CSS

- Uso de selectores de CSS

- Modelo de caja (box model): borde, margen, padding

### Web APIs

- Uso de selectores del DOM

- Manejo de eventos del DOM (listeners, propagación, delegación)

- Manipulación dinámica del DOM*

### JavaScript

- Tipos de datos primitivos

- Strings (cadenas de caracteres)

- Variables (declaración, asignación, ámbito)

- Uso de condicionales (if-else, switch, operador ternario, lógica booleana)

- Uso de bucles/ciclos (while, for, for..of)

- Funciones (params, args, return)

- Pruebas unitarias (unit tests)

- Módulos de ECMAScript (ES Modules)

- Uso de linter (ESLINT)

- Uso de identificadores descriptivos (Nomenclatura y Semántica)

### Control de Versiones (Git y GitHub)

- Git: Instalación y configuración

- Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)

- GitHub: Creación de cuenta y repos, configuración de llaves SSH

- GitHub: Despliegue con GitHub Pages

### Centrado en el usuario

- Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro

### Diseño de producto

- Diseñar en distintos niveles de fidelidad

- Seguir los principios básicos de diseño visual


