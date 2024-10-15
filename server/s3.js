import s3 from "./aws";

const BUCKET_NAME = "personal-website-portfolio";
const BUCKET_URL = `https://${BUCKET_NAME}.s3.amazonaws.com/`;

async function getPhotos() {
  const params = {
    Bucket: BUCKET_NAME,
    Prefix: "album",
  };

  try {
    const data = await s3.listObjectsV2(params).promise();

    const photoURLs = data.Contents.filter((item) =>
      /\.(jpg|jpeg)$/i.test(item.Key)
    ).map((item) => `${BUCKET_URL}${item.Key}`);

    return photoURLs;
  } catch (err) {
    console.error("Error fetching images from S3: ", err);
    throw err;
  }
}

getPhotos()
  .then((photoURLs) => {
    return photoURLs;
  })
  .catch((err) => {
    console.error("Error fetching images from S3: ", err);
  });

export default getPhotos;
