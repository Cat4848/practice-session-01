import e from "express";

const app = e();

app.get("/", (req, res) => {
  res.send("Here are all orders");
});

app.listen(4000);
