const fetch = require('node-fetch');

module.exports.getLeetCode = async (req,res) => {
    try {
        const username = "devanshpurwar"
        // let url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        let url = `https://competitive-coding-api.herokuapp.com/api/leetcode/${username}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        res.json(json);
    } catch (error) {
        console.log(error);
    }
};