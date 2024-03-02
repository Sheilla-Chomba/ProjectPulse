import express,  {NextFunction, Request, Response, json} from 'express'
import cors from 'cors'
import userRouter from './Routes/user.router'
import auth_router from './Routes/auth.router'
import trips_router from './Routes/trips.router'
import  tourRouter  from "./Routes/tour.routes";

const app = express()

app.use(cors())
app.use(json())

app.use('/users', userRouter)
app.use('/auth', auth_router)
app.use('/trips', trips_router)
app.use("/tours", tourRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})

let port:number = 4100;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})