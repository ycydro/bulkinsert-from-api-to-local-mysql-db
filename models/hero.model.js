import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Hero = sequelize.define(
  "hero",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "heroes",
    timestamps: false,
  },
);

export default Hero;
