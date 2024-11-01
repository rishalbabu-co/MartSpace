import prisma from '../prisma';
import type { Response } from '@prisma/client';

export async function getResponses(requirementId: number) {
  return prisma.response.findMany({
    where: {
      requirementId
    },
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export async function createResponse(data: Omit<Response, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.response.create({
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

export async function updateResponse(id: number, data: Partial<Response>) {
  return prisma.response.update({
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

export async function deleteResponse(id: number) {
  return prisma.response.delete({
    where: { id }
  });
}