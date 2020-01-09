module.exports = {
  throwException(errorObject) {
    const message = errorObject.message
      ? errorObject.message
      : 'Unknown error accessing external API.';
    return { status: 500, message, type: 'API' };
  }
};
