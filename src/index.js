const express = require("express");
const app = express();
const router = require("./routes");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
app.use(router);
