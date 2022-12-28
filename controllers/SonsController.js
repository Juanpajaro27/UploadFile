const express = require("express")
const { result } = require("lodash")
const {connection} = require("../database")

exports.CreateSons = (req,res)=>{
    const {id_son_dougther,CC_parents,firstname,secondname,first_lastname,second_lastname,age,school_year,scholarship,culminated,gender,date_birth} = req.body
    connection.query('INSERT INTO employee_sons() VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',[id_son_dougther,CC_parents,firstname,secondname,first_lastname,second_lastname,age,school_year,scholarship,culminated,gender,date_birth],(err,result)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({message:"All is good"})
        }
    })
}

exports.GetSons = (req,res)=>{
    connection.query('SELECT * FROM employee_sons',(err,result)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({result})
        }
    })
}

exports.GetSonsById = (req,res)=>{
    connection.query('SELECT * FROM employee_sons WHERE id_son_dougther = ?',req.params.id, (err,rows)=>{
        if(err){
            return res.json({err})
        }
        return res.json({rows})
    })
}


exports.DeleteSons = (req,res)=>{
    connection.query('DELETE FROM employee_sons where id_son_dougther = ?', req.params.id,(err,result)=>{
        if(err){
            return res.json({error: err})
        }
        return res.json({message: 'User deleted'})
    })
}

