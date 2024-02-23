const express = require('express');
const connectToDb =require('./database/dBconnection')
const cors = require('cors');
const fileRouter = require('./routes/apiRoutes');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
connectToDb()

app.use('/api', fileRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
