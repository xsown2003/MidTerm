const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Goal = sequelize.define('Goal', {
        goal_description: DataTypes.TEXT
    });

    return Goal;
};
