import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "ducdz1dhm",
    api_key: "465279263797179",
    api_secret: "d73SxcFxNkhdeEbaQZW1M9v8qMY",
});

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "post",
    });
};

export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
};
