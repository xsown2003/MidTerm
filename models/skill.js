const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Skill = sequelize.define('Skill', {
        skill_name: DataTypes.STRING
    });

    return Skill;
};
