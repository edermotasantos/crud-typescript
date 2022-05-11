import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`App ${process.env.PROJECT_NAME} is running at port 3000!`);
});
