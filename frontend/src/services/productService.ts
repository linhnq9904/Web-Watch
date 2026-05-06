import axios from "axios";

const API = "http://127.0.0.1:8000/api/products";

export const getProducts = async () => {
    const res = await axios.get(API);
    return res.data;
};

export const getProduct = async (id: string) => {
    const res = await axios.get(`${API}/${id}`);
    return res.data;
};