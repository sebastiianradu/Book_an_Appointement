
// // const button = document.querySelector(".Submit");

// // button.addEventListener('click', () => {
// //     button.style.backgroundColor = 'green';
// // });

// document.querySelector(".Submit").addEventListener("click",function()
// {

//     var audio = new Audio("sounds/click.mp3");

//     audio.play();

// });

import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5500;
const currentDate = new Date();

var userIsAuthorized = false;

app.use(bodyParser.urlencoded({extended: true}));

function userCheck(req, res, next)
{
    userIsAuthorized = true;
    next();
}

app.use(userCheck);

app.get("/", (req, res) =>{
    res.sendFile(_dirname + "/project.html");
});

app.post("/submit", (req, res)=>{
    if(userIsAuthorized) {
        res.sendFile(_dirname + "/project2.html");
    }else
    {
        res.redirect("/");
    }
})

app.listen(port, ()=>{
    console.log('listening on port ', port);
})