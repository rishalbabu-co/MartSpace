import { createContext, useContext, useState, ReactNode } from 'react';

interface Requirement {
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

interface RequirementsContextType {
  requirements: Requirement[];
  addRequirement: (requirement: Omit<Requirement, 'id' | 'status' | 'postedAt' | 'responses'>) => void;
}

const RequirementsContext = createContext<RequirementsContextType | undefined>(undefined);

export function RequirementsProvider({ children }: { children: ReactNode }) {
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const addRequirement = (newReq: Omit<Requirement, 'id' | 'status' | 'postedAt' | 'responses'>) => {
    const requirement: Requirement = {
      ...newReq,
      id: requirements.length + 1,
      status: 'open',
      postedAt: new Date().toISOString(),
      responses: 0
    };

    setRequirements(prev => [requirement, ...prev]);
  };

  return (
    <RequirementsContext.Provider value={{ requirements, addRequirement }}>
      {children}
    </RequirementsContext.Provider>
  );
}

export function useRequirements() {
  const context = useContext(RequirementsContext);
  if (context === undefined) {
    throw new Error('useRequirements must be used within a RequirementsProvider');
  }
  return context;
}