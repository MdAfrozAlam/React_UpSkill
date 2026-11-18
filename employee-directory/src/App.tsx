import { EmployeeCard } from './features/employees/components/EmployeeCard';
import { employees } from './features/employees/data/employees';
import { AppHeader } from './shared/components/AppHeader';

function App() {
  const boss = employees.find((e) => e.id === 'nope');

  return (
    <>
      <AppHeader />
      <main className="container">
        <label htmlFor="search">Search employees</label>
        <p>Boss: {boss?.name ?? 'none'}</p>

        <input
        
        
        id="search" type="search" placeholder="Name, role or city…" />

        {employees.length === 0 ? (
          <p>No employees found</p>
        ) : (
          <ul className="grid">
            {employees.map((emp) => (
              <li>
                <EmployeeCard employee={emp} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
