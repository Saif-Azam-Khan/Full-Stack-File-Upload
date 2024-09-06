const https = require("https");
const data = "{\"limit\": 1000}";

const readFileDBox=async (req,res)=>{
    const request = https.request('https://api.dropboxapi.com/2/file_requests/count', {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${process.env.DB_ACCESS_KEY}`,
        },
        
    }, (response) => {
        response.on('data', function(d) {
            const jsonString = d.toString();
            const jsonData = JSON.parse(jsonString);
            console.log(jsonData);
        });
    })
    
    request.end();
}


module.exports= readFileDBox

