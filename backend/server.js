import colors from 'colors'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()

connectDB()
const app=express()



app.get('/',(req,res)=>
{
    res.send('API is running............')
})

app.use('/api/products',productRoutes)

app.use(notFound)


app.use(errorHandler)

const PORT=process.env.port||5000
app.listen(PORT,
    console.log(
        `app is running in ${process.env.NODE_ENV} mode on  port ${PORT}`.grey.bold))