import express  from "express";
const port = 300;
const app = express();


app.get('/', (req : any, res : any)  => {
    app.send("hello")
})

app.get('/dogs', (req : any,res : any) => {
    app.send("this is a dog")
})

app.listen(port, () => {
    
    console.log(`server started at http://localhost:${port}`);
});