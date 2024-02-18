import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB();

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
