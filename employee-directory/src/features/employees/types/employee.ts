export type Department = 'IT' | 'HR' | 'Finance' | 'Operations';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: Department;
  email: string;
  location: string;
  isActive: boolean;
}
