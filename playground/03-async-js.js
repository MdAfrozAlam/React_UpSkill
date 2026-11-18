// 1️⃣ Event loop order — guess the output BEFORE running!
// console.log('A: start');
// setTimeout(() => console.log('B: timeout'), 0);
// Promise.resolve().then(() => console.log('C: promise'));
// console.log('D: end');

// A, D, C, B  Output

// 2️⃣ A fake "server" that answers after a delay
const fakeApi = (ms, shouldFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('Seerror'));
      else resolve({ id: 1, name: 'Asha' });
    }, ms);
  });

// 3️⃣ async/await + try/catch
const loadEmployee = async () => {
  try {
    const emp = await fakeApi(500,true);
    console.log('loaded:', emp.name);
  } catch (err) {
    console.log('failed:', err.message);
  }
};
//loadEmployee();

// 4️⃣ Real fetch — with response.ok check + timeout cancel
const getUser = async () => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 1); // cancel after 3s

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/999999', {
      signal: controller.signal,
    });
     if (!res.ok) throw new Error(`HTTP ${res.status}`); // fetch does NOT throw on 404/500!
    const user = await res.json();
    console.log('user:', user.name);
  } catch (err) {
    if (err.name === 'AbortError') console.log('⏱️ request timed out');
    else console.log('fetch failed:', err.message);
  } finally {
    clearTimeout(timer); // always clean up
  }
};
//getUser();

// 5️⃣ Run things in parallel
// const loadAll = async () => {
//   const [a, b] = await Promise.all([fakeApi(300), fakeApi(300, true)]);
//   console.log('both done:', a.id, b.id); // ~300ms total, not 600ms
// };
// loadAll();

// const loadAllSettled = async () => {
//   try {
//     const results = await Promise.allSettled([fakeApi(300), fakeApi(300, true)]);
//   console.log(results);
//   } catch (error) {
//     console.error(error);
//     console.log(error, 'errroooo')
    
//   }
// };
// loadAllSettled();

const loadAllSettled = async () => {
  const results = await Promise.allSettled([fakeApi(300), fakeApi(300, true)]);

  results.forEach((r) => {
    if (r.status === 'fulfilled') console.log('✅', r.value.name);
    else console.log('❌', r.reason.message);
  });
};

loadAllSettled();
