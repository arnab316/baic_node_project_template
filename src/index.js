const { ServerConfig } = require("./config");

const express = require("express");
const apiRouter = require("./routes");
const app = express();

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, () => {
  console.log(`app listening on port ${ServerConfig.PORT}`);
});
