import type { Employee } from '../types/employee';

export function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <article className="card">
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>
        {employee.department} · {employee.location}
      </p>
      <a href={`mailto:${employee.email}`}>{employee.email}</a>
      <p className={employee.isActive ? 'status active' : 'status inactive'}>
        {employee.isActive ? 'Active' : 'Inactive'}
      </p>
    </article>
  );
}
