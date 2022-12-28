const express = require("express")
const {connection} = require("../database")

exports.CreateRole = (req,res) =>{
    const rolename = req.body.name_role
    connection.query('INSERT INTO roles (name_role) VALUES (?)', [rolename] ,(err,result)=>{
        if(err){
            return res.json({message: err})
        }
        return res.json({message: result})
    })
}

exports.GetRoles = (req,res)=>{
    connection.query('SELECT * FROM roles', (err,result)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json({message:result})
    })
}