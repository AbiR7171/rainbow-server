import express from 'express'
import cors from "cors"
import { userRoute } from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { productRoute } from './app/modules/product/product.route'
import { categoryRoute } from './app/modules/category/category.route'
import { cartRoute } from './app/modules/carts/cart.route'
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + "/uploads"));
app.use(globalErrorHandler)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/product", productRoute)
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/cart", cartRoute)

app.get('/', (req, res) => {
  res.send('Hello RainBow!')
})


export default app;
