export interface Requirement {
  id: number;
  title: string;
  category: string;
  quantity: string;
  budget: string;
  description: string;
  deadline: string;
  location: string;
  status: 'open' | 'in-progress' | 'closed';
  postedBy: {
    name: string;
    company: string;
    verified: boolean;
  };
  postedAt: string;
  responses: number;
}

export const sampleRequirements: Requirement[] = [
  {
    id: 1,
    title: "Industrial Grade Water Filtration System",
    category: "Industrial Supplies",
    quantity: "5",
    budget: "$15,000 - $25,000",
    description: "Looking for advanced water filtration systems capable of processing 1000 gallons per hour. Must meet ISO 9001 standards and include installation support.",
    deadline: "2024-04-15",
    location: "Toronto, Canada",
    status: "open",
    postedBy: {
      name: "Michael Chen",
      company: "PureFlow Industries",
      verified: true
    },
    postedAt: "2024-03-01T10:30:00Z",
    responses: 12
  },
  {
    id: 2,
    title: "Solar Panel Manufacturing Equipment",
    category: "Manufacturing",
    quantity: "1",
    budget: "$100,000 - $150,000",
    description: "Seeking automated equipment for solar panel assembly line. Must have capacity for 200 units per day with quality control systems.",
    deadline: "2024-05-20",
    location: "Gujarat, India",
    status: "in-progress",
    postedBy: {
      name: "Priya Patel",
      company: "SolarTech Solutions",
      verified: true
    },
    postedAt: "2024-02-28T15:45:00Z",
    responses: 8
  },
  {
    id: 3,
    title: "Bulk Order - Cotton Fabric",
    category: "Textiles",
    quantity: "10000",
    budget: "$40,000 - $50,000",
    description: "Need high-quality cotton fabric for clothing manufacturing. 100% organic cotton, 200 GSM. Multiple color options required.",
    deadline: "2024-04-01",
    location: "Istanbul, Turkey",
    status: "open",
    postedBy: {
      name: "Ahmed Yilmaz",
      company: "Fashion Fabrics Co.",
      verified: false
    },
    postedAt: "2024-03-02T09:15:00Z",
    responses: 5
  }
];