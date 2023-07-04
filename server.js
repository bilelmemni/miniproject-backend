const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('./config/connect')

const app=express()

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
 res.json({ message: 'hello word' });
});



app.use('/api', require('./routers/admin'));
app.use('/api', require('./routers/empolye'));
app.use('/api', require('./routers/mission'));
app.use('/api', require('./routers/affectation'));



app.listen(3000,()=>{
    console.log('server work !!');
})