export const post = {
    title: "Post enterprise schema",
    description: "Only quest attribute is not required",
    type: "object",
    properties: {
        "name": {
            "type": "string"
        },
        "accountable": {
            "type": "string"
        },
        "cnpj": {
            "type": "integer",
            // "format": "regex",
            // "patterm": "^(\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}|\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2})$"
        },
        "address": {
            "type": "string"
        },
        "isVisit": {
            "type": "boolean"
        },
        "phone_number": {
            "description": "User's phone-number. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^(?:\\([1-9]{2}\\)|[1-9]{2})[-.\\s]?9?[6-9]\\d{3}[-.\\s]?\\d{4}$"
        },
        "user_type_id": {
            "description": "User's type foreign key.",
            "type": "integer"
        },
        "email": {
            "description": "User's email. Does have a regex.",
            "type": "string",
            "format": "email"
        },
        "password": {
            "description": "User's password. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])[\\da-zA-Z].{7,254}$"
        }
    },
    required: ["phone_number", "user_type_id", "email", "password", "name", "accountable", "cnpj", "address", "isVisit"]
}