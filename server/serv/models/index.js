const {Sequelize,sequelize}=require('./db')
const User=require('./user')
const Product=require('./product')
const Article=require('./article')
const Admin=require('./adminUser')

User.sync()
Product.sync()
Article.sync()
Admin.sync()

module.exports={
    Sequelize,
    sequelize,
    User,
    Product,
    Article,
    Admin
}