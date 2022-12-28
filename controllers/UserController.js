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
    const {firstname,secondname,first_lastname,second_lastname,CC,business_id,gender,EPS,AFT,date_birth,date_admission,position,cellphone,status} = req.body
    connection.query('INSERT INTO employees () VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[firstname,secondname,first_lastname,second_lastname,CC,business_id,gender,EPS,AFT,date_birth,date_admission,position,cellphone,status],(err,result)=>{
        if(err){
            return res.json({err: err})
        }
        return res.json({message: result})
    })
}

exports.DeleteUser = (req,res)=>{
    connection.query('DELETE FROM employees where CC = ?', req.params.id,(err,result)=>{
        if(err){
            return res.json({error: err})
        }
        return res.json({message: 'User deleted'})
    })
}

exports.GetUserFiltered = (req,res) =>{
    const {business,age} = req.body
    connection.query('select employees.CC,employees.firstname,employees.secondname,employees.first_lastname,employees.second_lastname,employee_sons.gender,employee_sons.firstname,employee_sons.secondname,employee_sons.first_lastname,employee_sons.second_lastname,employee_sons.age from employee_sons inner join employees on employees.CC = employee_sons.CC_parents where employees.business_id = ? and employee_sons.age <=?;',[business,age],(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json({result})
    })
}

exports.GetUsersByGender = (req,res) =>{
    const {business_id,age}=req.body
    connection.query('select employee_sons.gender,count(*) from employee_sons inner join employees on employees.CC = employee_sons.CC_parents where employees.business_id = ? and employee_sons.age <=? group by(gender)',[business_id,age],(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json({result})

    })
}