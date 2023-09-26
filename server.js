import cors from "cors";
import express from "express";
const PORT = process.env.PORT || 8080;
const server = express();

server.use(cors());
server.use(express.json());

const data = [
  {
    name: "Maalo",
    age: 15,
  },
  {
    name: "Juuju",
    age: 10,
  },
  {
    name: "Adjoa",
    age: 7,
  },
];

server.get("/api/v1/pearl-data-analysis", (req, res) => {
  res.status(200).json({
    message: "data successfully fetched",
    employees: data,
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
