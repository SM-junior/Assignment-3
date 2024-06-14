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

export const FacilityControllers = {
    createFacility,
}