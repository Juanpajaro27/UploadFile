const express = require("express")
const {connection} = require("../database")

exports.CreateBoss = (req,res)=>{
    const {nameboss,lastnameboss,email,cellphone} = req.body
    connection.query('INSERT INTO bosses (nameboss,lastnameboss,email,cellphone)',[nameboss,lastnameboss,email,cellphone], (err,result)=>{
        if(err){
            return res.json({message: err})
        }
        return res.json({message: result})
    })
}