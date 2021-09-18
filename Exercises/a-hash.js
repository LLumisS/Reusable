'use strict';

const phonebook = {
  'Mao Zedong': { phone: '+380665524532' },
  'Marcus Aurelius': { phone: '+380445554433' },
  'Rene Descartes': { phone: '+380936005115' },
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
