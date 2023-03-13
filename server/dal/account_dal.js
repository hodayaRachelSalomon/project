const db = require("../Imodels/index")
const AccountDB = db.customers;




exports.createAccount = async (account) => {
  
  return await AccountDB.create(account)

}




exports.getAllAccount = async () => {

  const data = await AccountDB.findAll();

  return data
};




exports.getAccountByPassword = async (password) => {

  return await AccountDB.findOne({ where: { PASSWORD: password } });

};




exports.updateAccount = async (id, req_body) => {

  return await AccountDB.update(req_body, {
    where: { ID: id }
  })

};




exports.deleteAccountById = async (id) => {

  return await AccountDB.destroy({
    where: { ID: id }
  })

};




exports.getAccountById = async (id) => {

  return await AccountDB.findByPk({ where: { ID: id } });

};






