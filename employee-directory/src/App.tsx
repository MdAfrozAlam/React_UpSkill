import { EmployeeCard } from './features/employees/components/EmployeeCard';
import { employees } from './features/employees/data/employees';
import { AppHeader } from './shared/components/AppHeader';
import { Panel } from './shared/components/Panel';
import { useState } from 'react';
import { SearchBar } from './shared/components/SearchBar';
import { DepartmentFilter } from './features/employees/components/DepartmentFilter';
import { EmptyState } from './shared/components/EmptyState';
import type { Employee } from './features/employees/types/employee';
type Status = 'loading' | 'error' | 'ready';
const status: Status = 'ready';
function App() {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('All');

  // calculate the filtered list (no extra state needed)
  const text = query.trim().toLowerCase();
  const visible = employees.filter((e) => {
    const deptOk = dept === 'All' || e.department === dept;
    const textOk = e.name.toLowerCase().includes(text) || e.location.toLowerCase().includes(text);
    return deptOk && textOk;
  });
  return (
    <>
      <AppHeader />

      <main className="container">
        <SearchBar value={query} onChange={setQuery} />
        <DepartmentFilter value={dept} onChange={setDept} />
        <EmployeeSection status={status} list={visible} />
      </main>
    </>
  );
}

function EmployeeSection({ status, list }: { status: Status; list: Employee[] }) {
  if (status === 'loading') return <p role="status">Loading…</p>;
  if (status === 'error') return <p role="alert">Something went wrong.</p>;
  if (list.length === 0) return <EmptyState message="No employees match your search"></EmptyState>;
  return (
    <Panel title={`Team (${list.length})`}>
      <ul className="grid">
        {list.map((emp) => (
          <li key={emp.id}>
            <EmployeeCard employee={emp} showEmail={emp.isActive} />
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export default App;
