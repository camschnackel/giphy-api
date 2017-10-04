var router = require('express').Router();
var path = require('path');
var request = require('request');

router.get('/', function (req, res) {
    console.log('in the giphy route', req.query);

    var options = {
        url: 'https://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_API_KEY + '&q=' + req.query.name + '&limit=25&offset=0&rating=PG&lang=en',
        method: 'GET',
        // headers: {
        //     'Authorization' : 'Token ' + process.env.GIPHY_API_KEY,
        //     'User-Agent' : 'request dotenv cam'
        // }
    }

    request(options, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        // send entire body or parts of it
        res.status(200).send(JSON.parse(body));
    })

})

module.exports = router;