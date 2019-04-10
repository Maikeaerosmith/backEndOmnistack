const Box = require('../models/Box');

class BoxController {
    async store (req, res){
        const box = await Box.create(req.body);

        return res.json(box);
    }
   
    async list(req, res){
        const box = await Box.find(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: -1}}
        });
        return res.json(box);
    }


    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: -1}}
        });

        return res.json(box);
    }

    async remove(req, res){
        const body = req.body;

        await Box.findByIdAndRemove(body._id);

        return res.json("Excluído!")
    }
}

module.exports = new BoxController();