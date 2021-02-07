const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');

app.use(cors());

db.sequelize.sync(()=>{
    app.listen(5000);
});
