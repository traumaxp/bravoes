// emails-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const emails = new Schema({
    email: {
        type: String,
        default: function() {
          return { data: 'hello', info: 'hello' }
        }
    }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('emails');
  } catch (e) {
    return mongooseClient.model('emails', emails);
  }
};
