import prisma from "../src/database/db.js";

async function main() {
  await prisma.genres.createMany({
    data: [
      {
        "name": "Comédia"
      },
      {
        "name": "Suspense"
      },
      {
        "name": "Ação"
      },
      {
        "name": "Desenho animado"
      }
    ]
  });

  await prisma.platforms.createMany({
    data: [
      {
        "name": "Netflix"
      },
      {
        "name": "Amazon Prime"
      },
      {
        "name": "Disney+"
      },
      {
        "name": "Globoplay"
      }
    ]
  });

  await prisma.movies.createMany({
    data: [
      {
        "name": "Se Beber, Não Case!",
        "genreId": 1,
        "platformId": 1,
        "status": false
      },
      {
        "name": "O Rei Leão",
        "genreId": 4,
        "platformId": 3,
        "status": false
      },
      {
        "name": "Garota Exemplar",
        "genreId": 2,
        "platformId": 2,
        "status": false
      },
      {
        "name": "Tropa de Elite",
        "genreId": 3,
        "platformId": 4,
        "status": false
      }
    ]
  });
}

main()
  .then(() => {
    console.log("Registration done successfully!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });