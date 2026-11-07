import mongoose from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';

const AccountSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const AccountModel = mongoose.model('Account', AccountSchema);

export default class Account {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async userExists() {
    this.user = await AccountModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push('The user already exists.');
  }

  isValid() {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) {
      this.errors.push('Invalid Email.');
    }

    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push(
        'The password needs to be between 3 and 50 characters long.',
      );
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }

  async login() {
    this.isValid();
    if (this.errors.length > 0) return;
    this.user = await AccountModel.findOne({ email: this.body.email });

    if (!this.user) {
      this.errors.push('The user did not exists.');
      return;
    }

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Invalid password');
      this.user = null;
      return;
    }
  }

  async register() {
    this.isValid();
    if (this.errors.length > 0) return;

    await this.userExists();
    if (this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    this.user = await AccountModel.create(this.body);
  }
}
