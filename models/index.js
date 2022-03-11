const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

Blog.belongsTo(User, {
    foreignKey: 'author'
});

User.hasMany(Blog, {
    foreignKey: 'blogId'
});

Blog.hasMany(Comment, {
    foreignKey: 'comments'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blogId'
});

User.hasMany(Comment, {
    foreignKey: 'commentId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = {
    Blog,
    Comment,
    User,
};