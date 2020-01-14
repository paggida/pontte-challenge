module.exports = {
   removeInvalidFields(contractObj) {
      for (let key in contractObj) {
        if(!contractObj[key] && contractObj[key]!==false) delete contractObj[key];
      }
      return contractObj;
  },
  addStatusNewContract(contractObj={}) {
    return ({...contractObj, contract_step_code: 1});
  },
  isRequiredFieldsCorrect(contractObj={}){
    return (_areRequiredFieldsExist(contractObj) && _areRequiredFieldsFilled(contractObj))
  },
  isContractEditable(contractObj={}){
    // Validates if it's an invalid object
    if(!contractObj.contract_step_code) return false
    return contractObj.contract_step_code<=2;
  },
  advanceStepContract(contractObj){
    // Validates if it's an invalid object
    if(!contractObj.contract_step_code) return {}
    return {contract_step_code: ++contractObj.contract_step_code }
  },
  buildDocumentObj(file_name='', document_type_code, contract_code){
    return {file_name, document_type_code, contract_code}
  }
};
_areRequiredFieldsExist=(contractObj)=>{
  const fieldsArray = Object.keys(contractObj)
  if(fieldsArray.indexOf('client_name')<0 ||
     fieldsArray.indexOf('client_email')<0 ||
     fieldsArray.indexOf('client_cpf')<0 ||
     fieldsArray.indexOf('contract_value')<0) return false;
  return true;
}
_areRequiredFieldsFilled= (contractObj)=>{
  const valueFieldsArray = Object.values(contractObj)
  let response = true
  for (let i = 0; i < valueFieldsArray.length; i++) {
    if(!valueFieldsArray[i] && valueFieldsArray[i]!==false) {
      response = false;
      break;
    }
 }
 return response;
}
