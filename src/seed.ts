import prisma from './prisma';

async function main() {
  const productos = [
    {
        titulo: "Baldosa",
        precio: "$1000000",
        descripcion: "1 (una) baldosa de cemento alisado.",
        imagen: "https://bara.com.ar/wp-content/uploads/2021/08/baldosa-cemento-alisado-render@2x.png",
    },  
    {
        titulo: "Nike Air Force One",
        precio: "$120",
        descripcion: "Shantas Naik.",
        imagen: "https://www.mrkicks.fr/cdn/shop/products/nike-air-force-1-low-white-orange-mr-kicks-1.png?v=1691178453&width=1500",
    },
    {
        titulo: "Bujia MR7C-9N",
        precio: "$54",
        descripcion: "bujia.",
        imagen: "https://mundimotos.com/cdn/shop/products/H31916-KSP-861_600x.png?v=1754721361",
    },
  ];

  await prisma.producto.createMany({ data: productos });
  console.log('✅ Productos iniciales creados');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
