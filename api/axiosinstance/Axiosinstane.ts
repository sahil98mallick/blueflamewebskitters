import axios from "axios";
import { primaryURL } from "../endpoints/Endpoints";
import { getToken } from "@/utils/localStorage";

const Axiosinstance = axios.create({
    baseURL: primaryURL
})
Axiosinstance.interceptors.request.use(async (config) => {
    const token = getToken();
    console.log("Axios Token Get:", token);
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        console.log("Axios Headers:", config.headers);
    }
    return config;
}, error => {
    console.error("Axios request interceptor error:", error);
    return Promise.reject(error);
});

export default Axiosinstance;