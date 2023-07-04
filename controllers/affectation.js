const nodemailer = require('nodemailer');
const Employee = require("../models/employee ")
const Mission = require('../models/mission')


exports.affecteEmpolyee = async (req, res) => {
    try {
        const affectation = await Employee.findByIdAndUpdate(req.params.idlocal, { $push: { Missions: req.params.idRespo } })


        const local = await Employee.findById(req.params.idlocal)
        const respo = await Mission.findById(req.params.idRespo)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port:465,
            secure: false,
            auth: {
                user: "bilelbenammarmemni@gmail.com",
                pass:  process.env.SEKRET_KEY,
            },
        });

        await transporter.sendMail({
            from: "bilelbenammarmemni@gmail.com",
            to: `${respo.Email}`,
            subject: "Affectation",

            html: `<h1>Affectation </h1> 
    <p> Bonjour  ${respo.Nom} yu have been affected to ${local.Nom} </p> <br>`
        })
        if (!Mission || !Employee) {
            return res.status(404).json({ error: 'Mission ou employé introuvable' });
          }
        if (Mission.equipe.length >= 6) {
            return res.status(400).json({ error: 'Nombre maximum d"employés dans l"équipe atteint' });
          }
          if (!Employee.disponibilite) {
            return res.status(400).json({ error: 'lempolyee nest pas disponible ' });
          }
        res.status(200).send({ message: 'responsable affected avec suuccess', affectation })
    } catch (error) {
        res.status(500).send({ message: ' erreur serveur ' || error })
        console.log(error)
    }
}
