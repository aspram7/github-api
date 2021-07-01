var express = require("express");
var graphqlHTTP = require("express-graphql").graphqlHTTP;
var buildSchema = require("graphql").buildSchema;
var fs = require("fs");
var cors = require("cors");
var resolver = require("./resolvers").resolvers();
var app = express();
var port = 5000;
app.use(cors());
var schema = fs.readFileSync(__dirname + "/schema.graphql", { encoding: "utf8" });
app.use("/graphql", graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: resolver,
    graphiql: true
}));
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
