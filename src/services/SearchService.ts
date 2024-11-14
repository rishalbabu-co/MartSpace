import prisma from '../lib/prisma';

export interface SearchResult {
  type: 'product' | 'industry' | 'business';
  id: number;
  name: string;
  description?: string;
  category?: string;
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export async function searchAll(query: string): Promise<SearchResult[]> {
  const results: SearchResult[] = [];

  // Search products
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } }
      ]
    },
    include: {
      user: {
        select: {
          company: true
        }
      }
    },
    take: 5
  });


  results.push(...companies.map(company => ({
    type: 'business' as const,
    id: company.id,
    name: company.name,
    description: company.description || undefined,
    location: `${company.city}, ${company.country}`
  })));

  return results;
}

export async function findNearbyProducts(lat: number, lng: number, radius: number = 50) {
  // Using Postgres' earthdistance extension for geospatial queries
  const nearbyProducts = await prisma.$queryRaw`
    SELECT 
      p.*,
      c.name as company_name,
      c.city,
      c.country,
      earth_distance(
        ll_to_earth(${lat}, ${lng}),
        ll_to_earth(cast(c.latitude as float), cast(c.longitude as float))
      ) as distance
    FROM "Product" p
    JOIN "Company" c ON p."userId" = c."userId"
    WHERE earth_box(ll_to_earth(${lat}, ${lng}), ${radius * 1000}) @> ll_to_earth(cast(c.latitude as float), cast(c.longitude as float))
    ORDER BY distance
    LIMIT 20
  `;

  return nearbyProducts;
}