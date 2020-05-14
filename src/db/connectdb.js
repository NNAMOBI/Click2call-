"use strict";

const mysql = require('mysql')
const { Sequelize } = require('sequelize');

// testing the connection to the db
const connection = new Sequelize('click2Call', process.env.Db_User, process.env.Db_Password, {
    host: process.env.Db_Host,
    dialect: 'mysql'
  });



  module.exports = connection;