const mongoose = require('mongoose');

const EmployeSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const EmployeModel = mongoose.model('employee', EmployeSchema);

module.exports = EmployeModel;