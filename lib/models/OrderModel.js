const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {

let OrderSchema = new Schema(fields);

module.exports = mongoose.model('Order', OrderSchema);