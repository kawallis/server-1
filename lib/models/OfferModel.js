const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {

let OfferSchema = new Schema(fields);

module.exports = mongoose.model('Offer', OfferSchema);