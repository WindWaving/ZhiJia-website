const {Sequelize,sequelize}=require('./db')

const User=sequelize.define('user',{
    uId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING,
        unique:true
    },
    password:Sequelize.STRING,
    phone:{
        type:Sequelize.STRING,
        unique:true
    }
})

module.exports=User