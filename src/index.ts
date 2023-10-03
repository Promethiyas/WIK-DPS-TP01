import express = require("express")

const app = express();
app.use((req : any, res : any, next : any) => {
    if (req.originalUrl != "/ping"){
        res.send('ERROR 404');
    }else{
        let headers = req.headers;
        res.json(headers)
    }
    
})
app.get('/', (req, res) => {
    res.send('ERROR 404');
})
app.get('/ping', function (req, res) {
    let headers = req.headers;
    res.json(headers)
});

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})

