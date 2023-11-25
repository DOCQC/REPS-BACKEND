export const post = {
    "title": "Quests schemas for method post",
    "type": "object",
    "properties": {
        "title": {
            "description": "title of quest",
            "type": "string"
        },
        "description": {
            "description": "description of quest",
            "type": "string"
        },
        "enterprise_id": {
            "type": "number",

        },
        "area_of_expertise_id": {
            "type": "number",

        }
    },
    "required": ["title", "description", "enterprise_id", "area_of_expertise_id"]
}

export const put = {
    "title": "Quests schemas for method put",
    "type": "object",
    "properties": {
        "title": {
            "description": "title of quest",
            "type": "string"
        },
        "description": {
            "description": "description of quest",
            "type": "string"
        },
        "enterprise_id": {
            "type": "number",

        },
        "area_of_expertise_id": {
            "type": "number",

        }
    },
}