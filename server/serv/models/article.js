const {Sequelize,sequelize}=require('./db')

const Article=sequelize.define('article',{
    aId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:Sequelize.STRING,
    author:Sequelize.STRING,
    views:Sequelize.INTEGER,
    date:Sequelize.DATE,
    content:Sequelize.TEXT
})

module.exports=Article