const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rupsagar:qGP69w1BIMCejyn3@cluster0.yjtdmem.mongodb.net/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
