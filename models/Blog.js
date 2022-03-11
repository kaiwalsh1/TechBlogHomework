const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.String,
        },
        content: {
            type: DataTypes.String,
        },
        username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
            },
        },
        author: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        comments: {
            type: DataTypes.UUID,
            references: {
                model: 'comment',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'blog',
    }
);

module.exports = Blog;