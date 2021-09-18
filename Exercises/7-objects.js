'use strict';

const fn = () => {
  const imperor = { name: 'Marcus' };
  let imperor2 = { name: 'Marcus' };

  imperor.name = 'Aurelius';
  imperor2.name = 'Aurelius';

  //imperor = { name: 'Marcus Aurelius' };
  imperor2 = { name: 'Marcus Aurelius' };

};

module.exports = { fn };
