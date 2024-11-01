import { createContext, useContext, useState, ReactNode } from 'react';
import { Requirement, sampleRequirements } from '../data/requirements';

interface RequirementsContextType {
  requirements: Requirement[];
  addRequirement: (requirement: Omit<Requirement, 'id' | 'status' | 'postedAt' | 'responses'>) => void;
}

const RequirementsContext = createContext<RequirementsContextType | undefined>(undefined);

export function RequirementsProvider({ children }: { children: ReactNode }) {
  const [requirements, setRequirements] = useState<Requirement[]>(sampleRequirements);

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