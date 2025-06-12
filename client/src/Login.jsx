
import { useState } from 'react';

function Login({ setToken, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      const user = {
        token: data.token,
        email: email
      };
      localStorage.setItem("user", JSON.stringify(user));
      setToken(data.token);
      setPage("chat");
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Login</h2>
      <input className="border p-1 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="border p-1 w-full mt-1" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-1 mt-2" onClick={handleLogin} >Login</button>
    </div>
  );
}

export default Login;
