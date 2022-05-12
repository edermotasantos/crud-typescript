import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./database/routes";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME} is running at port 3000!`);
});
