import e from "express";

const app = e();

app.get("/users", (req, res) => {
  res.send("Here are all orders.");
});

app.get("/users/new", (req, res) => {
  res.send("Here is the new user form.");
});

app.post("/users/new", (req, res) => {
  res.send("New user added.")
})

app.listen(4000);
