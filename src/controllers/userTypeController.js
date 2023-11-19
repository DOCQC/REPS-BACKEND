import * as userTypeService from "../services/userTypeService.js"


export async function findAll (queryParam) {
    const data = {
        "description": queryParam["description"],
        "skip": queryParam["pg"]== null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
        "take": queryParam["qt"] == null? 100 : Number(queryParam["qt"])
    }
    return userTypeService.findAll(data);
}

export async function create(data) {
    return userTypeService.create(data);
}

export async function update(userType) {
    return userTypeService.update(userType)
}

export async function deleteById(userType) {
    return userTypeService.deleteById(userType)
}