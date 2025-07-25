# Tours app

Proyecto desarrollado con Next.js 14, cuyo objetivo principal es ofrecer a los usuarios una interfaz interactiva para explorar y gestionar tours consumiendo una API de tours.

La aplicación está construida siguiendo los principios de Clean Architecture y Atomic Design, lo que permite una separación clara de responsabilidades y facilita la escalabilidad y mantenibilidad del código.

Se utiliza React Query junto con Axios para la gestión eficiente de datos y las llamadas a la API, incorporando funcionalidades como caché, actualizaciones optimistas y paginación infinita. Además, se integran WebSockets para actualizar en tiempo real la cantidad de likes de los tours.

La interfaz está diseñada con Tailwind CSS, ofreciendo una experiencia visual moderna y adaptable. Según el caso de uso, se emplean componentes renderizados tanto en SSR (Server-Side Rendering) como en CSR (Client-Side Rendering).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
