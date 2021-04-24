
const db = require("../models");
const Fosse = db.fosse;
const User = db.user;

module.exports = {
    create : async (req, res) => {

        console.log(req.params);
        user = req.params;
        id = user.id;
        const { matricule,capacité,position,étatFosse, } = req.body;
        const fosse = await Fosse.create({
           matricule,
            capacité,
            position,
            étatFosse,
            user:id
        });
        await fosse.save();

        const userById = await User.findById(id);

        userById.fosses.push(fosse);
        await userById.save();

        return res.send(userById);
    },
    userByFosse : async (req,res)=>{
        const { id } = req.params;
        const userByFosse = await Fosse.findById(id).populate('user');
        res.send(userByFosse);
    },
    fosseByUser : async (req, res) => {
        const { id } = req.params;
        const user = await User.findById(id).populate('fosses');
 
         res.send(user.fosses);
     }
}