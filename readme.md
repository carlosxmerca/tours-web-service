# Tours Web Service

## tours-api

Tours API es un servicio backend desarrollado con NestJS, siguiendo principios de Clean Architecture para garantizar una solución escalable, modular y mantenible.

Su diseño facilita la integración con distintos clientes y permite la evolución del producto de manera ordenada.

- Utiliza Prisma como ORM, implementando un enfoque code-first para la gestión de migraciones y carga de datos iniciales (seeding).

- Expone endpoints a través del controlador `/tours`.

- Incluye un API Gateway con soporte para WebSockets, permitiendo a los clientes suscribirse y recibir actualizaciones en tiempo real.

##  Ejecución del backend (tours-api)

El siguiente comando:

- Descargará la imagen de PostgreSQL.
- Construirá la imagen para tours-api.
- Levantará la base de datos en el puerto 5432 y la API en el puerto 3001.
- Aplicará automáticamente migraciones y datos iniciales (seeds), facilitando la revisión y despliegue del módulo.

```
cd tours-api
docker compose up -d
```

### Ejecución de pruebas (tours-api)
El proyecto incluye 4 suites de pruebas con los siguientes objetivos:

- Verificar la lógica unitaria asociada a la entidad principal Tour.
- Validar que los controladores ejecuten correctamente los casos de uso.
- Comprobar que el caso de uso find tour by id retorne la información correcta.
- Confirmar que el servicio de Prisma exista y esté correctamente habilitado.

```
cd tours-api
npm run test
```

Resultado esperado:
![Test results](/images/tests.jpg)

### Open API (Swagger)
La documentación de esta API es accesible desde:
- http://localhost:3001/api

### Ejecución personalizada (opcional)
Si solo se desea levantar el contenedor de PostgreSQL, se puede ejecutar:

```
cd tours-api
docker compose up -d postgres
```

En este escenario, será necesario ejecutar manualmente las migraciones y los seeds antes de iniciar el proyecto en modo desarrollo:

```
npm install

npx prisma generate
npx prisma migrate deploy
npx prisma db seed

npm run start:dev
```

## web app tours-app

Proyecto desarrollado con Next.js 14, cuyo objetivo principal es ofrecer a los usuarios una interfaz interactiva para explorar y gestionar tours consumiendo una API de tours.

La aplicación está construida siguiendo los principios de Clean Architecture y Atomic Design, lo que permite una separación clara de responsabilidades y facilita la escalabilidad y mantenibilidad del código.

Se utiliza React Query junto con Axios para la gestión eficiente de datos y las llamadas a la API, incorporando funcionalidades como caché, actualizaciones optimistas y paginación infinita. Además, se integran WebSockets para actualizar en tiempo real la cantidad de likes de los tours.

La interfaz está diseñada con Tailwind CSS, ofreciendo una experiencia visual moderna y adaptable. Según el caso de uso, se emplean componentes renderizados tanto en SSR (Server-Side Rendering) como en CSR (Client-Side Rendering).

### Ejecución de la aplicación web

```
cd tours-app
npm run dev
```

### Interfaz de usuario (UI)

- Página principal
![Main page](/images/main.png)

- Detalle de tour
![Tour details page](/images/tour.png)

- Crear nuevo tour
![Create tour page](/images/create_tour.png)

### Workflows (videos)

- [Paginación y likes](videos/pagination_likes.mp4)

- [Crear tour](videos/create_tour.mp4)

- [Eliminar tour](videos/delete_tour.mp4)

## Alcaración sobre credenciales

El proyecto incluye archivos `.env` y `docker-compose.yaml` para facilitar el desarrollo local y demostraciones del sistema.

⚠️ Importante:

- En ambientes de producción, estos archivos no deben ser publicados ni compartidos bajo ninguna circunstancia.

- Si se realiza un fork del proyecto, se debe actualizar el archivo `.gitignore` para evitar exponer credenciales accidentalmente.
