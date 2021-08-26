const express = require("express")
const app = express()

//importing the routes file
const tasks = require("./routes/tasks")

//middleware
app.use(express.json())


//setting a route


app.use("/api/v1/tasks", tasks)

const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`))
