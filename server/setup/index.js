const env = require("dotenv").config(),
  app = require("./app"),
  port = process.env.PORT || 8001;

app.listen(port, (err) => {
  !err
    ? console.log(`The service is running at http://localhost:${port}/`)
    : console.log(`the service is not working`);
});
