Setting up the APplication 

1. Put these in .env.
DB_URL=mongodb+srv://saifazamkhan77:ceLHN6YhhZsyviID@cluster0.fr8tjao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
PROJECT_ID=mern-stack-file-upload

2. Start the BE app by running the command `npm start` do the same for FE with the same command. 
3. The fullstack app is live now FE will run on 3000 port and BE will listen on 8080 port.
4. We can upload 10MB file from FE. the recieved file will be uploaded to GCP.
5. Download and Delete functionalities are also implimented.