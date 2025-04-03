import api from "./api";

export const GetCustomersData = async () => {
    try {
        const response = await api.get('customers');

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const GetCustomersDataById = async (id) => {
    try {
        const response = await api.get(`customers/${id}`);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const EditCustomersData = async (id, data) => {
    try {
        const response = await api.put(`customers/${id}`, data);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const RegisterCustomersData = async (data) => {
    try {
        const response = await api.post(`customers`, data);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const DeleteCustomersData = async (id) => {
    try {
        const response = await api.delete(`customers/${id}`);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};
export const GetProductsData = async () => {
    try {
        const response = await api.get('products');

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const GetProductsDataById = async (id) => {
    try {
        const response = await api.get(`products/${id}`);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const EditProductsData = async (id, data) => {
    try {
        const response = await api.put(`products/${id}`, data);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const RegisterProductsData = async (data) => {
    try {
        const response = await api.post(`products`, data);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const DeleteProducsData = async (id) => {
    try {
        const response = await api.delete(`products/${id}`);

        return response;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};
