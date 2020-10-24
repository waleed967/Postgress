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
//Add Info

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


module.exports = router;