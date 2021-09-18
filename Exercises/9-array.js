'use strict';

const phonebook = [
  { name: 'Mao Zedong', phone: '+380665524532' },
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Rene Descartes', phone: '+380936005115' },
];

const findPhoneByName = (name) => {
  for (const ph of phonebook)
    if (ph.name === name)
      return ph.phone;
};

module.exports = { phonebook, findPhoneByName };
