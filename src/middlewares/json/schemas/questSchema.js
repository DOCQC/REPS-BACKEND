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
}