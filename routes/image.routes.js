const router = require("express").Router();
const DB = require("../db");
const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });
require("dotenv").config();

const sharp = require("sharp");

//write a function to accept userId, photoName and photoBase64 and store it in S3

router.post("/image/add", async (req, res) => {
  const { userId, photoName, image } = req.body;

  // define s3
  key = userId + "/" + photoName;
  const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  //   console.log(photo);

  const image_data_as_base64 = image.replace(/^data:image\/\w+;base64,/, "");

  const decoded_image = Buffer.from(image_data_as_base64, "base64");

  const optimized_image = await sharp(decoded_image).jpeg().toBuffer();

  const upload = await s3
    .upload({
      Bucket: "finease",
      Body: optimized_image,
      Key: key + ".jpeg",
      ContentType: "image/jpeg",
    })
    .promise();
  return res.status(200).json({
    message: "Image uploaded successfully",
    url: upload.Location,
  });
});

module.exports = router;
