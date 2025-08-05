// TODO: Implement API functions

import apiClient from "@/lib/axios";

export const getAllItems = async () => {
    try {
        const response = await apiClient.get('/items');
        return response.data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export const addItem = async (item) => {
    try {
        const response = await apiClient.post('/add-item', item);
        return response;
    }
    catch (error) {
        throw error;
    }
}
export const getItemById = async (id) => {
    try {
        const response = await apiClient.get(`/items/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        throw error;
    }
};
