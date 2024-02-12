import Axiosinstance from "../axiosinstance/Axiosinstane";
import { endpoints } from "../endpoints/Endpoints";

export const Allchatfunc = async () => {
    try {
        const response = await Axiosinstance.post(endpoints.chats.allchats)
        return response?.data || []
    } catch (error) {
        console.log("All Chat Id Error", error);
        return []
    }
}

export const Singlechatfunc = async (id: any) => {
    try {
        const response = await Axiosinstance.get(endpoints.chats.singlechat(id))
        return response?.data || []
    } catch (error) {
        console.log("Single Id Error", error);
        return []
    }
}


