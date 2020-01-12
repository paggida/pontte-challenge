module.exports = {
   removeInvalidFields(obj) {
      for (let key in obj) {
        if(!obj[key] || obj[key]===false) delete obj[key];
      }
      return obj;
  },
  addStatusNewContract(obj={}) {
    return ({...obj, status: 0});
  },
  isRequiredFieldsCorrect(obj={}){
    return (_areRequiredFieldsExist(obj) && _areRequiredFieldsFilled(obj))
  }
};
_areRequiredFieldsExist=(obj)=>{
  const fieldsArray = Object.keys(obj)
  if(fieldsArray.indexOf('client_name')<0 ||
     fieldsArray.indexOf('client_email')<0 ||
     fieldsArray.indexOf('client_cpf')<0 ||
     fieldsArray.indexOf('value')<0) return false;
  return true;
}
_areRequiredFieldsFilled=(obj)=>{
  const valueFieldsArray = Object.values(obj)
  for (let value in valueFieldsArray) {
    if(!value || value===false) return false;
  }
  return true;
}
