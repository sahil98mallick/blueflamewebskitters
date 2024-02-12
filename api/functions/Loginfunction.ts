import Axiosinstance from "../axiosinstance/Axiosinstane";
import { endpoints } from "../endpoints/Endpoints";

export const Loginfunc = async (data: any) => {
    try {
        const response = await Axiosinstance.post(endpoints.auth.login, data)
        return response?.data || []
    } catch (error) {
        console.log("Login Id Error", error);
        return []
    }
}

