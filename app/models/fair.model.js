module.exports = (sequelize, Sequelize) => {
    const Fair = sequelize.define("fairs", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        start_data: {
            type: Sequelize.DATE
        },
        end_date: {
            type: Sequelize.DATE
        },
        students_grade12_number: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        students_grade11_number: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        universities_max: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        school_id: {
            type: Sequelize.BIGINT
        },
        app_state: {
            type: Sequelize.INTEGER
        },
        to_univ_message: {
            type: Sequelize.STRING
        },
        to_sup_message: {
            type: Sequelize.STRING
        },
    });

    return Fair;
};