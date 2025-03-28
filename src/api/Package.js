import api from "../constant/api";

export const Packages = async (findby) => {
    try {
        const response = await api.get(`package/getall?${findby}`);
        return response.data;
    } catch (error) {
        throw error.response.data.messages
    }
};
export const getPackage = async (id) => {
    try {
        const response = await api.get(`package/getone/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data.messages
    }
};

export const createOrderPackage = async (data) => {
    try {
        console.log(data)
        const formData = new FormData();
        formData.append('packageId', data.packageId);
        formData.append('slip', data.slip);
        const response = await api.post(`package/order/create`, formData);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error
    }
};