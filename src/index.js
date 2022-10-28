const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
    res.send("Welcome!!!");
})

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`)
})