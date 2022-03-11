const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        text: {
            type: DataTypes.String,
            required: true,
        },
        blogId: {
            type: DataTypes.UUID,
            references: {
                model: 'blog',
                key: 'id'
            },
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'comment',
    }
);

module.exports = Comment;