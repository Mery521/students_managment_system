module.exports = {
  async up(db) {
    await db.createCollection('students', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['email', 'password','full_name','age','country_id', 'city_id'],
          properties: {
            email: {
              bsonType: 'string',
              pattern: '^.+@.+\\..+$',
              description: 'must be a string and is required'
            },
            password: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            full_name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            age: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            country_id: {
              bsonType: 'objectId',
              description: 'must be an objectId and is required'
            },
            city_id: {
              bsonType: 'objectId',
              description: 'must be an objectId and is required'
            },
            created_at: {
              bsonType: 'date',
              description: 'must be a date and is required'
            }
          }
        }
      }
    });

    await db.collection('countries').createIndex({ country_id: 1 });
    await db.collection('cities').createIndex({ city_id: 1 });
  },

  async down(db) {
    await db.collection('students').drop();
  }
};