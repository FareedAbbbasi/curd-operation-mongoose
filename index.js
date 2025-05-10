let express = require("express")
let app = express();
app.use(express.json());
const mongoose = require('mongoose');
const enqueryModel = require("./App/model/enqueryModel");
const { enqueryInsert, enqueryView, enquiryDelete, enquiryUpdate } = require("./App/constroller/web/userEnqueryContoller");
const { enqueryRoutes } = require("./App/routes/web/enqueryROutes");
require('dotenv').config()

app.use("/web/api/enquiry", enqueryRoutes )

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT, () => {
        console.log("Server is running on the port",  process.env.PORT)
    })
})

