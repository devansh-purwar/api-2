const express = require('express');
const { getContests } = require('./controllers/clist');
const { getLeetCode } = require('./controllers/leetcode');
const { getCodeforces } = require('./controllers/codeforces');
const { getQuestion } = require('./controllers/questions');
const app = express()
const port = 3000


const {getJoke} = require('./controllers/joke');
const { getCodeChef } = require('./controllers/codechef');

app.get('/',(req,res) => {
    getJoke(req,res);
})
app.get('/contest',(req,res) =>{
    getContests(req,res);
})

// app.get('/leetcode',(req,res) =>{
//     getLeetCode(req,res);
// })
// app.get('/codechef',(req,res) =>{
//     getCodeChef(req,res);
// })
// app.get('/codeforces',(req,res) =>{
//     getCodeforces(req,res);
// })
app.get('/question',(req,res) =>{
    getQuestion(req,res);
})
app.listen(3001, () => {
    console.log("Server running on port 3001");
});