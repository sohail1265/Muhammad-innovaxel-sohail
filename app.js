const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://soh126562:future122@cluster0.gzcz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});