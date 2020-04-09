module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define("schools", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        address1: {
            type: Sequelize.STRING
        },
        address2: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        users: {
            type: Sequelize.STRING
        },
        emails: {
            type: Sequelize.STRING
        }
    });

    return School;
};