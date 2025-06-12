// ======== server/index.js ========

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

const users = [];
const SECRET = "secretkey";
const productData = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(409).json({ error: "User already exists" });
  users.push({ email, password });
  res.json({ message: "User registered successfully" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: "User not found. Please sign up first." });
  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "No token provided" });
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.post("/api/chat", verifyToken, (req, res) => {
  const { message } = req.body;
  const query = message.toLowerCase();

  let results = productData;

  if (query.includes("laptop")) {
    results = results.filter(p => p.category === "laptop");
  }
  if (query.includes("under")) {
    const match = query.match(/under (\d+)/);
    if (match) {
      const price = parseInt(match[1]);
      results = results.filter(p => p.price < price);
    }
  }

  res.json({ reply: "Here are the matching products", products: results });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
