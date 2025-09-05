
import express, { Request, Response } from "express";
import client from "prom-client";


const app = express()
const PORT= 3000

const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();
collectDefaultMetrics({ register });


app.use(express.json())


app.get("/metrics", async (req: Request, res: Response)=>
{
res.set("Content-Type", register.contentType);
res.end(await register.metrics());
})



app.get("/", (req: Request, res: Response) => {
  res.send("hello from the new d")
}); 

app.listen(PORT, ()=>{
console.log(`Server is running on http://localhost:${PORT}`)

})
