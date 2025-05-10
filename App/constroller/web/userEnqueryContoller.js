const e  = require("express")
const enqueryModel = require("../../model/enqueryModel")

let enqueryInsert = (req, res) => {
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
 }


 let enqueryView = async (req, res) => {
    let enquiryList = await enqueryModel.find();
    res.send({status: 1, msg: "Data view successfully", data: enquiryList})
}


let enquiryDelete = async (req, res) => {
    let enquiryId = req.params.id
    let deleteId = await enqueryModel.deleteOne({_id:enquiryId})
    res.send({status: 1, msg: "Data delete successfuly!", id: deleteId})
}

let enquiryUpdate = async (req, res) => {
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

}

 module.exports={enqueryInsert, enqueryView, enquiryDelete, enquiryUpdate}