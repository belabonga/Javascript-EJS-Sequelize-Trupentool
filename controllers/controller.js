const { formatInt } = require('../helpers/helper');
const {Troop, Commander} = require('../models');

class Controller {

    static landingPage(req, res){
        res.render("home")
    }
    
    static commandersList(req, res){
        Commander.findAll()
        .then((data) => {
            // console.log(data);
            res.render('commanders', {data, formatInt})
        }).catch((err) => {
            res.render(err)
        });
    }

    static troopsList(req, res){
        Troop.findAll()
        .then((data) => {
            console.log(data);
            res.render('troops', {data})
        }).catch((err) => {
            res.render(err)
        });
    }

    static addTroopPage(req, res){
        let id = 0
        Commander.findAll(
            // {attributes : [id]}
            )
        .then((data) => {
            data.forEach(el => {
                id = el.id
            });
            res.render('addTroop', {id})
            // console.log(id);
        }).catch((err) => {
            res.render(err)
        });
    }

    static addTroop(req, res){
        let {name, tribe, type, commander} = req.body
        Troop.create(
            {name, tribe, type, commander}
        )
        .then((result) => {
            res.redirect('/addTroop')  
        }).catch((err) => {
            res.render(err)
        });
    } 

}

module.exports = Controller