module.exports = (sequelize, Sequelize) => {
    const DataTypes = require("sequelize");
    const Login = sequelize.define(
      "tbl_pretest",
      {
        _id: {
          type: DataTypes.STRING(250),
          allowNull: false,         
          field: "_id",
          primaryKey: true,
        },
        Seed_RepDate: {
          type: DataTypes.STRING(250),
          allowNull: true,
          comment: 'Seed_RepDate',   
          field: "Seed_RepDate",
        },
        Seed_Year: {
          type: DataTypes.STRING(250),
          allowNull: true,
          defaultValue: 0,
          comment: 'Seed_Year',   
          field: "Seed_Year",
        },
        Seeds_YearWeek: {
          type: DataTypes.STRING(250),
          allowNull: true,
          defaultValue: 0,
          comment: 'Seeds_YearWeek',   
          field: "Seeds_YearWeek",
        },            
        Seed_Varity: {
          type: DataTypes.STRING(150),
          allowNull: true,
          defaultValue: null,
          comment: 'Seed_Varity',   
          field: "Seed_Varity",
        },
        Seed_RDCSD: {
          type: DataTypes.STRING(250),
          allowNull: true,
          defaultValue: null,
          comment: 'Seed_RDCSD',   
          field: "Seed_RDCSD",
        },
        Seed_Stock2Sale: {
          type: DataTypes.STRING(250),
          allowNull: true,
          defaultValue: null,
          comment: 'Seed_Stock2Sale',   
          field: "Seed_Stock2Sale",
        },
        Seed_Season: {
          type: DataTypes.STRING(250),
          allowNull: true,
          defaultValue: null,
          comment: 'Seed_Season',   
          field: "Seed_Season",
        },
        Seed_Crop_Year: {
          type: DataTypes.STRING(250),
          allowNull: true,
          defaultValue: null,
          comment: 'Seed_Crop_Year',   
          field: "Seed_Crop_Year",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return Login;
  };