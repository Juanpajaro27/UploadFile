const express = require("express")
const {connection} = require("../database")

exports.GetUsers = (req,res)=>{
     connection.query('SELECT * FROM employees',(err,rows)=>{
        if(err){
            return res.json({err:err})
        }
        return res.json({rows})
    })
}

exports.GetUserById = (req,res)=>{
    connection.query('SELECT * FROM employees WHERE CC = ?',req.params.id, (err,rows)=>{
        if(err){
            return res.json({err})
        }
        return res.json({rows})
    })
}

exports.CreateUser = (req,res)=>{
    const {firstname,secondname,first_lastname,second_lastname,CC,business_id,gender,EPS,AFT,date_birth,date_admission,position,affiliate,contributor} = req.body
    connection.query('INSERT INTO employees () VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[firstname,secondname,first_lastname,second_lastname,CC,business_id,gender,EPS,AFT,date_birth,date_admission,position,affiliate,contributor],(err,result)=>{
        if(err){
            return res.json({err: err})
        }
        return res.json({message: result})
    })
}

exports.DeleteUser = (req,res)=>{
    connection.query('DELETE FROM employee where id_employees = ?', req.params.id,(err,result)=>{
        if(err){
            return res.json({error: err})
        }
        return res.json({message: 'User deleted'})
    })
}