const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const route = require("./routes/route");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', route)

const port = 6969;

app.get("/", (req, res) => {
  res.send("Helloww World!!");
});

try {
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server is up and runnin' on port ${port} `);
    });
  });
} catch (err) {
  console.log(err);
}
