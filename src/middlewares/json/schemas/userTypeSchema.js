export const userTypeSchema = {
    title: "user type schema.",
    description: "needs only a description.",
    type: "object",
    properties: {
        "description": {
            "description": "description of the type",
            "type": "string"
        }
    },
    required: ["description"]
}
