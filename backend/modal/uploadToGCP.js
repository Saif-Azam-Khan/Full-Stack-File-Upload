
const fs = require('fs');
const { Dropbox } = require('dropbox');


// Initialize Express app


// Set up multer for file handling
 // Uploads folder for temp storage

// Initialize Dropbox client
const dbx = new Dropbox({ accessToken: process.env.DB_ACCESS_KEY });

const uploadToGCP = (req, res) => {
  // Access the uploaded file
  const file = req.file;
  
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Read the file from the temporary storage
  fs.readFile(file.path, (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the file.');
    }

    // Upload file to Dropbox
    dbx.filesUpload({ path: `/${file.originalname}`, contents: data })
      .then(response => {
        console.log('File uploaded successfully:', response);
        res.send('File uploaded to Dropbox successfully.');
      })
      .catch(error => {
        console.error('Error uploading to Dropbox:', error);
        res.status(500).send('Error uploading to Dropbox.');
      });
  });
};

module.exports=uploadToGCP
