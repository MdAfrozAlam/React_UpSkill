import { EmployeeCard } from './features/employees/components/EmployeeCard';
import { employees } from './features/employees/data/employees';
import { AppHeader } from './shared/components/AppHeader';

function App() {
  return (
    <>
      <AppHeader />
      <main className="container">
        <label htmlFor="search">Search employees</label>
        <input id="search" type="search" placeholder="Name, role or city…" />

        {employees.length === 0 ? (
          <p>No employees found</p>
        ) : (
          <ul className="grid">
            {employees.map((emp) => (
              <li key={emp.id}>
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
