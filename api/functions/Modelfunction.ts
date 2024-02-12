import Axiosinstance from "../axiosinstance/Axiosinstane";
import { endpoints } from "../endpoints/Endpoints";

export const Modelfunc = async () => {
    try {
        const response = await Axiosinstance.post(endpoints.models.allmodels)
        return response?.data || []
    } catch (error) {
        console.log("Model Details Error", error);
        return []
    }
}

