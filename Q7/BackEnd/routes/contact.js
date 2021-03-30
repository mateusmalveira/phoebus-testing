let express = require("express");
let router = express.Router();

let contact_controller = require("../app/Controllers/contactController");

//Return all contacts
router.get("/", contact_controller.list_contact_all);

router.post("/search", contact_controller.search_contact);

router.post("/", contact_controller.add_contact);

// Return contact from id
router.get("/:id", contact_controller.list_contact);

// Return Update from
router.put("/", contact_controller.update_contact);

router.delete("/:id", contact_controller.destroy_contact);

module.exports = router;
