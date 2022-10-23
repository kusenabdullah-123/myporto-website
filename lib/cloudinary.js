const cloudinary = require("cloudinary").v2;
cloudinary.config({
  secure: true,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

const uploadImage = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);

    return result;
  } catch (error) {
    console.error(error);
  }
};

const destroyImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error(error);
  }
};
export { uploadImage, destroyImage };
