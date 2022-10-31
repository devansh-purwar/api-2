const fetch = require('node-fetch');

module.exports.getCodeChef = async (req,res) => {
    try {
        const username = "devanshpurwar"
        let url = `https://competitive-coding-api.herokuapp.com/api/codechef/${username}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        res.json(json);
    } catch (error) {
        console.log(error);
    }
};