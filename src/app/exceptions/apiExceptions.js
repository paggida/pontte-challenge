module.exports = {
  throwApiException(errorObject) {
    const message = errorObject.message
      ? errorObject.message
      : 'Unknown error accessing external API.';
    return { status: 500, message, type: 'API' };
  },
  throwAppException(errorCode, errorTable={}) {
    const { name: type , data: errorData } = errorTable
    const validatedException = _isValidException(errorCode, type, errorData);
    const validateCode = _isErrorCode(errorCode)? errorCode : 'X';
    return (validatedException)? {...validatedException, type, status:validateCode} : { status: validateCode , message: 'Unknown error code.', type: type || 'Unknown error type' };
  }
};

_getException = (errorCode, errorData) => errorData.find(error => error.status === errorCode);

_isEmptyParam = param => !param;

_isErrorCode = code => code != 0;

_isValidException = (errorCode, type, errorData) =>{
    if(_isEmptyParam(type)) return false;
    if(_isEmptyParam(errorData)) return false;
    const foundException = _getException(errorCode, errorData);
    return (!!foundException)? foundException : false;
  };
