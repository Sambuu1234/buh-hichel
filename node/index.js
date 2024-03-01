import express from "express";

const port = 8080;
const app = express();

let arr1 = [
  {
    name: "bi",
    age: 30,
    lastname: "hi2",
    id: 1,
  },

  {
    name: "bi",
    age: 40,
    lastname: "hi2",
    id: 2,
  },
];

app.get("/", (request, response) => {
  response.send(arr1);
});

app.get("/api", (request, response) => {
  response.json({ name: "bi" });
});

app.post("/", (request, response) => {
  response.send(
    arr1.push({ name: "hahah", age: 50, lastname: "medku", id: 3 })
  );
});

app.listen(port, () => {
  console.log(`aslaa http://localhost:${port}`);
});
