// ✅ toSorted: original untouched
const bySalaryDesc = team.toSorted((a, b) => b.salary - a.salary);
console.log(bySalaryDesc.map((e) => e.name)); // [ 'Ravi', 'Meera', 'Asha' ]
console.log(team.map((e) => e.name));         // [ 'Asha', 'Ravi', 'Meera' ] ✅ unchanged

// ❌ sort: original is reordered
const sorted = team.sort((a, b) => b.salary - a.salary);
console.log(team.map((e) => e.name));         // [ 'Ravi', 'Meera', 'Asha' ] 😱
console.log(sorted === team);                 // true → it's the SAME array
