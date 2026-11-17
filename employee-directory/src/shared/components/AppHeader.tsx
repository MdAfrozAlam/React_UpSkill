export function AppHeader() {
  return (
    <header className="app-header">
      <h1>Employee Directory</h1>
      <nav aria-label="Main">
        <a href="/" aria-current="page">Employees</a>
        <a href="/departments">Departments</a>
      </nav>
    </header>
  );
}
