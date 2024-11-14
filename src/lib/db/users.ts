import prisma from '../prisma';

export async function getUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      company: true,
      verified: true,
      createdAt: true,
      _count: {
        select: {
          products: true,
          requirements: true
        }
      }
    }
  });
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      products: true,
      requirements: true
    }
  });
}

export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.user.create({
    data
  });
}

export async function updateUser(id: number, data: Partial<User>) {
  return prisma.user.update({
    where: { id },
    data
  });
}

export async function deleteUser(id: number) {
  return prisma.user.delete({
    where: { id }
  });
}