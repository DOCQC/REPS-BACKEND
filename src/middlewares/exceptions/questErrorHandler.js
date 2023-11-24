import * as enterpriseService from "../../services/enterpriseService.js"
import * as areaOfExpertise from "../../services/areaOfExpertiseService.js"


// export const existAtribbutes = async function(req, res, next){


//     const idEnterprise = req.body.enterprise.connect.id
//     const idAreaOfExpertise = req.body.area_of_expertise.connect.id

//     const enterprise = await enterpriseService.findById(Number(idEnterprise))
//     const area_of_expertise = await  areaOfExpertise.findById(Number(idAreaOfExpertise))

//     if(!enterprise){
//         let error = new Error("required enterprise doesn't exists.")
//         error.cause = "required enterprise doesn't exist."
//         error.statusCode = 404
//         next(error)
//     }

//     if(!areaOfExpertise){
//         let error = new Error("required  area of expertise doesn't exists.")
//         error.cause = "required  rea of expertise doesn't exist."
//         error.statusCode = 404
//         next(error)
//     }

//     next()
// }

export const existAtribbutes = async function(error, req, res, next){

    const newErrorMessage = {
        message: null,
        statusCode: 404,
    }

    switch(error.code) {
        case 'P2025': {
            newErrorMessage.message = "An operation failed because it depends on one or more records that were required but not found "
        }
    }

    next(newErrorMessage)
}
