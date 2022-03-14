/*configuration of app using react*/
//configuration of file
const configure=require("./config");
const express=require("express");
const bodyTracker=require("body-parser");
const officeCulture=require("express-pino-logger");
const { videoToken }=require('/token');

let app=express();
//when parser track the expression of body by url
app.use(bodyTracker.urlencode({extended:false}));
app.use(bodyTracker.json());
app.use(officeCulture);

//when parse send emotion of body
let sendTokenResponse=(token,res)=>{
    res.set('Content-Type','application-json');
    res.send(
        //convert any object to json string
        JSON.stringify({
            //genrate data using public private
            token:token.toJwt()

        })
    );
};

 //featching name and header   
app.get('/api/greeting',(req,res)=>{
    const name=req.query.name;
    res.setHeader('Content-Type','application/json');
    res.send('Content-Type','application/json');
    res.send(JSON.stringify({greeting:`Hello${name}`}));


});
//
app.get('/video/token',(res,req)=>{
    const identity=req.query.identity;
    const room=req.query.room;
    const token=videoToken(identity,room,config);
    sendTokenResponse(token,res)
});
app.post('/video/token',(req,res)=>{
    const identity=req.body.identity;
    const room=req.body.room;
    const token=videoToken(identity,room,config);
    sendTokenResponse(token,res);
});
app.listen(3001, ()=>{
    console.log("Express server is running on localhost:3001");
});
