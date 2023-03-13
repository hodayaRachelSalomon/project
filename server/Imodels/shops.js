const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const Shops = sequelize.define('shops', {

        ID: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        SHOP_NAME: {
            type: DataTypes.STRING,
            allowNull: false

        },
        ADDRESS: {
            type: DataTypes.STRING,
            allowNull: true
        },
        MANAGER_NAME: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },

    },
        {
            freezeTableNmae: true
        },
        {
            // timestamps:true//{createdAt:'dCreatedDate',updateAt:'dUpdatedDate'}
        }
    );
    return Shops;

}

