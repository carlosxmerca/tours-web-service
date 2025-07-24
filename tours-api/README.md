# Tours API

## Description

Tours API es un servicio backend desarrollado con NestJS que implementa una arquitectura limpia (Clean Architecture) para gestionar información turística. Está diseñado para ser escalable, modular y mantenible, facilitando la integración con diversos clientes y la evolución del producto.

## Installation

```bash
$ npm install
```

## Running prisma migrations

```bash
$ npx prisma migrate dev
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TODO
- Likes feature and real time update
- Swagger implementation
- CORS config
- Code documentation
- Unit tests using jest
- Code review to verify clean arch complience and SOLID principles
- Create Docker file and modify docker compose to lauch app ready to prod
- Update port config to be dynamic
- Add log startegy to track requests and latency
