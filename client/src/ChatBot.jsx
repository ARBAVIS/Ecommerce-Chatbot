

import { useState } from 'react';

function ChatBot({ token, onLogout }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [products, setProducts] = useState([]);

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data.reply);
    setProducts(data.products || []);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-purple-700">🛍️ Chatbot</h1>
          <div>
            <span className="text-sm text-gray-600 mr-4">👤 {user.email}</span>
            <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Logout</button>
          </div>
        </div>

        <div className="mb-4">
          <input
            className="border border-gray-300 p-2 rounded w-full"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Ask about a product, e.g. 'laptop under 40000'..."
          />
          <button
            className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>

        <div className="bg-gray-50 p-3 rounded mb-4">
          💬 <span className="font-medium text-gray-800">{response}</span>
        </div>

        {products.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Matching Products</h2>
            <ul className="space-y-3">
              {products.map(product => (
                <li key={product.id} className="p-4 border rounded shadow-sm bg-white">
                  <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">Brand: {product.brand}</p>
                  <p className="text-sm text-gray-600">Price: ₹{product.price}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;