import Axiosinstance from "../axiosinstance/Axiosinstane";
import { endpoints } from "../endpoints/Endpoints";

export const Profilefunc = async (data: String) => {
    try {
        const response = await Axiosinstance.post(endpoints.profile.profileview)
        return response?.data?.data || []
    } catch (error) {
        console.log("Profile Id Error", error);
        return []
    }
}