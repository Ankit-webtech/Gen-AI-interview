const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");


const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup aborted because MongoDB is unavailable.");
    process.exitCode = 1;
  }
}

startServer();
