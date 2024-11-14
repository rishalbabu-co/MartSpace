import prisma from '../prisma';

export async function getRequirements() {
  return prisma.requirement.findMany({
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      },
      responses: {
        select: {
          id: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export async function getRequirementById(id: number) {
  return prisma.requirement.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
          company: true,
          verified: true
        }
      },
      responses: {
        include: {
          user: {
            select: {
              name: true,
              company: true,
              verified: true
            }
          }
        }
      }
    }
  });
}

export async function createRequirement(data: Omit<Requirement, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.requirement.create({
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

export async function updateRequirement(id: number, data: Partial<Requirement>) {
  return prisma.requirement.update({
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

export async function deleteRequirement(id: number) {
  return prisma.requirement.delete({
    where: { id }
  });
}