const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeSchema = new Schema({
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
    Categorie: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Specialite: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    NumCnss: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    Age: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    Disponibilite: {
        type: Boolean,
        required: [true, 'Ce champs est obligatoire'],
    },

}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Empolyee', EmployeSchema)