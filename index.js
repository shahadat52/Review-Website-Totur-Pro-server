const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// meddlewere
app.use(cors());
app.use(express.json());

// user: tutorPro
// password: V8ZPQElPtxbLUgEB

const uri =
  "mongodb+srv://:<password>@cluster0.xo63l6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Travelux server is running");
});

app.listen(port, () => {
  console.log("Travlux is running at", port);
});
