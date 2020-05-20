const {Sequelize,sequelize}=require('./db')

const Product=sequelize.define('product',{
    pId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    type:{
        type:Sequelize.STRING
    },
    pName:{
        type:Sequelize.STRING,
        unique:true
    },
    detail:{
        type:Sequelize.TEXT
    }
})

module.exports=Product