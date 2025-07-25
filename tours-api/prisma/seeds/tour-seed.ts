import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tourCount = await prisma.tour.count();

  if (tourCount > 0) {
    console.log('🚫 La tabla Tour ya tiene datos. No se ejecuta el seed.');
    return;
  }

  await prisma.tour.createMany({
    data: [
      {
        name: 'Ruta de las Flores',
        address: 'Ahuachapán y Sonsonate',
        description:
          'Un recorrido escénico por pueblos coloridos como Juayúa, Apaneca y Ataco, famosos por su café, arte y clima fresco.',
        image:
          'https://everythingelsalvador.com/wp-content/uploads/2023/02/Ruta-de-las-Flores-El-Salvador.webp',
      },
      {
        name: 'Suchitoto',
        address: 'Suchitoto, Cuscatlán',
        description:
          'Un encantador pueblo colonial con calles empedradas, arte local, y vistas al Lago Suchitlán.',
        image:
          'https://everythingelsalvador.com/wp-content/uploads/2021/09/Things-to-do-in-Suchitoto-El-Salvador-1800x1200.jpg',
      },
      {
        name: 'Volcán de Santa Ana',
        address: 'Santa Ana, El Salvador',
        description:
          'El volcán más alto de El Salvador, ideal para senderismo y con una laguna verde esmeralda en el cráter.',
        image:
          'https://salvadoreantours.com/es/wp-content/uploads/sites/2/2019/09/Complejo-los-Volcanes-2-967x1024.jpg',
      },
      {
        name: 'Playa El Tunco',
        address: 'La Libertad, El Salvador',
        description:
          'Popular entre surfistas y mochileros, con atardeceres espectaculares y vida nocturna vibrante.',
        image:
          'https://www.adventurouskate.com/wp-content/uploads/2015/04/DSC_0037.jpg',
      },
      {
        name: 'Joya de Cerén',
        address: 'San Juan Opico, La Libertad',
        description:
          "Sitio arqueológico Patrimonio de la Humanidad, conocido como la 'Pompeya de América', preserva una aldea maya del siglo VII.",
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/aa/1d/caption.jpg?w=1200&h=-1&s=1',
      },
      {
        name: 'Cerro Verde',
        address: 'Complejo Los Volcanes, Santa Ana',
        description:
          'Parque natural con senderos entre neblina, flora y fauna, y vistas hacia los volcanes Izalco y Santa Ana.',
        image:
          'https://www.visitcentroamerica.com/wp-content/uploads/2017/08/ver-centroamerica-cerro-verde-el-salvador-08.jpg',
      },
      {
        name: 'Lago de Coatepeque',
        address: 'Santa Ana, El Salvador',
        description:
          'Impresionante lago de origen volcánico con aguas azul turquesa, ideal para nadar, comer mariscos y disfrutar de la vista.',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/33/4a/82/caption.jpg?w=900&h=500&s=1',
      },
      {
        name: 'Tazumal',
        address: 'Chalchuapa, Santa Ana',
        description:
          'Impresionantes ruinas mayas que muestran la antigua civilización precolombina en El Salvador.',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/34/b6/e9/cartoline-da-tazumal.jpg?w=1200&h=-1&s=1',
      },
      {
        name: 'El Boquerón',
        address: 'Volcán de San Salvador',
        description:
          'Cráter volcánico ubicado en el Parque Nacional El Boquerón con senderos cortos y vistas panorámicas.',
        image:
          'https://turismo.sv/wp-content/uploads/2019/06/el-boqueron-1.jpg',
      },
    ],
  });
  console.log('Seeds insertados con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
