import api from "../constant/api";

export const GetCompany = async (findby) => {
  try {
    const response = await api.get(`company/getall?${findby}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Get company failed");
  }
};
export const GetOneCompany = async (id) => {
  try {
    const response = await api.get(`company/getone/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Get One company failed");
  }
};
export const findCompany = async (findby) => {
  try {
    const response = await api.get(`company/getall?${findby}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Find company failed");
  }
}
