import * as userTypeService from "../services/userTypeService.js"


export async function findAll (queryParam) {
    const data = {
        "description": queryParam["description"],
        "skip": queryParam["pg"]== null? 0 : ( Number(queryParam["qt"]) * (Number(queryParam["pg"]) - 1) ),
        "take": queryParam["qt"] == null? 100 : Number(queryParam["qt"])
    }
    return userTypeService.findAll(data);
}

export async function findById(id) {
    return userTypeService.findById(id);
}

export async function create(data) {
    //TODO POST body validation
    return userTypeService.create(data);
}

// TODO UPDATE and DELETE: Exception entity not found
export async function update(id, data) {
    const userType = await userTypeService.findById(id)
    if (userType == null) {
        return "TODO"
    }
    // TODO PUT body validation
    return userTypeService.update(id, data)
}

export async function deleteById(id) {
    const userType = await userTypeService.findById(id)
    if (userType == null) {
        return "TODO"
    }

    return userTypeService.deleteById(id)
}