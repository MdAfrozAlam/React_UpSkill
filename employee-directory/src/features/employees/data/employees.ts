import type { Employee } from '../types/employee';

export const employees: Employee[] = [
  {
    id: 'e-101',
    name: 'Asha Verma',
    role: 'Frontend Developer',
    department: 'IT',
    email: 'asha@example.com',
    location: 'Pune',
    isActive: true,
  },
  {
    id: 'e-102',
    name: 'Ravi Kumar',
    role: 'HR Executive',
    department: 'HR',
    email: 'ravi@example.com',
    location: 'Delhi',
    isActive: false,
  },
  {
    id: 'e-103',
    name: 'Meera Nair',
    role: 'Accountant',
    department: 'Finance',
    email: 'meera@example.com',
    location: 'Kochi',
    isActive: true,
  },
  {
    id: 'e-104',
    name: 'Arjun Singh',
    role: 'Ops Manager',
    department: 'Operations',
    email: 'arjun@example.com',
    location: 'Mumbai',
    isActive: true,
  },
];
