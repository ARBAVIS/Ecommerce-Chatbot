// ======== client/src/Signup.jsx ========
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
      <input className="border p-1 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="border p-1 w-full mt-1" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-1 mt-2" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
