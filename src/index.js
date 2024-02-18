import connectDB from "./db/db.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config({
  path: "./env",
});

const app = express();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Database not able to make connection with express :", error);
      throw error;
    });
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is ruuing on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!", error);
  });

/*
const app = express();
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Database not able to make connection with express :", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
})();

*/
