import api from "../constant/api";

export const GetArticle = async (findby) => {
  try {
    const response = await api.get(`article/getall?${findby}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Get article failed");
  }
};
export const GetOneArticle = async (id) => {
  try {
    const response = await api.get(`article/getone/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Get One article failed");
  }
};
