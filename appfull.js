const express = require('express');
const AliexScrape = require('./full_data');


const app = express();

app.get(
    '/',
    async (req,res,next)=>{
        try{
            let productId = req.query.productId;
            let result = await AliexScrape(productId) // 32853590425 is a productId
            res.status(200)
            .send(result);
        }catch(e){
            res.send(e);
        }
       
    }
);

app.listen(5000,()=>{
    console.log("Listening");
});