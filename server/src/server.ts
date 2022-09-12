import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 1,
      name: "Fulano",
    },
    {
      id: 1,
      name: "Fulano",
    },
    {
      id: 1,
      name: "Fulano",
    },
    {
      id: 1,
      name: "Fulano",
    },
  ]);
});

app.listen(4444);
