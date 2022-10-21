const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dream extends Model {
    analyzeDream(dream) {
        return;
    }
}

Dream.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        tag: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lucid: {
            DataTypes: Boolean,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'dream',
    }
);

module.exports = Dream;
