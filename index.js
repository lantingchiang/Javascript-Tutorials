//import dependency with Node's require()
//ES6 syntax: import express from 'express'
const express = require('express');
const app = express(); //express exports package as function
const port = 3000

//assigns name 'view engine' to value 'ejs'
app.set('view engine', 'ejs')

/* Version 1
//sends message as response upon GET request on root
//second argument is function that determines what code to run upon request
app.get('/', (req, res) => res.send('Hello World!'));
//anonymous function: defined & called at same time
*/

function handleIndexRequest(req, res) {
    //res.send("Hello world!");

    const name = req.query.name || 'Robert Langdon';
    //pass name of template to use to render; render checks in "views" directory
    //can append file extension or not
    //passing context: when key is same as variable name, can shorten to this
    res.render('home', { name });
}

app.get('/', handleIndexRequest);

//listens for requests on this port
app.listen(port, () => {
    console.log('Example app listening on port 3000');
});
//function is a callback: sth that happens at the end of the process