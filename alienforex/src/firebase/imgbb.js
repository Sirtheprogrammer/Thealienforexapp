// ImgBB upload utility
import axios from 'axios';

export const uploadToImgBB = async (imageFile, apiKey) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
  const response = await axios.post(url, formData);
  return response.data.data.url;
};
