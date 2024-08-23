const { Profile, Education, WorkExperience, Skill, Project, Hobby, Goal } = require('../models');

const getProfile = async (req, res) => {
    const userId = req.userId;
    try {
        const profile = await Profile.findOne({ where: { userId }, include: [Education, WorkExperience, Skill, Project, Hobby, Goal] });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    const userId = req.userId;
    const profileId = req.params.profileId;
    try {
        const profile = await Profile.findOne({ where: { id: profileId, userId } });
        if (!profile) {
            return res.status(403).json({ message: 'You are not allowed to edit this profile' });
        }
        await profile.update(req.body);
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tương tự, bạn cần tạo các hàm `addEducation`, `updateEducation`, `deleteEducation`, `addWorkExperience`, `updateWorkExperience`, `deleteWorkExperience`, `addSkill`, `updateSkill`, `deleteSkill`, `addProject`, `updateProject`, `deleteProject`, `addHobby`, `updateHobby`, `deleteHobby`, `addGoal`, `updateGoal`, `deleteGoal` tương ứng với các CRUD operation cho các bảng khác.

module.exports = {
    getProfile,
    updateProfile,
    addEducation,
    updateEducation,
    deleteEducation,
    addWorkExperience,
    updateWorkExperience,
    deleteWorkExperience,
    addSkill,
    updateSkill,
    deleteSkill,
    addProject,
    updateProject,
    deleteProject,
    addHobby,
    updateHobby,
    deleteHobby,
    addGoal,
    updateGoal,
    deleteGoal,
};
