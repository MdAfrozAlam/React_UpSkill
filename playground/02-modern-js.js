// 1️⃣ const vs let — use const by default, let only if the value changes
const company = 'SnapWork';
let count = 0;
count = count + 1; // ✅ allowed
// company = 'Other';       // ❌ TypeError: Assignment to constant variable

// 2️⃣ Arrow functions — a shorter way to write functions
const add = (a, b) => a + b;
console.log('add:', add(2, 3));

// 3️⃣ Destructuring — unpack values from objects/arrays
const employee = { id: 1, name: 'Asha', dept: 'IT', address: { city: 'Pune' } };
const { name, dept } = employee;
console.log('destructure:', name, dept);

// 4️⃣ Spread (...) — copy & update WITHOUT changing the original
const updated = { ...employee, dept: 'HR' };
console.log('original dept:', employee.dept, '| updated dept:', updated.dept);

// 5️⃣ Optional chaining ?. and nullish coalescing ??
const noAddress = { id: 2, name: 'Ravi' };
console.log('city:', noAddress.address?.city ?? 'Unknown');

// 6️⃣ ?? vs || — the classic trap
const stock = 0;
console.log('|| gives:', stock || 10); // 10  ❌ (0 is "falsy")
console.log('?? gives:', stock ?? 10); // 0   ✅ (only null/undefined replaced)

// 7️⃣ map / filter / reduce — the React trio
const team = [
  { id: 1, name: 'Asha', salary: 50000 },
  { id: 2, name: 'Ravi', salary: 70000 },
  { id: 3, name: 'Meera', salary: 60000 },
];
const names = team.map((e) => e.name);
const highPaid = team.filter((e) => e.salary > 55000);
const total = team.reduce((sum, e) => sum + e.salary, 0);
console.log({ names, highPaid, total });

// 8️⃣ Primitives vs references — WHY React needs copies
const a = { value: 1 };
const b = a; // b points to the SAME object
b.value = 99;
console.log('a.value:', a.value); // 99 😱

// Use map to build a list of strings like "Asha (₹50000)"
// 9 create a list of strings like "Asha ()"

const newLsitString = team.map((emp) => `${emp.name}  (₹${emp.salary})`);
console.log('new String list', newLsitString);

//Create a copy of employee with city changed to 'Mumbai' without changing the original. Hint: you need to spread twice, once for employee and once for address.

console.log(0 ?? 'x');
console.log(0 || 'x');

const originalObject = { name: 'Afroz', address: { city: 'Kokata' } };
//const copy1 = { ...originalObject, address: { ...originalObject.address } };
//copy1.address.city = 'Pune';

// console.log(originalObject.address.city, 'org');
// console.log(copy1.address.city, 'copy');

const deep = structuredClone(originalObject);
deep.address.city = 'Mumbai';

console.log(originalObject.address.city, 'org');
console.log(deep.address.city, 'deep');

const team1 = [
  { id: 1, name: 'Asha', salary: 50000 },
  { id: 2, name: 'Ravi', salary: 70000 },
  { id: 3, name: 'Meera', salary: 60000 },
];

// const sortetd = team1.sort((a, b) => b.salary - a.salary);
// console.log(sortetd);
// console.log(team1);

// const sortetd = team1.toSorted((a, b) => b.salary - a.salary);
// console.log(sortetd, 'sorted');
// console.log(team1, 'orginal');

const employee1 = { id: 1, name: 'Asha', dept: 'IT', address: { city: 'Pune' }, skills: ['js'] };
//console.log(employee1, 'emp1');

//1
const employee2 = { ...employee1, skills: [...employee1.skills, 'React'] };
//console.log(employee2, 'emp2');

const empFilter = { ...employee2, skills: employee2.skills.filter((emp) => emp !== 'js') };
console.log(empFilter, 'filter');
