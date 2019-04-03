import { jobsConstants } from '../constants';
import { skillService } from '../services';

export const filtersActions = {
    selectSkill,
    selectLocation,
};

function selectSkill(skills) {
    return {
        type: jobsConstants.SELECT_SKILL,
        payload: skills,
    };
}

function selectLocation(locations) {
    return {
        type: jobsConstants.SELECT_LOCATION,
        payload: locations,
    };
}
