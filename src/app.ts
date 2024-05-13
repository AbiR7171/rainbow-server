import express from 'express'
import cors from "cors"
import { userRoute } from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + "/uploads"));
app.use(globalErrorHandler)
app.use("/api/v1/user", userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app;
