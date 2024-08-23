const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Hobby = sequelize.define('Hobby', {
        hobby_name: DataTypes.STRING
    });

    return Hobby;
};
