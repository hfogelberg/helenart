var mongoose = require("mongoose"),
  bluebird = require("bluebird"),
  { IS_LOCAL } = require("../config");

var dbUri = "";

if (IS_LOCAL) {
  console.log("Hooking up to dev Db");
  dbUri = "mongodb://localhost:27017/helenart";
} else {
  console.log("Hooking up to prod Db");
  dbUri = "mongodb://localhost:27017/helenart";
}

console.log("Db connection to open: " + dbUri);
mongoose.connect(dbUri);

mongoose.export = { mongoose };
