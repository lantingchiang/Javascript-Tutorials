//import dependency with Node's require()
//ES6 syntax: import express from 'express'
const express = require('express');
const app = express(); //express exports package as function
const port = 3000

var fetch = require('node-fetch');

//assigns name 'view engine' to value 'ejs'
app.set('view engine', 'ejs')

/* Version 1
//sends message as response upon GET request on root
//second argument is function that determines what code to run upon request
app.get('/', (req, res) => res.send('Hello World!'));
//anonymous function: defined & called at same time
*/

/*
function handleIndexRequest(req, res) {
    //res.send("Hello world!");

    const name = req.query.name || 'Robert Langdon';
    //pass name of template to use to render; render checks in "views" directory
    //can append file extension or not
    //passing context: when key is same as variable name, can shorten to this
    res.render('home', { name });
}

app.get('/', handleIndexRequest);
*/

/* Version 1
app.get('/', (req, res) => {
    const code = req.query.code;
    //makes a GET request to url and returns a Promise
    fetch('https://api.nexchange.io/en/api/v1/currency/') //name the data acquired as "cryptoData"
        .then(cryptoData => cryptoData.json()) //callback function
        .then(cryptoData => {
            //if code exists, return data filtered by code. crypto is of type dict, with code being a field
            return code ? cryptoData.filter(crypto => crypto.code == code) : cryptoData;
        })
        .then(cryptoData => {
            //Need to make sure response isn't sent until data is acquired, so put it in callback
            res.render('home', { cryptoData });
        })
        .catch(err => console.log(error))
});*/

//REFACTOR: each function is responsible for one thing
function getCryptos(code) {
    return fetch('https://api.nexchange.io/en/api/v1/currency/')
        .then(cryptoData => cryptoData.json())
        .then(cryptoData => {
            //cryptoData is an array of dicts
            return code ? cryptoData.filter(crypto => crypto.code == code) : cryptoData;
        })
        .catch(err => console.log(err));

}

app.get('/', (req, res) => {
    const code = req.query.code;

    getCryptos(code)
        .then(cryptoData => {
            console.log(cryptoData);
            res.render('home', { cryptoData });
        })
        .catch(err => console.log(err))
});

//listens for requests on this port
app.listen(port, () => {
    console.log('Example app listening on port 3000');
});
//function is a callback: sth that happens at the end of the process