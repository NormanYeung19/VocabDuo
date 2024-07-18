const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/word-groups', require('./routes/wordGroupRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
