let Sequelize= require("sequelize");
let data= require("./connection");
module.exports = data.define("listviews",{
    id:
    {
        type: Sequelize.INTEGER(10),
        primaryKey:true,
        autoIncrement:true
    },
    first_name:
    {
        type:Sequelize.STRING(20),
    },
    last_name:
    {
        type: Sequelize.STRING(20),
    },
    email:
    {
        type: Sequelize.STRING(20)
    },
    avatar:
    {
        type:Sequelize.STRING(20),
    }

})