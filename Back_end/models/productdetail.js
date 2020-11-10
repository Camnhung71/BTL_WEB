const sequelize = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const productdetail = sequelize.define("productdetail", {
        idProduct:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        productDescription:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        tableName: 'productdetail',
        createdAt: false,
        updatedAt: false,
    });
    return productdetail;
}