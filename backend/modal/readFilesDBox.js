const { Dropbox } = require('dropbox'); // Import the Dropbox SDK
const fetch = require('isomorphic-fetch');

const dbx = new Dropbox({
    accessToken: process.env.DB_ACCESS_KEY,
    fetch
});


const readFileDBox=async (res,path)=>{
    try {
        // Request a list of files from Dropbox
        const files = await dbx.filesListFolder({path});
        // Return the list of file entries
        console.log(files.result.entries) 
        return res.status(200).send("Done");
    } catch (error) {
        // Log any errors that occur
        console.error('Error:', error);
        return res.status(400).send(error)
    }
}


module.exports= readFileDBox

