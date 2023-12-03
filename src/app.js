import express from 'express'

const app = express()


app.get('/', (req, res)  => {
   res.send('Olá mundo!')
})

app.get('/selecoes', (req, res)=>{
   res.send('Lista de seleções')
})
export default app