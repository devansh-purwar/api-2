const fetch =  require('node-fetch');;
const topic = "stack"
module.exports.getQuestion  = async (req,res) => {
    const endpoint = "https://leetcode.com/graphql";
    const headers = {
        "content-type": "application/json",
    };
    const graphqlQuery = {
        "query": `query getTopicTag($slug: String!) {topicTag(slug: $slug) {name
            translatedName questions{status title difficulty titleSlug acRate}
            }}`,
        "variables": {"slug": topic}
    };
    const options = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(graphqlQuery)
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    res.json(data)
};