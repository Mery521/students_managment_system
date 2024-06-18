module.exports = {
  async up(db) {

    await db.createCollection('cities', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'country_id'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            country_id: {
              bsonType: ['objectId', 'null'],
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

    await db.collection('cities').createIndex({ country_id: 1 });
  },

  async down(db) {
    await db.collection('cities').drop();
  }
};