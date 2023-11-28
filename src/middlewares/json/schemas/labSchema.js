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
        "laboratory_expertise":{
            "type": "object",
            "properties" : {
                "connect_are_of_expertise":{
                    "type": "array", "items": {"type": "string"}
                },
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
        },
        "laboratory_expertise":{
            "type": "object",
            "properties" : {
                "connect_are_of_expertise":{
                    "type": "array", "items": {"type": "string"}
                },
                "exclude_area_of_expertise_by_id":{
                    "type": "array", "items": {"type": "number"}
                }
            }
        }
    }
}