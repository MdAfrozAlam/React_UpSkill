const departments = ['All', 'IT', 'HR', 'Finance', 'Operations'];

type DepartmentFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export function DepartmentFilter({ value, onChange }: DepartmentFilterProps) {
  return (
    <div>
      <label htmlFor="dept">Department</label>
      <select id="dept" value={value} onChange={(e) => onChange(e.target.value)}>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}
