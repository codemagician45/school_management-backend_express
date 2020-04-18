module.exports = (sequelize, Sequelize) => {

    const Counselor = sequelize.define("counselors", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        school_id: {
            type: Sequelize.INTEGER
        }


    });
    return Counselor;



}