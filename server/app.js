require('dotenv').config({});
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/mainRouter');

app.use('/api', mainRouter);

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`App is Listening to ${process.env.PORT}`);
    })
});
