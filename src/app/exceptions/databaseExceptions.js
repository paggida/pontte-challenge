const errorTable = [
  { status: 1, message: 'Table not found.' },
  { status: 2, message: 'Invalid record.' },
  { status: 3, message: 'Id with duplicity.' },
  { status: 4, message: 'Inexistent id.' },
  { status: 5, message: 'Writing error in table.' }
];
module.exports = {
  throwException(errorCode) {
    const error = errorTable.find(error => error.status === errorCode);
    if (_isValidException(error)) {
      return {
        ...errorTable.find(error => error.status === errorCode),
        type: 'DB'
      };
    } else {
      return { status: errorCode, message: 'Unknown error code', type: 'DB' };
    }
  }
};

_isValidException = error => !!error;
