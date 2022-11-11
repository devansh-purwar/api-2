const fetch = require('node-fetch');

module.exports.getContests = async (req,res) => {
    try {
        const username = "devanshpurwar"
        const key = "f1309321c2f891da0b6734b7fe99ddc15e24dca4"
        let url = `https://clist.by/api/v2/json/contest/?username=${username}&api_key=${key}&upcoming=true&resource_id__in=1%2C2%2C73%2C12%2C126%2C102&start__gt=2022-10-31T03%3A07%3A43&end__lt=2022-11-20T03%3A07%3A43&order_by=start`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        res.json(json);
    } catch (error) {
        console.log(error);
    }
};