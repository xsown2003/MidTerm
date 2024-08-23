const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Project = sequelize.define('Project', {
        project_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        role: DataTypes.STRING,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE
    });

    return Project;
};
