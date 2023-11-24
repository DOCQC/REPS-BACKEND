export const questShcema = {
    "title": "Quests schemas",
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
        "enterprise": {
            "type": "object",
            "properties": {
                "connect": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        }
                    }
                }
            }
        },
        "area_of_expertise": {
            "type": "object",
            "properties": {
                "connect": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        }
                    }
                }
            }
        }
    },
    "required": ["title", "description", "enterprise", "area_of_expertise"]
}