import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userGabriel = await prisma.usuario.create({
    data: {
      id_usuario: 1, 
      nome: 'Gabriel',
      email: 'gabriel@example.com',
      senha: 'gabriel1234',
      telefone: '123456789',
    },
  });

  const userCaio = await prisma.usuario.create({
    data: {
      id_usuario: 2, 
      nome: 'Caio',
      email: 'caio@example.com',
      senha: 'caio1234',
      telefone: '123456789',
    },
  });

  const garage1 = await prisma.garagem.create({
    data: {
      descricao: 'Garagem coberta',
      endereco: 'Rua A, 123, Cidade B',
      latitude: -23.550520,
      longitude: -46.633308,
      preco_Hora: 10.0,
      disponivel: true,
      id_usuario: userGabriel.id_usuario,
    },
  });

  const garage2 = await prisma.garagem.create({
    data: {
      descricao: 'Garagem descoberta',
      endereco: 'Rua C, 456, Cidade D',
      latitude: -23.551520,
      longitude: -46.634308,
      preco_Hora: 15.0,
      disponivel: true,
      id_usuario: userCaio.id_usuario,
    },
  });

  await prisma.agenda.createMany({
    data: [
      {
        id_garagem: garage1.id_garagem,
        dia: new Date('2024-08-15'),
        hora_inicio: new Date('2024-08-15T08:00:00Z'),
        hora_fim: new Date('2024-08-15T12:00:00Z'),
        disponivel: true,
      },
      {
        id_garagem: garage1.id_garagem,
        dia: new Date('2024-08-15'),
        hora_inicio: new Date('2024-08-15T13:00:00Z'),
        hora_fim: new Date('2024-08-15T17:00:00Z'),
        disponivel: true,
      },
      {
        id_garagem: garage2.id_garagem,
        dia: new Date('2024-08-15'),
        hora_inicio: new Date('2024-08-15T09:00:00Z'),
        hora_fim: new Date('2024-08-15T12:00:00Z'),
        disponivel: true,
      },
      {
        id_garagem: garage2.id_garagem,
        dia: new Date('2024-08-15'),
        hora_inicio: new Date('2024-08-15T14:00:00Z'),
        hora_fim: new Date('2024-08-15T18:00:00Z'),
        disponivel: true,
      },
    ],
  });

  console.log('Seed data created successfully.');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
