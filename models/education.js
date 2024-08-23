const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Education = sequelize.define('Education', {
        degree: DataTypes.STRING,
        institution: DataTypes.STRING,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE
    });

    return Education;
};
