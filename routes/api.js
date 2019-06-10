const express = require("express");
const getApplications = require("../controllers/get-applications");
const postApplication = require("../controllers/post-application");
const updateApplication = require("../controllers/update-application");
const deleteApplication = require("../controllers/delete-application");
const validate = require("./validate");

const router = express.Router();

router.get("/applications", validate.requestBody, getApplications.all);
router.post("/applications", validate.requestBody, postApplication);
router.get("/applications/:id", [validate.routeParam, validate.requestBody], getApplications.byId);
router.put("/applications/:id", [validate.routeParam, validate.requestBody], updateApplication);
router.delete("/applications/:id", validate.routeParam, deleteApplication);

module.exports = router;
