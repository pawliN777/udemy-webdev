import mongoose from 'mongoose';
import validator from 'validator';

const ContactSchema = new mongoose.Schema({
  forename: { type: String, required: true, default: '' },
  lastname: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  phone: { type: String, required: false, default: '' },

  accountId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

export default class Contact {
  constructor(body, accountId) {
    this.body = body;
    this.errors = [];
    this.accountId = accountId;
    this.contact = null;
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      forename: this.body.forename,
      lastname: this.body.lastname,
      email: this.body.email,
      phone: this.body.phone,
      accountId: this.accountId,
    };
  }

  isValid() {
    this.cleanUp();

    if (!this.body.forename) this.errors.push('A name is required.');
    if (this.body.email && !validator.isEmail(this.body.email))
      this.errors.push('Email is invalid.');
    if (!this.body.email && !this.body.phone)
      this.errors.push('One way of contact is required at least.');
  }

  async register() {
    this.isValid();

    if (this.errors.length > 0) return;

    this.contact = await ContactModel.create(this.body);
  }

  async edit(id) {
    if (typeof id !== 'string') return;
    this.isValid();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }

  // Métodos estáticos

  static async getId(id) {
    if (typeof id !== 'string') return;

    const contact = await ContactModel.findById(id);
    return contact;
  }

  static async getContacts(accountId) {
    const contacts = await ContactModel.find({ accountId }).sort({
      createdAt: -1,
    });
    return contacts;
  }

  static async delete(id) {
    if (typeof id !== 'string') return;
    const contact = await ContactModel.findOneAndDelete({ _id: id });
    return contact;
  }
}
