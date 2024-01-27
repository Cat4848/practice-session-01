import e from "express";

const app = e();

app.get("/users", (req, res) => {
  res.send("Here are all orders.");
});

app.get("/users/new", (req, res) => {
  res.send("Here is the new user form.");
});

app.post("/users/new", (req, res) => {
  res.send("New user added.");
});

app.get("/users/edit/:id", (req, res) => {
  res.send("Here is the edit particular user form.");
});

app.put("/users/:id", (req, res) => {
  res.send("User edited in the database.");
});

app.listen(4000);
