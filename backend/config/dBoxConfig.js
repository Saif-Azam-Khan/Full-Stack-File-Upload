const { Dropbox } = require('dropbox'); // Import the Dropbox SDK
const fetch = require('isomorphic-fetch');

const dbx = new Dropbox({
    accessToken: process.env.DB_ACCESS_KEY,
    fetch
});

module.exports=dbx