const express = require("express")
const {pool} = require("../database")

exports.CreateSons = (req,res)=>{
    const {id_son_dougther,CC_parents,firstname,secondname,first_lastname,second_lastname,age,school_year,scholarship,culminated,gender,date_birth} = req.body
    pool.query('INSERT INTO employee_sons() VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',[id_son_dougther,CC_parents,firstname,secondname,first_lastname,second_lastname,age,school_year,scholarship,culminated,gender,date_birth],(err,result)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({message:"All is good"})
        }
    })
}

exports.GetSons = (req,res)=>{
    console.log("Hey")
    pool.query('SELECT * FROM employee_sons',(err,result)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({result})
        }
    })
}

exports.GetSonsById = (req,res)=>{
    pool.query('SELECT * FROM employee_sons WHERE id_son_dougther = ?',req.params.id, (err,rows)=>{
        if(err){
            return res.json({err})
        }
        return res.json({rows})
    })
}

exports.DeleteSons = (req,res)=>{
    pool.query('DELETE FROM employee_sons where id_son_dougther = ?', req.params.id,(err,result)=>{
        if(err){
            return res.json({error: err})
        }
        return res.json({message: 'User deleted'})
    })
}

exports.GetGenders = (req,res) =>{
    console.log("Hey!!")
    const {gender} = req.body
    try {
        pool.query(' select * from employee_sons where gender = ?',gender,(err,rows)=>{
            if(err){
                res.json({err})
            }else{
                res.json({rows})
            }
        })   
    } catch (error) {
        console.log("We have an error ",error)
    }
}