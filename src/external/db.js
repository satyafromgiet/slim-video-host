const config = require("../../config.json");
const Datastore = require("nedb-promises");
const path = require("path");

module.exports = {
  users: Datastore.create({
    filename: path.resolve(config.dbPath, "users"),
    autoload: true
  }),
  codes: Datastore.create({
    filename: path.resolve(config.dbPath, "codes"),
    corruptAlertThreshold: 1, // headway for manually added codes
    autoload: true
  }),
  videos: Datastore.create({
    filename: path.resolve(config.dbPath, "videos"),
    autoload: true
  }),
  ratings: Datastore.create({
    filename: path.resolve(config.dbPath, "ratings"),
    autoload: true
  })
};
