var Contact = require("../Models/contact");

exports.list_contact_all = async function (req, res) {
  // List all contacts
  try {
    let data = await Contact.listAll();
    return res.json({ success: true, data: data });
  } catch (err) {
    // throw err;
    return res.json({ success: false, data: [] });
  }
};
//List contact by id
exports.list_contact = async function (req, res) {
  const { id } = req.params;
  try {
    let data = await Contact.listID(id);
    return res.json({ success: true, data: data });
  } catch (err) {
    return res.json({ success: false, data: [] });
    throw err;
  }
};

// Add contact
exports.add_contact = async function (req, res) {
  try {
    const { name, phone, email } = req.body;
    let contact = await Contact.insert(name, phone, email);
    return res.json({ success: true, data: contact });
  } catch (err) {
    return res.json({ success: false, data: [] });
  }
};

// Update contact
exports.update_contact = async function (req, res) {
  try {
    const { id, name, phone, email } = req.body;
    const contact = await Contact.update(id, name, phone, email);
    return res.json({ success: true, data: contact });
  } catch (err) {
    return res.json({ success: false, data: [] });
  }
};

exports.search_contact = async function (req, res) {
  res.send("Implementando");
};

exports.destroy_contact = async function (req, res) {
  try {
    const { id } = req.params;
    const contact = await Contact.delete(id);
    if (contact) {
      return res.json({ success: true, data: true });
    } else {
      return res.json({ success: true, data: false });
    }
  } catch (err) {
    return res.json({ success: false, data: false });
  }
};
