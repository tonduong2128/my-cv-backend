import express from "express";
import Contact from "../controller/ContactController.mjs";

var contactRoute = express.Router();

contactRoute.get("", Contact.show);
contactRoute.post("", Contact.create);
contactRoute.put("", Contact.update);
contactRoute.delete("", Contact.delete);

export default contactRoute;    