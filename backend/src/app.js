const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://gen-ai-interview-ten.vercel.app",
  "https://ai-interview-prep-9hspdcbjk-ankit-webtechs-projects.vercel.app",
  "https://ai-interview-prep-ebon.vercel.app",
  process.env.FRONTEND_URL
].filter(Boolean);


const app = express();  
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

//// require all routes here
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);



module.exports = app;