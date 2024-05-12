const mongoose = require('./db');

const projecttSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Projectt = mongoose.model('Projectt', projecttSchema);

module.exports = Projectt;
