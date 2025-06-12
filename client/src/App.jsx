
import { useState } from 'react';
import Signup from "./Signup"
import Login from './Login';
import ChatBot from './ChatBot'

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [token, setToken] = useState(user.token || "");
  const [page, setPage] = useState(user.token ? "chat" : "signup");

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("user");
    setPage("signup");
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">🛒 Welcome to ShopBot</h1>
          {page === "signup" && (
            <>
              <Signup />
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button className="text-purple-600 underline" onClick={() => setPage("login")}>Login here</button>
              </p>
            </>
          )}
          {page === "login" && (
            <>
              <Login setToken={setToken} setPage={setPage} />
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button className="text-purple-600 underline" onClick={() => setPage("signup")}>Sign up here</button>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  if (page === "chat") {
    return <ChatBot token={token} onLogout={handleLogout} />;
  }
}


export default App
