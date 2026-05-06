import axios from "axios";

const API = "http://127.0.0.1:8000/api";

export const loginAPI = async (data: any) => {
    const res = await axios.post(`${API}/login`, data);
    return res.data;
};

export const registerAPI = async (data: any) => {
    const res = await axios.post(`${API}/register`, data);
    return res.data;
};