import api from "../constant/api";

export const Services = async () => {
    try {
        const response = await api.get(`service/getall?page=1&limit=50`);
        return response.data;
    } catch (error) {
        throw error.response.data.messages
    }
};