const fetch =  require('node-fetch');;
module.exports.getSubmission  = async (req,res) => {
    const username = req.params.username
    // console.log(username);
    const endpoint = "https://leetcode.com/graphql";
    const headers = {
        "content-type": "application/json",
    };
    const graphqlQuery = {
        "query": `query getRecentSubmissionList($username: String!, $limit: Int) {
            recentSubmissionList(username: $username, limit: $limit) {
                title
                titleSlug
                timestamp
                statusDisplay
                lang
                __typename
            }
        }`,
        "variables": {
            "username": username
        }
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