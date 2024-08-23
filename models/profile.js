const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Profile = sequelize.define('Profile', {
        full_name: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        place_of_birth: DataTypes.STRING,
        nationality: DataTypes.STRING
    });

    return Profile;
};
