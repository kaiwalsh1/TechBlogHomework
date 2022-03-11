const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Blog extends Model {}

Blog.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'blog',
    }
);