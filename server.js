import express from "express";
// import mysql from 'mysql';
// const con = 

const app = new express();

app.get('/', (req, res) => {
    res.send('Node Express com MySql');
})