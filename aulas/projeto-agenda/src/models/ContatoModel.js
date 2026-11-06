const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true, default: '' },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function () {
  try {
    this.valid();

    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
  } catch (e) {
    console.error('Não foi salvar o contato no banco de dados', e);
  }
};

Contato.prototype.valid = function () {
  this.cleanUp();

  if (!this.body.nome) this.errors.push('O nome é obrigatório.');
  if (this.body.email && !validator.isEmail(this.body.email))
    this.errors.push('O campo "Email" é inválido.');
  if (!this.body.email && !this.body.telefone)
    this.errors.push('É necessário ao menos um meio de contato.');
};

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.edit = async function (id) {
  if (typeof id !== 'string') return;
  this.valid();
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
};

// Métodos estáticos

Contato.buscaPorId = async function (id) {
  try {
    if (typeof id !== 'string') return;

    const contato = await ContatoModel.findById(id);
    return contato;
  } catch (e) {
    console.error('Erro ao buscar o id', e);
  }
};

Contato.buscaContatos = async function () {
  try {
    const contatos = await ContatoModel.find()
      .sort({ criadoEm: -1 });
    return contatos;
  } catch (e) {
    console.error('Erro ao buscar os contatos', e);
  }
};

Contato.delete = async function (id) {
  try {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({ _id: id });
    return contato;
  } catch (e) {
    console.error('Erro ao excluir o contato', e);
  }
};
module.exports = Contato;
