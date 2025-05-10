let express = require("express");
const { enqueryView, enqueryInsert, enquiryDelete, enquiryUpdate } = require("../../constroller/web/userEnqueryContoller");
let enqueryRoutes = express.Router();

enqueryRoutes.get("/enquiry-view", enqueryView)
enqueryRoutes.post("/enquiry-insert", enqueryInsert)
enqueryRoutes.delete("/enquiry-delete/:id", enquiryDelete)
enqueryRoutes.put("/enquiry-update/:id", enquiryUpdate)


module.exports={enqueryRoutes}