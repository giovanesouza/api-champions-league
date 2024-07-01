import express, {Request, Response} from "express";

const app = express(); // cria aplicação expressx
const port = process.env.PORT;

app.get('/', (req: Request, res: Response)=> {
    res.status(200).json('Bem vindo(a) à API da Champions League.');
});



app.listen(port, ()=> {
    console.log(`Aplicação rodando em: http://localhost:${port}`)
});