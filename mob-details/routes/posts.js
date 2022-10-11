const express = require('express');
const router = express.Router();
const postmodel = require('../models/post');

router.get('/' , async(req,res) => {
    try{
        const posts = await postmodel.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err });
    }
});



router.post('/' , async(req,res) =>{
    const post = new postmodel({
        phone: req.body.phone,
        brand:  req.body.brand,
        memoryStorageCapacity: req.body.memoryStorageCapacity,
        ram: req.body.ram,
        formFactor: req.body.formFactor,
        os: req.body.os,
        color: req.body.color,
        displaySize: req.body.displaySize,
        otherCameraFeatures: req.body.otherCameraFeatures,
        price: req.body.price
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);

    }catch(err){
        res.json({ message: err });
    }

});


router.get('/:brand', async(req,res) => {
    try{
    const post = await postmodel.findOne({brand: req.params.brand});
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
});


router.delete('/:brand', async(req,res) =>{
    try{
        const post = await postmodel.remove({brannd: req.params.brand});
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});



router.patch('/:brand', async(req,res) => {
    try{
    const updatedPost = await postmodel.updateOne({brand: req.params.brand},
        {$set: { otherCameraFeatures: req.body.otherCameraFeatures}}
        );
    res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});




module.exports = router;