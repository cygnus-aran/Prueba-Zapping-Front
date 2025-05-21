# Prueba Técnica Zapping - Frontend

Este proyecto fue creado como parte de una prueba técnica para Zapping. Es una aplicación frontend desarrollada con Angular que implementa un sistema de autenticación y un reproductor de video protegido.

## Características

- Página de inicio de sesión
- Página de registro de usuarios
- Reproductor de video protegido (solo accesible para usuarios autenticados)
- Diseño responsivo con Bootstrap
- Validación de formularios
- Guardias de autenticación para rutas protegidas

## Requisitos

Para ejecutar este proyecto necesitas tener instalado:

- Node.js (v18.0.0 o superior)
- npm (v8.0.0 o superior)
- Angular CLI (v19.0.0)
- Un navegador web moderno (Chrome, Firefox, Edge, etc.)

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/prueba-zapping.git
cd prueba-zapping
```

2. Instala las dependencias:

```bash
npm install
```

## Ejecución del servidor de desarrollo

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

Luego, abre tu navegador y ve a `http://localhost:4200/`.

La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Estructura del proyecto

El proyecto contiene los siguientes componentes principales:

- **LoginComponent**: Formulario de inicio de sesión
- **RegistrationComponent**: Formulario de registro de usuarios
- **PlayerComponent**: Reproductor de video (protegido por AuthGuard)
- **AuthService**: Servicio para manejar la autenticación
- **AuthGuard**: Guardia para proteger rutas que requieren autenticación

## Uso

1. Al abrir la aplicación, serás dirigido a la página de inicio de sesión.
2. Puedes iniciar sesión con cualquier email y contraseña (implementación de prueba).
3. También puedes crear una nueva cuenta en la página de registro.
4. Una vez autenticado, serás redirigido al reproductor de video.
5. El reproductor tiene un botón para cerrar sesión y volver a la página de inicio.

## Notas adicionales

- Este es un proyecto de prueba y no se conecta a un backend real.
- La autenticación es simulada y almacenada en localStorage.
- Para una implementación real, se necesitaría conectar con una API de backend.

---

Desarrollado con Angular 19 y Bootstrap 5.
