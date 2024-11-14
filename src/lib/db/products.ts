import prisma from '../prisma';

export async function getProducts() {
  return prisma.product.findMany({
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      }
    }
  });
}

export async function getProductById(id: number) {
  return prisma.product.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      }
    }
  });
}

export async function createProduct(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.product.create({
    data,
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      }
    }
  });
}

export async function updateProduct(id: number, data: Partial<Product>) {
  return prisma.product.update({
    where: { id },
    data,
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      }
    }
  });
}

export async function deleteProduct(id: number) {
  return prisma.product.delete({
    where: { id }
  });
}