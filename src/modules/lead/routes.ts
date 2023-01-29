//external modules imports
import express from "express";

//internal modules imports
import LeadController from "./controllers/leadController.js";
import SchemaValidator from "../../middleware/schemaValidator.js";
import * as schema from "./schema.js";

const leadRoutes = express.Router();
const leadController = new LeadController();
const schemaValidator = new SchemaValidator();

leadRoutes.get("/get-lead",schemaValidator.validateQueryParams(schema.getLead),leadController.getLead);
leadRoutes.post("/add-lead",schemaValidator.validateBody(schema.addLead),leadController.addLead);

export default leadRoutes;