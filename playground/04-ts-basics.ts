// 1️⃣ Basic types
const company: string = 'SnapWork';
let headcount: number = 120;
const isHiring: boolean = true;
// headcount = 'many'; // ❌ Type 'string' is not assignable to type 'number'

// 2️⃣ Describe an object's shape
type Department = 'IT' | 'HR' | 'Finance'; // union: only these 3 allowed

interface Employee {
  id: number;
  name: string;
  dept: Department;
  email?: string; // optional
  readonly joinedOn: string; // can't be changed after creation
}

const asha: Employee = { id: 1, name: 'Asha', dept: 'IT', joinedOn: '2024-01-10' };
// const bad: Employee = { id: 2, name: 'Ravi', dept: 'Sales', joinedOn: '' }; // ❌ 'Sales' not allowed
// asha.joinedOn = '2025-01-01'; // ❌ readonly

// 3️⃣ Typed functions — input types and return type
const formatEmployee = (e: Employee): string => `${e.name} (${e.dept})`;
console.log(formatEmployee(asha));

// 4️⃣ Optional field → must handle "maybe undefined"
const getEmail = (e: Employee): string => e.email ?? 'no email';
console.log(getEmail(asha));

// 5️⃣ Generics — one function, many types, still safe
const firstItem = <T>(items: T[]): T | undefined => items[0];
const firstEmp = firstItem([asha]); // type: Employee | undefined
const firstNum = firstItem([10, 20]); // type: number | undefined
console.log(firstEmp?.name, firstNum);

// 6️⃣ unknown vs any — data from outside (API, JSON) is unknown
const raw: unknown = JSON.parse('{"id": 5, "name": "Meera"}');
// console.log(raw.name); // ❌ 'raw' is of type 'unknown' — good, it forces a check!

const isEmployeeLike = (value: unknown): value is { id: number; name: string } =>
  typeof value === 'object' &&
  value !== null &&
  'id' in value &&
  typeof value.id === 'number' &&
  'name' in value &&
  typeof value.name === 'string';

if (isEmployeeLike(raw)) {
  console.log('safe:', raw.name); // ✅ TypeScript now knows the shape
}

// 7️⃣ Union + narrowing — handle each case
type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: Employee[] };

const describe = (s: LoadState): string => {
  switch (s.status) {
    case 'loading':
      return 'Loading…';
    case 'error':
      return `Error: ${s.message}`; // message exists only here
    case 'success':
      return `${s.data.length} employees`;
  }
};
console.log(describe({ status: 'success', data: [asha] }));
