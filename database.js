const express = require("express")
const mysql = require("mysql")
require('dotenv').config()

var connection = mysql.createPool({
    connectionLimit:20,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASS,
    user: process.env.DATABASE_USER,
    port: 3306,
    database: process.env.DATABASE_NAME
})

connection.getConnection((err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Connected')
    }
})

module.exports ={connection}