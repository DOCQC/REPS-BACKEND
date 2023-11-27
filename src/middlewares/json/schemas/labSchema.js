export const post = {
    title: "post lab schema.",
    description: "Needs every attribute. All attributes have regexes",
    type: "object",
    properties: {
        "description": {
            "description": "Laboratory's description. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^.{1,255}$"
        },
        "name": {
            "description": "Laboratory's name. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^.{1,255}$"
        },
        "abbreviation": {
            "description": "Laboratory's abbreviation. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^.{1,63}$"
        },
        "url_img": {
            "description": "Laboratory's picture url. Does have a regex.",
            "type": "string",
            "format": "uri"
        },
        "lab_expertise":{
            "type": "object",
            "properties" : {
                "createdAt": {
                    "type": "string",
                    "format": "date-time"
                  },
                "are_of_expertise":{
                    "type": "string"
                }
            }
        }
    },
    required: ["description", "name", "abbreviation", "url_img"]
}

export const put = {
    title: "put lab schema.",
    description: "Don't need every attribute. All attributes have regexes",
    type: "object",
    properties: {
        "description": {
            "description": "Laboratory's description. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^.{1,255}$"
        },
        "name": {
            "description": "Laboratory's name. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^.{1,255}$"
        },
        "abbreviation": {
            "description": "Laboratory's abbreviation. Does have a regex.",
            "type": "string",
            "format": "regex",
            "pattern": "^.{1,63}$"
        },
        "url_img": {
            "description": "Laboratory's picture url. Does have a regex.",
            "type": "string",
            "format": "uri"
        }
    }
}