const db = require("../Imodels/index")
const CfsDB = db.credit_for_sales;

const credit_dal = require("../dal/credit_dal");
const { credits } = require("../Imodels/index");
const credit_for_sales = require("../Imodels/credit_for_sales");
const { where, Op } = require("sequelize");




exports.createCfs = async (cfs) => {

  return await CfsDB.create(cfs)

};




exports.getAllCfsByShopId = async (shopId) => {
  console.log(shopId)
  return await CfsDB.findAll({
    include: [{
      model: db.credits,

      include: {
        model: db.purchases, attributes: ['SHOP_ID'],

        raw: true,
        where: {

          SHOP_ID: {
            [Op.eq]: shopId
          },
        }
      }
      , raw: true
    }]
    , raw: true
  });

};




exports.getCfsById = async (id) => {

  const credit_id = await CfsDB.findByPk(id)
  //.creditID;//קוד הזיכוי אותו מחפשים
  const c = credit_id.creditID;

  return await credit_dal.getCreditById(c);//CREDITS קבלת הזיכוי על פי הקוד שלו, ע"י קונטרולר של 
};




exports.updateCfsById = async (id, req_body) => {

  return await CfsDB.update(req_body, {
    where: { ID: id }
  })

};




exports.deleteCfsById_buy = async (id, new_owner) => {

  //מי הבעלים של הזיכוי שעומד להמחק
  const credit_id = await CfsDB.findOne({
    where: { ID: id }
  }).creditID;

  //הבעלים החדשים 
  const data_to_update = {
    "CUSTOMER_ID": new_owner
  }
  //CREDITS עדכון הבעלים החדשים בטבלת 
  credit_dal.updateCredit(credit_id, data_to_update)
  //...הוא נמכרC-CREDIT FOR SALE מחיקת הזיכוי מטבלת 
  return await CfsDB.destroy({
    where: { ID: id }
  })






};




exports.getCfsByCreditId = async (creditId) => {
  return await CfsDB.findOne({ where: { creditID: creditId } })
}