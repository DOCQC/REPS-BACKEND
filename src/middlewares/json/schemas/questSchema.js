export const questShcema = {
    title: "Quests schemas",
    descriotion: "Need title, description, enterprise and area of expertise",
    type: "object",
    properties:{
        "title": {
            "description": "title of quest",
            "type":"string"
        },
        "description" :{
            "description" : "description of quest",
            "type" : "string"
        },
        "enterpriseId":{
            "description": "enterprise id",
            "type" : "number"
        }

    }
}