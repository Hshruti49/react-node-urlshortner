const express = require('express');
const connectDB = require('./config/db')

const app = express();

//Connect to database
connectDB();
app.use(express.json({ extended: false }));

//Define routes
app.use('/', require('./routes/geturl'));
app.use('/api/url', require('./routes/url'));
app.use('/api/url', require('./routes/bulkurls'));

const PORT =  5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))