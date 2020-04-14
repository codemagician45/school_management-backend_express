module.exports = (sequelize, Sequelize) => {
    const University = sequelize.define("universities", {
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
        website: {
            type: Sequelize.STRING
        },
        map_link: {
            type: Sequelize.STRING
        },
        compus: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        users: {
            type: Sequelize.STRING
        },
        emails: {
            type: Sequelize.STRING
        }

    });
    return University;
}