import axios from "axios";

const API_BASE_URL = 'https://penguin-apps-task.vercel.app';
const axiosInstance = axios.create({
    baseURL:`${API_BASE_URL}/api`,
})

axiosInstance.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization='Bearer ${token}';

    }
    return config;
})

export default axiosInstance;
