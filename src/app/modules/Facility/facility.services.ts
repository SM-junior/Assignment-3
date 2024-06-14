import { TFacility } from "./facility.interface";
import { FacilityModel } from "./facility.model";

const createFacilityIntoDb = async (payload: TFacility) => {
    const result = await FacilityModel.create(payload)
    return result;
}

export const FacilityServices = {
    createFacilityIntoDb,
}