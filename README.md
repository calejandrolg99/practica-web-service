# API REST para Gestión de Facultades, Escuelas, Secciones y Personas

Esta API REST, desarrollada utilizando Node.js y Express, la persistencia se hizo con un archivo JSON, ha sido diseñada e implementada para permitir la gestión de Facultades, Escuelas, Secciones y Personas. Proporciona operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para cada una de las entidades mencionadas, junto con funcionalidades adicionales para inscripciones y listado de estudiantes y profesores de una sección.

## Requisitos

- Docker
- Docker Compose

## Instalación y Ejecución

Sigue los siguientes pasos para instalar y ejecutar la aplicación:

1. Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/calejandrolg99/practica-web-service
```

2. Navega hasta el directorio del proyecto:
```bash
cd practica-web-service
```

3. Ejecuta Docker Compose para construir y ejecutar los contenedores de la aplicación:
```bash
docker-compose up
```

4. La aplicación estará disponible en `http://localhost:5000`.

## Documentación de la API

La documentación de la API se genera automáticamente utilizando Swagger. Puedes acceder a ella a través de la siguiente URL: `http://localhost:5000/api-docs`.