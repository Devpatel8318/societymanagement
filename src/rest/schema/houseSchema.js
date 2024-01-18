const houseSchema = {
    bsonType: 'object',
    required: [
        'houseNo',
        'numberOfMales',
        'numberOfFemales',
        'contactNumber',
        'caste',
        'lineNo',
        'marriagesInHall',
        'bhk',
    ],
    properties: {
        _id: {
            bsonType: 'objectId',
        },
        houseNo: {
            bsonType: 'string',
        },
        numberOfMales: {
            bsonType: 'int',
        },
        numberOfFemales: {
            bsonType: 'int',
        },
        contactNumber: {
            bsonType: 'double',
        },
        caste: {
            bsonType: 'string',
        },
        lineNo: {
            bsonType: 'int',
        },
        marriagesInHall: {
            bsonType: 'int',
        },
        bhk: {
            bsonType: 'int',
        },
    },
    additionalProperties: false,
}
export default houseSchema
