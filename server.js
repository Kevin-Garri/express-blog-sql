const express = require("express");
const errorHand = require("./middlewares/errorHand");
const notFound = require("./middlewares/notFound");
const app = express();
const port = 3000;

//parsing body
app.use(express.json());

//listen
app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`);
});

//error hand
app.use(errorHand);

//notFound hand
app.use(notFound);

//rotta 1
app.get("/", (req, res) => {
  res.send("Il mio BLOG");
});

//rotta post
app.use("/posts", postRouter);
