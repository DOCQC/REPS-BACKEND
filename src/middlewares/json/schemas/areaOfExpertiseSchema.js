export const post = {
    title:"Schema area of expertise",
    description: "Needs every attribute",
    type: "object",
    properties: {
        "description": {
            "type":"string"
        }
    },
    required: ["description"]

}

export const put = {
    description: "Needs every attribute",
    type: "object",
    properties: {
        "description": {
            "type":"string"
        }
    }
}