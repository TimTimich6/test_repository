const Express = require('express');
require('dotenv').config();
const app = Express();
const port =process.env.PORT ||3000;
const key = process.env.NEWS_API_KEY;
app.get('/', (request,response) => {
    response.send("hello world");
})
app.listen(port, ()=> {
    console.log('listening on port: ' + port);
})
