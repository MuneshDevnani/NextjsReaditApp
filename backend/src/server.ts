import 'reflect-metadata'
import {createConnection} from 'typeorm'
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config();

import authRoutes from './routes/auth'
import postsRoutes from './routes/posts'
import subRoutes from './routes/subs'

import trim from './middleware/trim'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))
app.use(trim)
app.use(cookieParser())

app.get('/', (req, res) => res.send('Hello world'))
app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/subs', subRoutes)

app.listen(port, async () =>{
    console.log(`Server running at http:localhost:${port}`);
    try{
     await createConnection()
      console.log("Database connected!");

    }catch (err){
        console.log(err);
        
    }
})

