import { catchAsync } from "../../utils/catchAsync"
import { FacilityServices } from "./facility.services"

const createFacility = catchAsync(async (req, res) => {
    const result = await FacilityServices.createFacilityIntoDb(req.body)
    res.status(200).json({
        success: true,
        massage: 'Facility added successfully',
        data: result
    })
})

const deleteFacility = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await FacilityServices.deleteFacilityIntoDb(id)
    res.status(200).json({
        success: true,
        message: "Facility is deleted successfully",
        data: ''
    })
})

const updateFacility = catchAsync(async (req, res) => {
    try {
        const { id } = req.params;
        const result = await FacilityServices.updateFacilityIntoDb(id, req.body)
        res.status(200).json({
            success: true,
            message: "Facility is updated successfully",
            data: result
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: "Facility is not found",
            data: error.message
        })
    }
})

const getAllFacility = catchAsync(async (req, res) => {
    try {
        const result = await FacilityServices.getAllFacilitiesFromDb();
        res.status(200).json({
            success: true,
            message: "All facilities retrieved successfully",
            data: result
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: "Facility is not found",
            data: error.message
        })
    }
})

export const FacilityControllers = {
    createFacility,
    deleteFacility,
    updateFacility,
    getAllFacility
}