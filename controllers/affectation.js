const nodemailer = require('nodemailer');
const Employee = require("../models/employee ")
const Mission = require('../models/mission')


exports.affecteEmpolyee = async (req, res) => {
    try {
        const affectation = await Mission.findByIdAndUpdate(req.params.idMiss, { $push: { Equipe: req.params.idEmp } })

        const Miss = await Mission.findById(req.params.idMiss)
        const Emp = await Employee.findById(req.params.idEmp)
       
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
            to: `${Emp.Email}`,
            subject: "Affectation",

            html: `<h1>Affectation </h1> 
    <p> Bonjour  ${Emp.Nom} yu have been affected to ${Miss.Nom} </p> <br>`
        })
        if (!Mission || !Employee) {
            return res.status(404).json({ error: 'Mission ou employé introuvable' });
          }
          if (!Employee.Disponibilite) {
            return res.status(400).json({ error: 'lempolyee nest pas disponible ' });
          }
        if (Mission.Equipe.length >= 6) {
            return res.status(400).json({ error: 'Nombre maximum d"employés dans l"équipe atteint' });
          }
          if (!Employee.Disponibilite) {
            return res.status(400).json({ error: 'lempolyee nest pas disponible ' });
          }
        res.status(200).send({ message: 'empolyee affected avec suuccess ', affectation })
    } catch (error) {
        res.status(500).send({ message: ' erreur serveur ' || error })
        console.log(error)
    }
}
