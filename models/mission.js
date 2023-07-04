const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MissionSchema = new Schema({
    Tache: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Description: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Datedebut: {
        type: String,
       
        required: [true, 'Ce champs est obligatoire'],
    },
    DateFinateFin: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Equipe: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empolyee'
    }],
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Mission', MissionSchema)