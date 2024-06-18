module.exports = {
  async up(db) {

    await db.createCollection('countries', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            created_at: {
              bsonType: 'date',
              description: 'must be a date and is required'
            }
          }
        }
      }
    });
  },

  async down(db) {
    await db.collection('countries').drop();
  }
};