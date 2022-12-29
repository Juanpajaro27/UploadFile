const express = require("express")
const {connection} = require("../database")

exports.GetUsers = async(req,res)=>{
     await connection.query('SELECT * FROM employees',(err,rows)=>{
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
    connection.query('select business.business_name,employees.CC,employees.firstname,employees.secondname,employees.first_lastname,employees.second_lastname,employee_sons.gender,employee_sons.firstname,employee_sons.secondname,employee_sons.first_lastname,employee_sons.second_lastname,employee_sons.age from employee_sons inner join employees on employees.CC = employee_sons.CC_parents inner join business on employees.business_id = business.business_id where employees.business_id = ? and employee_sons.age <=?;',[business,age],(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json({result})
    })
}

exports.GetContByGender = (req,res) =>{
    const {business_id,age}=req.body
    connection.query('select employee_sons.gender,count(*) from employee_sons inner join employees on employees.CC = employee_sons.CC_parents where employees.business_id = ? and employee_sons.age <=? group by(gender)',[business_id,age],(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json({result})

    })
}

exports.UserByGender = (req,res) =>{
    const {gender,business_id} = req.body;
    console.log(gender,business_id)
    connection.query('select employees.firstname,employees.secondname,employees.first_lastname,employees.second_lastname,employees.CC,business.business_name from employees inner join business on employees.business_id = business.business_id where employees.gender = ? and business.business_id = ?',[gender,business_id],(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        return res.json({result})
    })
}