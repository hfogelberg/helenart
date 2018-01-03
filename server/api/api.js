let api = (app, db, cloudinary) => {
  let { user } = require("./userApi");
  let { artwork } = require("./artApi");

  user(app, db);
  artwork(app, db, cloudinary);

  app.get("/api/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ message: "API is alive" }));
  });
};

module.exports = { api };
