const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

const User = require('./user')(sequelize);
const Profile = require('./profile')(sequelize);
const Education = require('./education')(sequelize);
const WorkExperience = require('./work_experience')(sequelize);
const Skill = require('./skill')(sequelize);
const Project = require('./project')(sequelize);
const Hobby = require('./hobby')(sequelize);
const Goal = require('./goal')(sequelize);

// Associations
User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User);

Profile.hasMany(Education, { foreignKey: 'profileId' });
Profile.hasMany(WorkExperience, { foreignKey: 'profileId' });
Profile.hasMany(Skill, { foreignKey: 'profileId' });
Profile.hasMany(Project, { foreignKey: 'profileId' });
Profile.hasMany(Hobby, { foreignKey: 'profileId' });
Profile.hasMany(Goal, { foreignKey: 'profileId' });

module.exports = {
    sequelize,
    User,
    Profile,
    Education,
    WorkExperience,
    Skill,
    Project,
    Hobby,
    Goal
};
