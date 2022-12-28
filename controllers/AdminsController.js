const jwt = require("jsonwebtoken")
const expressjwt = require("express-jwt")
const bcrypt = require("bcrypt")
const {connection} = require("../database")
const { result } = require("lodash")

exports.signup = async(req,res) =>{
    console.log('req body', req.body)
    const {firstname,secondname,first_lastname,second_lastname,password,email,cellphone} = req.body
    var value_pass = password
    const salt = await bcrypt.genSalt(20)
    value_pass = await bcrypt.hash(value_pass,salt)

    connection.query(`INSERT INTO users_Admins (firstname,secondname,first_lastname,second_lastname,password,email,cellphone) VALUES (?,?,?,?,?,?,?)`,[firstname,secondname,first_lastname,second_lastname,value_pass,email,cellphone],(err,result)=>{
        if(err){
            return res.json({err: err})
        }
        return res.json({message: result})
    })
}

exports.signin = async(req,res) =>{
    const {email,password} = req.body
    connection.query('SELECT * FROM users_Admins where email=?',[email],async(err,rows)=>{
        console.log(rows[0].password)
        if(rows[0].password){
            bcrypt.compare(password,rows[0].password,(err,result)=>{
                if(err){
                    return res.status(404).json({message: 'all is bad'})
                }else{
                    return res.json({message:result})
                }
            }) 
        }
    })
}