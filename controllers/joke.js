const fetch = require('node-fetch');

module.exports.getJoke = async (req,res) => {
    try {
        let url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        res.json(json);
    } catch (error) {
        console.log(error);
    }
};