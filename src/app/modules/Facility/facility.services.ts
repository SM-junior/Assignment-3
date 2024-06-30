import { TFacility } from "./facility.interface";
import { FacilityModel } from "./facility.model";

const createFacilityIntoDb = async (payload: TFacility) => {
    const result = await FacilityModel.create(payload)
    return result;
}

const deleteFacilityIntoDb = async (id: string) => {
    const facility = await FacilityModel.findOne({ _id: id });

    if (!facility) {
        throw new Error("Facility is not exists")
    }
    const result = await FacilityModel.findByIdAndDelete({ _id: id });
    return result;
}

const updateFacilityIntoDb = async (id: string, payload: TFacility) => {
    const facility = await FacilityModel.findOne({ _id: id });
    if (!facility) {
        throw new Error("Facility is not exists")
    }

    const result = await FacilityModel.findByIdAndUpdate({ _id: id }, payload, { new: true });
    return result
}

const getAllFacilitiesFromDb = async () => {
    const result = await FacilityModel.find();
    return result;
}

export const FacilityServices = {
    createFacilityIntoDb,
    deleteFacilityIntoDb,
    updateFacilityIntoDb,
    getAllFacilitiesFromDb
}