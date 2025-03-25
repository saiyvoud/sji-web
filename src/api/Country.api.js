import api from "../constant/api";

export const Getcountry = async (findby) => {
  try {
    const response = await api.get(`country/getall?${findby}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Get country failed");
  }
};
export const GetOnecountry = async (id) => {
  try {
    const response = await api.get(`country/getone/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Get One country failed");
  }
};
