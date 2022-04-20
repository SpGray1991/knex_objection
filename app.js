const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.use("/api", require("./api/users_api_v1.js").router);

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
