let express = require("express");
let router = express.Router();
// Contacts controller
let contact_controller = require("../app/Controllers/contactController");

//Return all contacts
router.get("/", contact_controller.list_contact_all);

// Add contact
router.post("/", contact_controller.add_contact);

// Return contact from id
router.get("/:id", contact_controller.list_contact);

// Update contacts
router.put("/", contact_controller.update_contact);

// remove contacts
router.delete("/:id", contact_controller.destroy_contact);

module.exports = router;
