const express = require('express');
const router = express.Router();
const db = require('../config/database');

const Gig = require('../models/Gig');



//Get Info
router.get('/', (req, res) =>
    Gig.findAll()
        .then(gigs => {


            console.log(gigs);
            res.sendStatus(200);

        })
        .catch(err => console.log(err))

);

//get info by id
router.get('/:id', async (req, res) => {
    const id = req.params.id

    return await Gig.findOne({ id: id })

        .then(gigs => {


            console.log(gigs);
            res.status(200).send(gigs);

        })
        .catch(err => console.log(err))

    // console.log(req.params.id)
});

// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     // await Gig.findByPk(gigID)


// })
//Add Info {

router.get('/add', (req, res) => {
    const data = {

        title: "Capreg",
        tech: "NodeJS",
        budget: "5000Rs",
        description: "Hi I am Waleed",
        contact_email: "wa@yahoo.com"



    }

    let { title, tech, budget, description, contact_email } = data;

    Gig.create({
        title,
        tech,
        budget,
        description,
        contact_email


    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
});
//}

module.exports = router;