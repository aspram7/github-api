const express = require("express");
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const fs = require("fs");
var cors = require("cors");
const resolver = require("./resolvers").resolvers();
const app = express();
const port = 5000;

app.use(cors());

var schema = fs.readFileSync(`${__dirname}/schema.graphql`, { encoding: "utf8" });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
