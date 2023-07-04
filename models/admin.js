const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    Nom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Prenom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Email: {
        type: String,
        unique:true,
        required: [true, 'Ce champs est obligatoire'],
    },
    Password: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Categorie: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Departement: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Admin', AdminSchema)