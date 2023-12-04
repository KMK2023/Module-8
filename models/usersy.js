const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class usery extends Model {}

usery.init(
  {
    Name: { type: DataTypes.STRING, allowNull: false, required: true },
    email: { type: DataTypes.STRING, allowNull: false, required: true },
    Profimage: { type: DataTypes.STRING, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "usery",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = usery;
