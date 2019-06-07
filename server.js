const express =require('express')
const app = express()
const port = 9000

app.get('/',function(req,res){
    res.send("Contestando una peticion del metodo get")
})

app.listen(port,function(){
    console.log('example app listening on port ${port}!')
})

app.post('/',function(req,res){
    res.send('Constestando una peticion del metodo post')
})

app.delete('/',function(req,res){
    res.send('constendo una peticion del metodo delete')
})


app.put('/',function(req,res){
    res.send('constendo una peticion del metodo put')
})