module.exports = {
   removeInvalidFields(obj) {
      for (let key in obj) {
        if(!obj[key] && obj[key]!==false) delete obj[key];
      }
      return obj;
  },
  addStatusNewContract(obj={}) {
    return ({...obj, contract_step_code: 1});
  },
  isRequiredFieldsCorrect(obj={}){
    return (_areRequiredFieldsExist(obj) && _areRequiredFieldsFilled(obj))
  },
};
_areRequiredFieldsExist=(obj)=>{
  const fieldsArray = Object.keys(obj)
  if(fieldsArray.indexOf('client_name')<0 ||
     fieldsArray.indexOf('client_email')<0 ||
     fieldsArray.indexOf('client_cpf')<0 ||
     fieldsArray.indexOf('contract_value')<0) return false;
  return true;
}
_areRequiredFieldsFilled= (obj)=>{
  const valueFieldsArray = Object.values(obj)
  let response = true
  for (let i = 0; i < valueFieldsArray.length; i++) {
    if(!valueFieldsArray[i] && valueFieldsArray[i]!==false) {
      response = false;
      break;
    }
 }
 return response;
}
