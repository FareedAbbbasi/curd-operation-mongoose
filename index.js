let express = require("express")
let app = express();
app.use(express.json());
const mongoose = require('mongoose');
const enqueryModel = require("./model/enqueryModel");
require('dotenv').config()

app.post("/api/enquiry-insert", (req, res) => {
   let {sName, sEmail, sPhone, sPassword, sMessage} = req.body
   let enquery = new enqueryModel({
    name: sName,
    email: sEmail, 
    phone: sPhone, 
    password: sPassword,
    msg: sMessage
   })
   enquery.save().then(()=>{
    res.send("Data Saved successfully")
   }).catch((err)=>{
    res.send({status: 0, msg: "Error while saving enquery", error: err})
   })
})

app.get("/api/enquiry-view", async (req, res) => {
    let enquiryList = await enqueryModel.find();
    res.send({status: 1, msg: "Data view successfully", data: enquiryList})
})

app.delete("/api/enquiry-delete/:id", async (req, res) => {
    let enquiryId = req.params.id
    let deleteId = await enqueryModel.deleteOne(enquiryId)
    res.send({status: 1, msg: "Data delete successfuly!", id: deleteId})
})

app.put("/api/enquiry-update/:id", async (req, res) => {
    let enquiryId = req.params.id;
    let {sName, sEmail, sPhone, sMessage, sPassword} = req.body;
    let updateObj = {
        name: sName, 
        email: sEmail,
        phone: sPhone, 
        password: sPassword,
        msg: sMessage,
    }
    let resUpdate = await enqueryModel.updateOne({_id: enquiryId}, updateObj)
    res.send({status: 1, msg: "Enquirey update successfully", resUpdate })

})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT, () => {
        console.log("Server is running on the port",  process.env.PORT)
    })
})

