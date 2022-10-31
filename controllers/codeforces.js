const fetch = require('node-fetch');

module.exports.getCodeforces = async (req,res) => {
    try {
        const username = "devanshpurwar"
        let url = `https://competitive-coding-api.herokuapp.com/api/codeforces/${username}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        res.json(json);
    } catch (error) {
        console.log(error);
    }
};