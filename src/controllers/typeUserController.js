import * as typeUserService from "../Services/typeUserService.js"

export async function findAll () {
    return typeUserService.findAll();
}

