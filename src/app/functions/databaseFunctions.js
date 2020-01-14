const e = require("../Exceptions/apiExceptions");
const dbErrorTable = require("../Exceptions/databaseExceptions");

module.exports = {
  async insert(record, model) {
    try{
      if(_isValidModel(model)){
        return await model.create(record)
      }else{
        return e.throwAppException(5, dbErrorTable)
      }
    }
    catch(err){
      return e.throwAppException(1, dbErrorTable)
    }
  },
  async findAll(model) {
    try{
        if(_isValidModel(model)){
          return await model.findAll()
        }else{
          return e.throwAppException(5, dbErrorTable)
        }
    }
    catch(err){
      return e.throwAppException(2, dbErrorTable)
    }
  },
  async findById(id, model) {
    try{
        if(_isValidModel(model)){
          return await model.findByPk(id)
        }else{
          return e.throwAppException(5, dbErrorTable)
        }
    }
    catch(err){
      return e.throwAppException(2, dbErrorTable)
    }
  },
  async findByfield(value, field, model) {
    try{
        if(_isValidModel(model)){
          const filterObj = JSON.parse(`{"${field}":"${value}"}`)
          return await model.findAll({ where: filterObj})
        }else{
          return e.throwAppException(5, dbErrorTable)
        }
    }
    catch(err){
      return e.throwAppException(2, dbErrorTable)
    }
  },
  async update(id, changedObj, model) {
    try{
        if(_isValidModel(model)){
          return await model.update(changedObj, { where: { id } })
        }else{
          return e.throwAppException(5, dbErrorTable)
        }
    }
    catch(err){
      return e.throwAppException(3, dbErrorTable)
    }
  },
  async delete(id, model) {
    try{
        if(_isValidModel(model)){
          return await model.destroy({ where: { id } })
        }else{
          return e.throwAppException(5, dbErrorTable)
        }
    }
    catch(err){
      return e.throwAppException(4, dbErrorTable)
    }
  },
};

_isValidModel=model=>{
  if (typeof(model)!=='function') return false
  if (typeof(model.create)!=='function') return false
  if (typeof(model.findByPk)!=='function') return false
  if (typeof(model.destroy)!=='function') return false
  return true
};
