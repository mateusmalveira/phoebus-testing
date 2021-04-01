const fs = require("fs");
// Root folder
var appRoot = require("app-root-path");
// import database
const DB = appRoot.path + "/db.json";
const Contact = {
  // List all
  listAll: () => {
    let data = fs.readFileSync(DB);
    return JSON.parse(data).contatos;
  },
  // list contacts by id
  listID: (id) => {
    let data = fs.readFileSync(DB);
    const contatos = JSON.parse(data).contatos;
    return contatos.find((e) => e.id === parseInt(id));
  },
  // insert a new contact
  insert: (name, phone, email) => {
    let data = JSON.parse(fs.readFileSync(DB));
    let contacts = data.contatos;
    const last_id = contacts[contacts.length - 1].id;
    const new_id = last_id !== undefined ? last_id + 1 : 0;
    let newContact = {
      id: new_id,
      name: name,
      email: email,
      telefone: phone,
    };
    contacts.push(newContact);
    fs.writeFileSync(DB, JSON.stringify(data));

    return newContact;
  },
  // update contacts
  update: (id, name, phone, email) => {
    let data = JSON.parse(fs.readFileSync(DB));
    let contacts = data.contatos;
    let updateData = contacts.find((c_id) => c_id.id === id);
    if (updateData) {
      updateData.name = name;
      updateData.telefone = phone;
      updateData.email = email;
      fs.writeFileSync(DB, JSON.stringify(data));
      return updateData;
    }
  },
  // remove contacts
  delete: (id) => {
    let data = JSON.parse(fs.readFileSync(DB));
    let contacts = data.contatos;
    contacts.splice(
      contacts.findIndex((ctc) => {
        return ctc.id === id;
      }),
      1
    );
    fs.writeFileSync(DB, JSON.stringify(data));
    return true;
  },
};

module.exports = Contact;
