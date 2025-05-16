import { app } from "../index";
import env from "./env";
import appDataSource from "@config/typeorm";

const initialize = () => {
  appDataSource
    .initialize()
    .then(() => {
      console.log("✅ - Database is up!");
      app.listen(env.SERVER_PORT, () => {
        console.log("🚀 - Server is running on port:", env.SERVER_PORT);
      });
    })
    .catch((err) => {
      console.error("❌ - Error during Data Source initialization", err);
      process.exit(1);
    });
};

export default initialize;
