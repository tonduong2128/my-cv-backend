import express from "express";
import InfomationController from "../controller/InformationController.mjs";

var informationRoute = express.Router();

informationRoute.get("", InfomationController.show);
informationRoute.post("", InfomationController.create);
informationRoute.put("", InfomationController.update);
informationRoute.delete("", InfomationController.delete);

export default informationRoute;