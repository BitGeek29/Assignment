// server/app.js
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const productRoutes = require("./server/routers/productRoutes");
const authRoutes = require("./server/routers/authRoutes");
const sellerRoutes = require("./server/routers/sellerRoutes");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error("Not allowed by CORS"));
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(express.json());

//use cors
app.use(cors(corsOptions));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/seller", sellerRoutes);

const PORT = process.env.PORT || 5001;
const io = socketIO(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New socket connection");

  // Listen for incoming messages and broadcast them to other clients
  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
