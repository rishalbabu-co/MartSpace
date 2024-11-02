// Industry-specific keywords
export const industryKeywords = {
  manufacturing: [
    'industrial manufacturing',
    'manufacturing equipment',
    'manufacturing suppliers',
    'manufacturing solutions',
    'production machinery',
    'factory equipment',
    'industrial automation'
  ],
  electronics: [
    'electronic components',
    'electronic manufacturing',
    'electronic suppliers',
    'electronic parts',
    'semiconductors',
    'circuit boards',
    'electronic equipment'
  ],
  textiles: [
    'textile manufacturing',
    'fabric suppliers',
    'textile machinery',
    'clothing materials',
    'textile raw materials',
    'garment manufacturing',
    'textile equipment'
  ],
  construction: [
    'construction materials',
    'building supplies',
    'construction equipment',
    'construction machinery',
    'building materials',
    'construction tools',
    'construction solutions'
  ],
  agriculture: [
    'agricultural equipment',
    'farming machinery',
    'agricultural supplies',
    'farming tools',
    'agricultural products',
    'farming equipment',
    'agricultural solutions'
  ]
};

// Product type keywords
export const productTypeKeywords = {
  machinery: [
    'industrial machinery',
    'manufacturing equipment',
    'production machinery',
    'automated machinery',
    'processing equipment'
  ],
  components: [
    'industrial components',
    'spare parts',
    'machine parts',
    'replacement components',
    'industrial supplies'
  ],
  materials: [
    'raw materials',
    'industrial materials',
    'manufacturing materials',
    'production materials',
    'bulk materials'
  ],
  tools: [
    'industrial tools',
    'manufacturing tools',
    'production tools',
    'professional tools',
    'specialized tools'
  ]
};

// Generate SEO description for products
export function generateProductDescription(product: {
  name: string;
  category: string;
  supplier: string;
  price?: string;
  moq?: string;
}) {
  return `Buy ${product.name} from ${product.supplier} on MartSpace. High-quality ${
    product.category
  } available${product.price ? ` from ${product.price}` : ''}${
    product.moq ? ` with MOQ ${product.moq}` : ''
  }. Find verified suppliers, competitive prices, and secure B2B trading on MartSpace.`;
}

// Generate SEO keywords for products
export function generateProductKeywords(product: {
  name: string;
  category: string;
  supplier: string;
}) {
  const baseKeywords = [
    product.name,
    product.category,
    product.supplier,
    'B2B marketplace',
    'wholesale',
    'bulk order',
    'supplier',
    'manufacturer'
  ];

  const industryKeys = industryKeywords[product.category.toLowerCase() as keyof typeof industryKeywords] || [];
  const typeKeys = productTypeKeywords[getProductType(product.name)] || [];

  return [...new Set([...baseKeywords, ...industryKeys, ...typeKeys])];
}

// Helper function to determine product type
function getProductType(productName: string): keyof typeof productTypeKeywords {
  const name = productName.toLowerCase();
  if (name.includes('machinery') || name.includes('equipment')) return 'machinery';
  if (name.includes('component') || name.includes('part')) return 'components';
  if (name.includes('material') || name.includes('supply')) return 'materials';
  return 'tools';
}