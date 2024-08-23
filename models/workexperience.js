const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const WorkExperience = sequelize.define('WorkExperience', {
        company_name: DataTypes.STRING,
        role: DataTypes.STRING,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE
    });

    return WorkExperience;
};
