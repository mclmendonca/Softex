const express = require('express')
const server = express()


server.get('/',(req,res)=>{
    return res.json({mensgem: 'Api Está funcionando'})
})

server.listen(3000, () => {
    console.log('Servidor no Ar')
})

