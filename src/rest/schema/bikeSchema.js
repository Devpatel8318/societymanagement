const bikeSchema = {
    bsonType: 'object',
    required: ['bikeNo', 'bikeName', 'bikeOwner', 'bikeColor'],
    properties: {
        _id: {
            bsonType: 'objectId',
        },
        bikeNo: {
            bsonType: 'string',
        },
        bikeName: {
            bsonType: 'string',
        },
        bikeOwner: {
            bsonType: 'string',
        },
        bikeColor: {
            bsonType: 'string',
        },
    },
    additionalProperties: false,
}

export default bikeSchema
