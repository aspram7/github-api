const express = require("express");
const fetchApi = require("node-fetch");
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const fs = require("fs");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

var schema = fs.readFileSync(`${__dirname}/schema.graphql`, { encoding: "utf8" });

var root = {
  users: async ({ value, per_page, page }, req) => {
    const usersData = await fetchApi(
      `https://api.github.com/search/users?q=${value}&per_page=${per_page}&page=${page}`
    ).then((res) => res.json());
    console.log(usersData);

    return usersData;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
