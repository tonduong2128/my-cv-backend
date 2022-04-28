import express from "express";
import Descripntion from "../controller/DescriptionController.mjs";

var descriptionRoute = express.Router();

descriptionRoute.get("", Descripntion.show);
descriptionRoute.post("", Descripntion.create);
descriptionRoute.put("", Descripntion.update);
descriptionRoute.delete("", Descripntion.delete);

export default descriptionRoute;