const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000


require('./server/config/mongoose.config')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require('./server/routes/product.routes')(app);


app.listen(PORT, () => {
    console.log(`You are connected to Port ${PORT}`)
});