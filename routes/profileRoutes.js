const express = require('express');
const { verifyToken } = require('../middleware/auth');
const {
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
} = require('../controllers/profileController');
const router = express.Router();

router.use(verifyToken);

router.get('/', getProfile);
router.put('/:profileId', updateProfile);

router.post('/:profileId/education', addEducation);
router.put('/:profileId/education/:educationId', updateEducation);
router.delete('/:profileId/education/:educationId', deleteEducation);

router.post('/:profileId/work_experience', addWorkExperience);
router.put('/:profileId/work_experience/:experienceId', updateWorkExperience);
router.delete('/:profileId/work_experience/:experienceId', deleteWorkExperience);

router.post('/:profileId/skill', addSkill);
router.put('/:profileId/skill/:skillId', updateSkill);
router.delete('/:profileId/skill/:skillId', deleteSkill);

router.post('/:profileId/project', addProject);
router.put('/:profileId/project/:projectId', updateProject);
router.delete('/:profileId/project/:projectId', deleteProject);

router.post('/:profileId/hobby', addHobby);
router.put('/:profileId/hobby/:hobbyId', updateHobby);
router.delete('/:profileId/hobby/:hobbyId', deleteHobby);

router.post('/:profileId/goal', addGoal);
router.put('/:profileId/goal/:goalId', updateGoal);
router.delete('/:profileId/goal/:goalId', deleteGoal);

module.exports = router;
