const Express = require('express');
const app = Express();
const port =3000;
app.get('/', (request,response) => {
    response.send("hello world");
})
app.listen(port, ()=> {
    console.log('listening on port: ' + port);
})
