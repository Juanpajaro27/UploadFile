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

exports.GetGender = (req,res)=>{
    const {business_id,gender} = req.body
    connection.query('select employees.CC,employees.firstname, employees.secondname, employees.first_lastname,employees.second_lastname, employee_sons.firstname, employee_sons.secondname, employee_sons.first_lastname, employee_sons.second_lastname, employee_sons.id_son_dougther from employee_sons inner join employees on employee_sons.CC_parents = employees.CC where employees.business_id = ? and employee_sons.gender = ?',[business_id,gender],(err,result)=>{

        if(err){
            return res.json({error:err})
        }else{
            return res.json({result})
        }
    })
}

exports.GetScholarship = (req,res)=>{
    const scholarship = req.body.scholarship
    console.log(scholarship)
    connection.query('select employee_sons.id_son_dougther, employee_sons.firstname, employee_sons.secondname, employee_sons.first_lastname, employee_sons.second_lastname,employee_sons.gender from employee_sons inner join employees on employee_sons.CC_parents = employees.CC where scholarship = ? and school_year = ?',(err,result)=>{
        if(err){
            return res.json({error:err})
        }else{
            return res.json({result})
        }
    })
}

exports.GetAge = (req,res)=>{
    const age = req.body.age
    console.log(age)
    connection.query('select employee_sons.firstname, employee_sons.secondname, employee_sons.first_lastname, employee_sons.second_lastname, employee_sons.age, employee_sons.id_son_dougther from employee_sons inner join employees on employees.CC = employee_sons.CC_parents inner join business on employees.business_id = business.business_id where employee_sons.age < ?', (err,result)=>{
        if(err){
            return res.json({error:err})
        }else{
            return res.json({result})
        }
    })
}