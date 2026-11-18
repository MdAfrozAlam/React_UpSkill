// 🐞 Day 1 · Step 8 — Debugging exercise
// This code has 5 bugs. It "runs", but it does the wrong thing.
// Run it:  node playground/08-broken-fetch.js
// Goal: it should print "Name: Leanne Graham" and exit right away.

const getUser = async (id) => {
  const controller = new AbortController();
  const timer=setTimeout(() => controller.abort(), 3000);

  https://jsonplaceholder.typicode.com/users

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      signal: controller.signal,
    });

    if(!res.ok){
      throw new Error("Something wen t wrong");
      

    }

    //console.log(res, 'response==>');
    
    const user = await res.json();
    //console.log(user, 'useer==');
    console.log('Name:', user.name);
  } catch (err) {
     if (err.name === 'AbortError') console.log('⏱️ request timed out');
    console.log(err);
  }
  finally{
    clearTimeout(timer)
  }
};

getUser(1);
