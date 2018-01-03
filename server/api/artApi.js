const { Artwork } = require("../models/artModel"),
  multer = require("multer"),
  upload = multer({ dest: "uploads/" });

let artwork = (app, db, cloudinary) => {
  app.get("/api/artworks", (req, res) => {
    Artwork.find()
      .then(artworks => {
        res.send({ message: "OK", artworks });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.post("/api/artwork", upload.single("image"), (req, res, next) => {
    console.log(req.body);

    const source = `./uploads/${req.file.filename}`;

    cloudinary.uploader.upload(source, function(result) {
      if (result.error) {
        console.log("Cloudinary upload error", result);
        res.status(500).send();
      }

      const fileName = result.public_id + ".jpg";
      console.log("**** Image: " + fileName);
      let artwork = new Artwork({
        title: req.body.title,
        comment: req.body.comment,
        isPriority: req.body.isPriority,
        display: req.body.display,
        image: fileName
      });

      artwork
        .save()
        .then(artwork => {
          console.log("Upload OK!!");
          res.json({ message: "OK" });
        })
        .catch(err => {
          console.log("Error saving to Db", err);
          res.status(err.statusCode || 500).json(err);
        });
    });
  });
};

module.exports = { artwork };
