import type { Employee } from '../types/employee';
import styles from './EmployeeCard.module.css';
import { useState } from 'react';
import { Dialog } from '../../../shared/components/Dialog';

type EmployeeCardProps = {
  employee: Employee;
  showEmail?: boolean;
};

export function EmployeeCard({ employee, showEmail = true }: EmployeeCardProps) {
  // inside EmployeeCard, before return:
  const [open, setOpen] = useState(false);
  return (
    <article className={styles.card}>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>
        {employee.department} · {employee.location}
      </p>
      {showEmail && <a href={`mailto:${employee.email}`}>{employee.email}</a>}
      <p className={employee.isActive ? styles.active : styles.inactive}>
        {employee.isActive ? 'Active' : 'Inactive'}
      </p>
      <button type="button" onClick={() => setOpen(true)}>
        View details
      </button>

      <Dialog open={open} title={employee.name} onClose={() => setOpen(false)}>
        <p>
          {employee.role} · {employee.department} · {employee.location}
        </p>
      </Dialog>
    </article>
  );
}
