const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class user extends Model {}

user.init(
  {
    Name: { type: DataTypes.STRING, allowNull: false, required: true },
    email: { type: DataTypes.STRING, allowNull: false, required: true },
    Profimage: { type: DataTypes.STRING, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "user",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = user;
