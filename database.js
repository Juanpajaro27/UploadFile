const express = require("express")
const mysql = require("mysql")
require('dotenv').config()
var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASS,
    user: process.env.DATABASE_USER,
    port: 3306,
    database: process.env.DATABASE_NAME
})

connection.connect((err =>{
    if(err) {
        console.log(err)
    }
    console.log('Connected')
}))

module.exports ={connection}