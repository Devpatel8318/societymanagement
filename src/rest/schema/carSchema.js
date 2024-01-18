const carSchema = {
    bsonType: 'object',
    required: ['carNo', 'carName', 'carOwner', 'carColor'],
    properties: {
        _id: {
            bsonType: 'objectId',
        },
        carNo: {
            bsonType: 'string',
        },
        carName: {
            bsonType: 'string',
        },
        carOwner: {
            bsonType: 'string',
        },
        carColor: {
            bsonType: 'string',
        },
    },
    additionalProperties: false,
}

export default carSchema
